using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Tailor.Models;
using Microsoft.AspNetCore.Http;

namespace Tailor.Controllers
{
	[Route("api/[controller]")]
    public class EmployeeController : Controller
    {
	    private IEmployeeRepository EmployeeRepository { set; get; }

	    public EmployeeController(IEmployeeRepository employeeRepository)
	    {
	        EmployeeRepository = employeeRepository;
	    }

        [HttpGet]
	    public IEnumerable<Employee> GetAll()
        {
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
