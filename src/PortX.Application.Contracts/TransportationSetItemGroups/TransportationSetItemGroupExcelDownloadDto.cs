using Volo.Abp.Application.Dtos;
using System;

namespace PortX.TransportationSetItemGroups
{
    public abstract class TransportationSetItemGroupExcelDownloadDtoBase
    {
        public string DownloadToken { get; set; } = null!;

        public string? FilterText { get; set; }

        public string? Name { get; set; }
        public int? OrderMin { get; set; }
        public int? OrderMax { get; set; }
        public string? Type { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }

        public TransportationSetItemGroupExcelDownloadDtoBase()
        {

        }
    }
}