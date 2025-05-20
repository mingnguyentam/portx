using PortX.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace PortX.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class PortXController : AbpControllerBase
{
    protected PortXController()
    {
        LocalizationResource = typeof(PortXResource);
    }
}
