using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Tailor.Models
{
    public class EmployeeTimeSheet
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public Employee Employee { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public decimal Hours { get; set; }
        [Required]
        public decimal HourRate { get; set; }
        [Required]
        public decimal Wage { get; set; }
        [NotMapped]
        public bool Checked { get; set; }
    }
}
