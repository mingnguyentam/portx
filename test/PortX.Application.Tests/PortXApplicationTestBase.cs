using Volo.Abp.Modularity;

namespace PortX;

public abstract class PortXApplicationTestBase<TStartupModule> : PortXTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
