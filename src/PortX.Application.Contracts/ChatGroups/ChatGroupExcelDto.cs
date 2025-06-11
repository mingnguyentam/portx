using System;

namespace PortX.ChatGroups
{
    public abstract class ChatGroupExcelDtoBase
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public bool IsActive { get; set; }
        public string? ProviderName { get; set; }
        public Guid? ProviderKey { get; set; }
    }
}