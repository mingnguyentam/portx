using Volo.Abp.Application.Dtos;
using System;

namespace PortX.TransportationSetViewTemplates
{
    public abstract class TransportationSetViewTemplateExcelDownloadDtoBase
    {
        public string DownloadToken { get; set; } = null!;

        public string? FilterText { get; set; }

        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Data { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }

        public TransportationSetViewTemplateExcelDownloadDtoBase()
        {

        }
    }
}