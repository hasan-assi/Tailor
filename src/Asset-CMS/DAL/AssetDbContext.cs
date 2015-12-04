using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using Asset_CMS.Models;

namespace Asset_CMS.DAL
{
    public class AssetDbContext : DbContext
    {
        public DbSet<Asset> Assets { get; set; }
    }

    public static class DbContextExtensions
    {
        public static void Detach(this DbContext context, object entity)
        {
            context.Entry(entity).State = EntityState.Detached;
        }
    }
}
