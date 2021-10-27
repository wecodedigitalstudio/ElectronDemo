using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElectronAspnetAngularDemo.Dtos
{
    public class AttachmentDto
    {

        public long Id { get; set; }

        public string OriginalFileName { get; set; }

        public string RepositoryPath { get; set; }

        public string RepositoryFileName { get; set; }

        public long? Size { get; set; }

        public string MimeType { get; set; }

        public string ReferenceId { get; set; }

        public string ReferenceType { get; set; }

        public string Description { get; set; }

        public long? CategoryId { get; set; }

        public string Category_Description { get; set; }

    }
}
