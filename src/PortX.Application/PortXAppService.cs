using PortX.Localization;
using Volo.Abp.Application.Services;

namespace PortX;

/* Inherit your application services from this class.
 */
public abstract class PortXAppService : ApplicationService
{
    protected PortXAppService()
    {
        LocalizationResource = typeof(PortXResource);
    }
}
