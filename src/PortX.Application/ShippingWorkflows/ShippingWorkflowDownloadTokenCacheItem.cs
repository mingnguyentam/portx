using System;

namespace PortX.ShippingWorkflows;

public abstract class ShippingWorkflowDownloadTokenCacheItemBase
{
    public string Token { get; set; } = null!;
}