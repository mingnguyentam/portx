using Microsoft.Extensions.Localization;
using PortX.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace PortX;

[Dependency(ReplaceServices = true)]
public class PortXBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<PortXResource> _localizer;

    public PortXBrandingProvider(IStringLocalizer<PortXResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
