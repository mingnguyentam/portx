using Volo.Abp.Modularity;

namespace PortX;

[DependsOn(
    typeof(PortXDomainModule),
    typeof(PortXTestBaseModule)
)]
public class PortXDomainTestModule : AbpModule
{

}
