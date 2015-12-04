using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Concurrent;
using Asset_CMS.DAL;
using Microsoft.Data.Entity;

namespace Asset_CMS.Models
{
    public class AssetRepository : IAssetRepository
    {
        private  ConcurrentDictionary<string, Asset> _assets = new ConcurrentDictionary<string, Asset>();
        private AssetDbContext _db;

        public AssetRepository(AssetDbContext db)
        {
            _db = db;
        }

        public IEnumerable<Asset> GetAll()
        {
            return _db.Assets.ToList();
        }

        public void Add(Asset asset)
        {
            _db.Assets.Add(asset);
           Save();
        }

        public Asset Find(int id)
        {
            var asset = _db.Assets.FirstOrDefault(x => x.Id == id);
            _db.Detach(asset);
            return asset;
        }

        public void Remove(int id)
        {
            _db.Assets.Remove(new Asset() {Id = id});
            Save();
        }

        public void Update(Asset asset)
        {
            _db.Entry(asset).State = EntityState.Modified;
            Save();
        }

        private void Save()
        {
            _db.SaveChanges();
        }

        private Task SaveAsync()
        {
            return _db.SaveChangesAsync();
        }
    }
}
