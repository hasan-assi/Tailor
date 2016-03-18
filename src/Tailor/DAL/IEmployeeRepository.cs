using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tailor.Models
{
    public interface IEmployeeRepository
    {
        void Save();
        void AddEmployee(Employee employee);
        IEnumerable<Employee> GetAllEmployees();
        Employee FindEmployee(int Id);
        void RemoveEmployee(int Id);
        void UpdateEmployee(Employee employee);

        void AddEmployeeTimeSheet(EmployeeTimeSheet timeSheet);
        void AddEmployeesTimeSheets(IEnumerable<EmployeeTimeSheet> timeSheets);
        IEnumerable<EmployeeTimeSheet> GetAllEmployeesTimeSheets();
        IEnumerable<EmployeeTimeSheet> GetAllEmployeeTimeSheet(int employeeId);
        IEnumerable<EmployeeTimeSheet> GetEmployeesTimeSheetsByDate(DateTime date);
        void UpdateEmployeesTimeSheets(IEnumerable<EmployeeTimeSheet> timeSheets);
        void RemoveEmployeesTimesSheets(IEnumerable<EmployeeTimeSheet> timeSheets);
    }
}
