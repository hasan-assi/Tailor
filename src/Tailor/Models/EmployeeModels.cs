using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Tailor.Models
{
    public class Employee
    {

        [Required]
        [Key]
        public int Id { set; get; }
        [Required]
        public string CardNo { set; get; }
        public string FirstName { set; get; }
        public string LastName { set; get; }
        [Required]
        public decimal HourRate { set; get; }
        [Required]
        public decimal HourPerDay { set; get; }
        [NotMapped]
        public Boolean Checked { set; get; }
        //public DateTime HireDate { set; get; }
    }
}
