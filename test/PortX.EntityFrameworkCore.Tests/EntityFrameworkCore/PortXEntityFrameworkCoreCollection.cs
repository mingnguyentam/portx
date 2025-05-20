using Xunit;

namespace PortX.EntityFrameworkCore;

[CollectionDefinition(PortXTestConsts.CollectionDefinitionName)]
public class PortXEntityFrameworkCoreCollection : ICollectionFixture<PortXEntityFrameworkCoreFixture>
{

}
