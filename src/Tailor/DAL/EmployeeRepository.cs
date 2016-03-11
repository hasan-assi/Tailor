using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Concurrent;
using Tailor.DAL;
using Microsoft.Data.Entity;

namespace Tailor.Models
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private  ConcurrentDictionary<string, Employee> _assets = new ConcurrentDictionary<string, Employee>();
        private TailorDbContext _db;

        public EmployeeRepository(TailorDbContext db)
        {
            _db = db;
        }

        public IEnumerable<Employee> GetAll()
        {
            return _db.Employees.ToList();
        }

        public void Add(Employee employee)
        {
            _db.Employees.Add(employee);
           Save();
        }

        public Employee Find(int id)
        {
            var asset = _db.Employees.FirstOrDefault(x => x.Id == id);
            _db.Detach(asset);
            return asset;
        }

        public void Remove(int id)
        {
            _db.Employees.Remove(new Employee() {Id = id});
            Save();
        }

        public void Update(Employee employee)
        {
            _db.Entry(employee).State = EntityState.Modified;
            Save();
        }

        private void Save()
        {
            _db.SaveChanges();
        }

        private Task SaveAsync()
        {
            return _db.SaveChangesAsync();
        }
    }
}
