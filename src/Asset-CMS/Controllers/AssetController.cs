using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Asset_CMS.Models;
using Microsoft.AspNet.Http;

namespace Asset_CMS.Controllers
{
	[Route("api/[controller]")]
    public class AssetController : Controller
    {
	    private IAssetRepository _assetRepository { set; get; }

	    public AssetController(IAssetRepository assetRepository)
	    {
	        _assetRepository = assetRepository;
	    }

        [HttpGet]
	    public IEnumerable<Asset> GetAll()
        {
            return _assetRepository.GetAll();
        }

        [HttpGet("{id}",Name = "GetAsset")]
        public IActionResult GetByAssetId(int id)
        {
            var asset = _assetRepository.Find(id);
            if (asset == null) return HttpNotFound();
            asset.CreationDate = asset.CreationDate.Date;
            return new ObjectResult(asset);
        }

        [HttpPost]
        public IActionResult Create ([FromBody]Asset asset)
        {
            if (asset == null) return HttpBadRequest();
            _assetRepository.Add(asset);
            return CreatedAtRoute("GetAsset", new {controller = "Asset", id = asset.Id}, asset);
        }

	    [HttpPut("{id}", Name = "UpdateAsset")]
	    public IActionResult Update(int id, [FromBody] Asset asset)
	    {
	        if (asset == null || asset.Id != id) return HttpBadRequest();
	        var item = _assetRepository.Find(id);
	        if (item == null) return HttpNotFound();
            _assetRepository.Update(asset);

            //return CreatedAtRoute("GetAsset", new {controller = "Asset", id = asset.Id}, asset);
	       
	        return new NoContentResult();
	    }

        [HttpDelete("{id}")]
	    public void Detele(int id)
	    {
	        _assetRepository.Remove(id);
	    }

    }
}
