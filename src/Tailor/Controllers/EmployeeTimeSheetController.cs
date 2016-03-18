using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asset_CMS.Managers;
using Microsoft.AspNet.Mvc;
using Tailor.Models;
using Microsoft.AspNet.Http;

namespace Tailor.Controllers
{
	[Route("api/[controller]")]
    public class EmployeeTimeSheetController : Controller
	{
	    private IEmployeeRepository _employeeRepository;
	    private EmployeeManager _employeeManager;

        public EmployeeTimeSheetController(IEmployeeRepository employeeRepository,
                                           EmployeeManager employeeManager)
	    {
	        this._employeeRepository = employeeRepository;
            this._employeeManager = employeeManager;
	    }

        [HttpGet("{date}", Name = "GetEmployeesTimeSheetsByDate")]
        public IActionResult GetEmployeesTimeSheetsByDate(DateTime date)
        {
            var empTimeSheet = this._employeeManager.GetEmployeesTimeSheetsByDate(date);
            if (empTimeSheet == null) return HttpNotFound();

            return new ObjectResult(empTimeSheet);
        }

        [HttpPost("{date}")]
        public IActionResult Create ([FromBody]IEnumerable< EmployeeTimeSheet> employeesTimeSheets, [FromRoute] DateTime date)
        {
            if (employeesTimeSheets == null) return HttpBadRequest();
            this._employeeManager.CreateEmployeesTimeSheets(employeesTimeSheets, date);
            return CreatedAtRoute("GetEmployeesTimeSheetsByDate", new {controller = "EmployeeTimeSheet", date = date }, employeesTimeSheets);
        }

    }
}
