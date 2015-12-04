using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asset_CMS.Models
{
    public interface IAssetRepository
    {
        void Add(Asset asset);
        IEnumerable<Asset> GetAll();
        Asset Find(int Id);
        void Remove(int Id);
        void Update(Asset asset);
    }
}
