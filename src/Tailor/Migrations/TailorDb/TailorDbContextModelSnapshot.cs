using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using Tailor.DAL;

namespace Tailor.Migrations.TailorDb
{
    [DbContext(typeof(TailorDbContext))]
    partial class TailorDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Tailor.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CardId")
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
