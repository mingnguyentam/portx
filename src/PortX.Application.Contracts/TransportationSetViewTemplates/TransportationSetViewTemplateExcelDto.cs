using System;

namespace PortX.TransportationSetViewTemplates
{
    public abstract class TransportationSetViewTemplateExcelDtoBase
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Data { get; set; }
        public Guid? RootId { get; set; }
        public Guid? TransportationSetRootId { get; set; }
    }
}