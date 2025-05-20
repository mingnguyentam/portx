using Volo.Abp.Modularity;

namespace PortX;

[DependsOn(
    typeof(PortXApplicationModule),
    typeof(PortXDomainTestModule)
)]
public class PortXApplicationTestModule : AbpModule
{

}
