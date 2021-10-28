using ElectronAspnetAngularDemo.Data;
using ElectronAspnetAngularDemo.Dtos;
using ElectronAspnetAngularDemo.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElectronAspnetAngularDemo.Controllers
{
    [ApiController]
    public class AttachmentsController : ControllerBase
    {

        private GaiaDataContext dataContext;

        public AttachmentsController(GaiaDataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpPost]
        [Route("api/attachments/upload")]
        public async Task<IActionResult> UploadAsync()
        {
            // recupero file
            var formCollection = await Request.ReadFormAsync();
            var file = formCollection.Files.First();

            // creazione dto
            var attachmentDto = new AttachmentDto()
            {
                RepositoryFileName = $"{Guid.NewGuid()}.{GetExtension(file.FileName)}",
                MimeType = file.ContentType,
                OriginalFileName = file.FileName,
                Size = file.Length
            };

            var equipment = new Equipment()
            {
                Province = "AN",
                SerialNumber = "12345",
                Year = "2021"
            };

            var path = this.dataContext.DbPath;

            this.dataContext.Equipments.Add(equipment);
            await this.dataContext.SaveChangesAsync();

            return Ok(attachmentDto);
        }

        private string GetExtension(string name)
        {
            return name.Split('.').Last();
        }

    }
}
