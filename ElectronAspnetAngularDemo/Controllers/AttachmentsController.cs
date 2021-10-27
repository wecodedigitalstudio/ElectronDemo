using ElectronAspnetAngularDemo.Dtos;
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

            return Ok(attachmentDto);
        }

        private string GetExtension(string name)
        {
            return name.Split('.').Last();
        }

    }
}
