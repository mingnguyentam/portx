using System;
using System.Collections.Generic;

using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace PortX.TransportationSetViewTemplates
{
    public abstract class TransportationSetViewTemplateDtoBase : FullAuditedEntityDto<Guid>, IHasConcurrencyStamp
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Data { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }

        public string ConcurrencyStamp { get; set; } = null!;

    }
}