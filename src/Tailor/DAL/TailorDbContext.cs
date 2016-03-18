using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using Tailor.Models;

namespace Tailor.DAL
{
    public class TailorDbContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<EmployeeTimeSheet>  EmployeeTimeSheet { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Employee>().Ignore(e => e.Checked);
        }
    }

    public static class DbContextExtensions
    {
        public static void Detach(this DbContext context, object entity)
        {
            context.Entry(entity).State = EntityState.Detached;
        }
    }
}
