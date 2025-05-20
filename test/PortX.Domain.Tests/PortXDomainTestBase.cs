using Volo.Abp.Modularity;

namespace PortX;

/* Inherit from this class for your domain layer tests. */
public abstract class PortXDomainTestBase<TStartupModule> : PortXTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
