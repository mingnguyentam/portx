using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace PortX.ChatGroups
{
    public abstract class ChatGroupCreateDtoBase
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public bool IsActive { get; set; } = true;
        public string? ProviderName { get; set; }
        public Guid? ProviderKey { get; set; }
    }
}