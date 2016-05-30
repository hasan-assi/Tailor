using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Tailor.DAL;

namespace Tailor.Migrations.TailorDb
{
    [DbContext(typeof(TailorDbContext))]
    partial class TailorDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20896")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Tailor.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CardNo")
                        .IsRequired();

                    b.Property<decimal>("DailyWage");

                    b.Property<string>("FirstName");

                    b.Property<decimal>("HourPerDay");

                    b.Property<decimal>("HourRate");

                    b.Property<string>("LastName");

                    b.HasKey("Id");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("Tailor.Models.EmployeeTimeSheet", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Date");

                    b.Property<int?>("EmployeeId")
                        .IsRequired();

                    b.Property<decimal>("HourRate");

                    b.Property<decimal>("Hours");

                    b.Property<decimal>("Wage");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.ToTable("EmployeeTimeSheet");
                });

            modelBuilder.Entity("Tailor.Models.EmployeeTimeSheet", b =>
                {
                    b.HasOne("Tailor.Models.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
