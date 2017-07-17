using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Tailor.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace Tailor.Controllers
{
	[Route("api/[controller]")]
	[EnableCors("AllowSpecificOrigin")]
    public class EmployeeController : Controller
    {
	    private IEmployeeRepository EmployeeRepository { set; get; }
        readonly ILogger<EmployeeController> _log;

        public EmployeeController(IEmployeeRepository employeeRepository, ILogger<EmployeeController>  log)
        {
            this._log = log;
	        EmployeeRepository = employeeRepository;
	    }

        [HttpGet]
	    public IEnumerable<Employee> GetAll()
        {
            _log.LogInformation("EmployeeController: GetAll() --> Retrieve all employees.");
            return EmployeeRepository.GetAllEmployees();
        }

        [HttpGet("{id}",Name = "GetEmployee")]
        public IActionResult GetByEmployeeId(int id)
        {
            var emp = EmployeeRepository.FindEmployee(id);
            if (emp == null) return NotFound();
  
            return new ObjectResult(emp);
        }

        [HttpPost]
        public IActionResult Create ([FromBody]Employee employee)
        {
            if (employee == null) return BadRequest();
            EmployeeRepository.AddEmployee(employee);
            return CreatedAtRoute("GetEmployee", new {controller = "Employee", id = employee.Id}, employee);
        }

	    [HttpPut("{id}", Name = "UpdateAsset")]
	    public IActionResult Update(int id, [FromBody] Employee employee)
	    {
	        if (employee == null || employee.Id != id) return BadRequest();
	        var item = EmployeeRepository.FindEmployee(id);
	        if (item == null) return NotFound();
            EmployeeRepository.UpdateEmployee(employee);

            //return CreatedAtRoute("GetEmployee", new {controller = "Employee", id = Employee.Id}, Employee);
	       
	        return new NoContentResult();
	    }

        [HttpDelete("{id}")]
	    public void Detele(int id)
	    {
	        EmployeeRepository.RemoveEmployee(id);
	    }

    }
}
