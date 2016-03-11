using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Tailor.Models;
using Microsoft.AspNet.Http;

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
            return EmployeeRepository.GetAll();
        }

        [HttpGet("{id}",Name = "GetEmployee")]
        public IActionResult GetByEmployeeId(int id)
        {
            var asset = EmployeeRepository.Find(id);
            if (asset == null) return HttpNotFound();
  
            return new ObjectResult(asset);
        }

        [HttpPost]
        public IActionResult Create ([FromBody]Employee employee)
        {
            if (employee == null) return HttpBadRequest();
            EmployeeRepository.Add(employee);
            return CreatedAtRoute("GetEmployee", new {controller = "Employee", id = employee.Id}, employee);
        }

	    [HttpPut("{id}", Name = "UpdateAsset")]
	    public IActionResult Update(int id, [FromBody] Employee employee)
	    {
	        if (employee == null || employee.Id != id) return HttpBadRequest();
	        var item = EmployeeRepository.Find(id);
	        if (item == null) return HttpNotFound();
            EmployeeRepository.Update(employee);

            //return CreatedAtRoute("GetEmployee", new {controller = "Employee", id = Employee.Id}, Employee);
	       
	        return new NoContentResult();
	    }

        [HttpDelete("{id}")]
	    public void Detele(int id)
	    {
	        EmployeeRepository.Remove(id);
	    }

    }
}
