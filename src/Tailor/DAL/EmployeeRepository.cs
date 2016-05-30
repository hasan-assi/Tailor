using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Concurrent;
using Tailor.DAL;
using Microsoft.EntityFrameworkCore;

namespace Tailor.Models
{
    public class EmployeeRepository : IEmployeeRepository
    {
        //private  ConcurrentDictionary<string, Employee> _assets = new ConcurrentDictionary<string, Employee>();
        private TailorDbContext _db;

        public EmployeeRepository(TailorDbContext db)
        {
            _db = db;
        }

        public IEnumerable<Employee> GetAllEmployees()
        {
            return _db.Employees.AsNoTracking().ToList();
        }

        public void AddEmployee(Employee employee)
        {
            _db.Employees.Add(employee);
           Save();
        }

        public Employee FindEmployee(int id)
        {
            var employee = _db.Employees.FirstOrDefault(x => x.Id == id);
            _db.Detach(employee);
            return employee;
        }

        public void RemoveEmployee(int id)
        {
            _db.Employees.Remove(new Employee() {Id = id});
            Save();
        }

        public void UpdateEmployee(Employee employee)
        {
            _db.Entry(employee).State = EntityState.Modified;
            Save();
        }

        public void Save()
        {
            _db.SaveChanges();
        }

        private Task SaveAsync()
        {
            return _db.SaveChangesAsync();
        }

        public void AddEmployeeTimeSheet(EmployeeTimeSheet timeSheet)
        {
            _db.EmployeeTimeSheet.Add(timeSheet);
            Save();
        }

        public IEnumerable<EmployeeTimeSheet> GetAllEmployeesTimeSheets()
        {
            return _db.EmployeeTimeSheet.ToList();
        }

        public IEnumerable<EmployeeTimeSheet> GetAllEmployeeTimeSheet(int employeeId)
        {
            return _db.EmployeeTimeSheet.Where(x => x.Employee.Id == employeeId).ToList();
        }

        public IEnumerable<EmployeeTimeSheet> GetEmployeesTimeSheetsByDate(DateTime date)
        {
            return _db.EmployeeTimeSheet.Include(x=>x.Employee).AsNoTracking().Where(x => x.Date.Date == date.Date).ToList();
        }

        public void AddEmployeesTimeSheets(IEnumerable<EmployeeTimeSheet> timeSheets)
        {
            foreach (var employeeTimeSheet in timeSheets)
            {
                _db.Entry(employeeTimeSheet.Employee).State = EntityState.Unchanged;
            }
            _db.EmployeeTimeSheet.AddRange(timeSheets);

        }

       public void UpdateEmployeesTimeSheets(IEnumerable<EmployeeTimeSheet> timeSheets)
        {
           try
           {
                foreach (var employeeTimeSheet in timeSheets)
                {
                    _db.Entry(employeeTimeSheet).State = EntityState.Modified;
                }
                _db.EmployeeTimeSheet.UpdateRange(timeSheets);
            }
           catch
           {
               throw;
           }

        }

        public void RemoveEmployeesTimesSheets(IEnumerable<EmployeeTimeSheet> timeSheets)
        {
            _db.RemoveRange(timeSheets);

        }

    }
}
