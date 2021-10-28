using ElectronAspnetAngularDemo.Data;
using ElectronAspnetAngularDemo.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ElectronAspnetAngularDemo.Controllers
{
    [ApiController]
    public class EquipmentsController : ControllerBase
    {
        private GaiaDataContext dataContext;

        public EquipmentsController(GaiaDataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [Route("api/equipments")]
        [HttpGet]
        public async Task<IActionResult> DetailsAsync()
        {
            var equipment = await this.dataContext.Equipments
                .OrderBy(e => e.Id)
                .LastOrDefaultAsync();

            return Ok(equipment);
        }

        [Route("api/eqipments/download")]
        [HttpPost]
        public async Task<IActionResult> DownloadAsync()
        {
            var equipment = await this.dataContext.Equipments
                .OrderBy(e => e.Id)
                .LastOrDefaultAsync();

            var text = $"{equipment.Year}-{equipment.SerialNumber}-{equipment.Province}";
            var content = Encoding.ASCII.GetBytes(text);

            return File(content, "text/plain");

        }

    }
}
