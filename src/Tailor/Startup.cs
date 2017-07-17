using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asset_CMS.Managers;
using Tailor.DAL;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Tailor.Models;
using Tailor.Services;
using Tailor.TestDI;

namespace Tailor
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            //throw new Exception();
            // Set up configuration sources.
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json")
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see http://go.microsoft.com/fwlink/?LinkID=532709
                //builder.AddUserSecrets();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();

            //Configuration["Data:DefaultConnection:ConnectionString"] = $@"Data Source={appEnv.ApplicationBasePath}/yoeman_test.db";

        }

        public IConfigurationRoot Configuration { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<TailorDbContext>(
                    option => option.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));
            //.AddDbContext<ApplicationDbContext>(options =>
            //        options.UseSqlServer(Configuration["Data:IdentityConnection:ConnectionString"])).

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddMvc(options =>
            {
                options.Filters.Add(new GlobalExceptionFilter(Serilog.Log.Logger));
            });//.AddJsonOptions(options => options.SerializerSettings.DateFormatString ="MM/dd/yyyy");

            //TODO: Remove the allow any origin after consultation with security team
            services.AddCors
            (options => {
                options.AddPolicy
                ("AllowSpecificOrigin",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });

            // Add application services.
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();

            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            services.AddScoped<EmployeeManager, EmployeeManager>();

            services.AddScoped<OperationService, OperationService>();
            services.AddTransient<IOperationTransient, Operation>();
            services.AddScoped<IOperationScoped, Operation>();
            services.AddSingleton<IOperationSingleton, Operation>();

            //services.AddScoped<Serilog.ILogger,Serilog.Log.Logger>();
            //services.AddInstance<IOperationInstance>(new Operation());

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddFile("Logs/tailer-{Date}.txt");

            //loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");

                // For more details on creating database during deployment see http://go.microsoft.com/fwlink/?LinkID=615859
                try
                {
                    using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>()
                        .CreateScope())
                    {
                        serviceScope.ServiceProvider.GetService<ApplicationDbContext>()
                             .Database.Migrate();
                    }
                }
                catch { }
            }

            //app.UseIISPlatformHandler(options => options.AuthenticationDescriptions.Clear());
       
            app.UseStaticFiles();

            app.UseIdentity();

            // To configure external authentication please see http://go.microsoft.com/fwlink/?LinkID=532715

        var builder =     app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });


        }

        // Entry point for the application.
        //public static void Main(string[] args) => Microsoft.AspNet.Hosting.WebApplication.Run<Startup>(args);
    }
}
