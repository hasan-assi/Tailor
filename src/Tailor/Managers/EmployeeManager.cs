using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tailor.Models;

namespace Asset_CMS.Managers
{
    public class EmployeeManager
    {
        private IEmployeeRepository _employeeRepository;
        public EmployeeManager(IEmployeeRepository employeeRepository)
        {
            this._employeeRepository = employeeRepository;
        }

        public IEnumerable<EmployeeTimeSheet> GetEmployeesTimeSheetsByDate(DateTime date)
        {
            var employees = _employeeRepository.GetAllEmployees();
            var employeesTimeSheets = this._employeeRepository.GetEmployeesTimeSheetsByDate(date).Select(x =>
                                        {
                                            x.Checked = true;
                                            return x;
                                        }).ToList();

            foreach (var employee in employees)
            {
                if (employeesTimeSheets.FirstOrDefault(e => e.Employee.Id == employee.Id) == null)
                {
                    employeesTimeSheets.Add(new EmployeeTimeSheet()
                    {
                        Date = DateTime.Today,
                        Employee = employee,
                        HourRate = employee.HourRate,
                        Hours = employee.HourPerDay,
                        Wage = employee.HourRate * employee.HourPerDay,
                        Checked = false
                    });
                }
            }
            return employeesTimeSheets;
        }

        public void CreateEmployeesTimeSheets(IEnumerable<EmployeeTimeSheet> employeesTimeSheets, DateTime date)
        {
            try
            {

            }
            catch (Exception)
            {
                
                throw;
            }
            var savedEmployeesTimeSheets = this._employeeRepository.GetEmployeesTimeSheetsByDate(date);
            IList<EmployeeTimeSheet> toDelete = new List<EmployeeTimeSheet>();
            IList<EmployeeTimeSheet> toUpdate = new List<EmployeeTimeSheet>();
            IList<EmployeeTimeSheet> toAdd = new List<EmployeeTimeSheet>();

            foreach (var employeeTimeSheet in employeesTimeSheets)
            {
                employeeTimeSheet.Date = date;
                if (employeeTimeSheet.Checked)
                {
                    if (employeeTimeSheet.Id > 0)
                    {
                        toUpdate.Add(employeeTimeSheet);
                    }
                    else
                    {
                        toAdd.Add(employeeTimeSheet);
                    }
                }
                else //checked = False
                {
                    if (employeeTimeSheet.Id > 0)
                    {
                        toDelete.Add(employeeTimeSheet);
                    }
                }
            }
            this._employeeRepository.AddEmployeesTimeSheets(toAdd);
            this._employeeRepository.UpdateEmployeesTimeSheets(toUpdate);
            this._employeeRepository.RemoveEmployeesTimesSheets(toDelete);
            this._employeeRepository.Save();
        }
    }
}
