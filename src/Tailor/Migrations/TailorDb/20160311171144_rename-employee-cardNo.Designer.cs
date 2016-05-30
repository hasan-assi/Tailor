using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Tailor.DAL;

namespace Tailor.Migrations.TailorDb
{
    [DbContext(typeof(TailorDbContext))]
    [Migration("20160311171144_rename-employee-cardNo")]
    partial class renameemployeecardNo
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
        }
    }
}
