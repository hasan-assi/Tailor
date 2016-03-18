//http://www.asp.net/mvc/overview/older-versions/getting-started-with-ef-5-using-mvc-4/implementing-the-repository-and-unit-of-work-patterns-in-an-asp-net-mvc-application
//(less important) http://blogs.msdn.com/b/adonet/archive/2009/06/16/using-repository-and-unit-of-work-patterns-with-entity-framework-4-0.aspx
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Linq.Expressions;
//using System.Data;
//using Microsoft.Data.Entity;
//using System.Threading.Tasks;
//using Tailor.DAL;

//namespace Asset_CMS.DAL
//{
//    public class GenericRepository<TEntity> where TEntity : class
//    {
//        internal TailorDbContext context;
//        internal DbSet<TEntity> dbSet;

//        public GenericRepository(TailorDbContext context)
//        {
//            this.context = context;
//            this.dbSet = context.Set<TEntity>();
//        }

//        public virtual IEnumerable<TEntity> Get(
//            Expression<Func<TEntity, bool>> filter = null,
//            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
//            string includeProperties = "")
//        {
//            IQueryable<TEntity> query = dbSet;

//            if (filter != null)
//            {
//                query = query.Where(filter);
//            }

//            foreach (var includeProperty in includeProperties.Split
//                (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
//            {
//                query = query.Include(includeProperty);
//            }

//            if (orderBy != null)
//            {
//                return orderBy(query).ToList();
//            }
//            else
//            {
//                return query.ToList();
//            }
//        }

//        //public virtual TEntity GetByID(object id)
//        //{
//        //    return dbSet.Find(id);
//        //}

//        public virtual void Insert(TEntity entity)
//        {
//            dbSet.Add(entity);
//        }

//        public virtual void Delete(object id)
//        {
//            TEntity entityToDelete = dbSet.Find(id);
//            Delete(entityToDelete);
//        }

//        public virtual void Delete(TEntity entityToDelete)
//        {
//            if (context.Entry(entityToDelete).State == EntityState.Detached)
//            {
//                dbSet.Attach(entityToDelete);
//            }
//            dbSet.Remove(entityToDelete);
//        }

//        public virtual void Update(TEntity entityToUpdate)
//        {
//            dbSet.Attach(entityToUpdate);
//            context.Entry(entityToUpdate).State = EntityState.Modified;
//        }
//    }
//}
