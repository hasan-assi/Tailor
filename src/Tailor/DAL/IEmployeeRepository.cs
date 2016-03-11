using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tailor.Models
{
    public interface IEmployeeRepository
    {
        void Add(Employee employee);
        IEnumerable<Employee> GetAll();
        Employee Find(int Id);
        void Remove(int Id);
        void Update(Employee employee);
    }
}
