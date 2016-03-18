using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using Tailor.DAL;

namespace Tailor.Migrations.TailorDb
{
    [DbContext(typeof(TailorDbContext))]
    [Migration("20160316212445_AddEmployeeTimeSheetTable")]
    partial class AddEmployeeTimeSheetTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Tailor.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CardNo")
                        .IsRequired();

                    b.Property<string>("FirstName");

                    b.Property<decimal>("HourPerDay");

                    b.Property<decimal>("HourRate");

                    b.Property<string>("LastName");

                    b.HasKey("Id");
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
                });

            modelBuilder.Entity("Tailor.Models.EmployeeTimeSheet", b =>
                {
                    b.HasOne("Tailor.Models.Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId");
                });
        }
    }
}
