using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace PortX.TransportationSetViewTemplates
{
    public abstract class TransportationSetViewTemplateCreateDtoBase
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Data { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }
    }
}