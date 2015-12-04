using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Asset_CMS.Models
{
    public class Asset
    {

        [Required]
        [Key]
        public int Id { set; get; }
        public string Msn { set; get; }

    }
}
