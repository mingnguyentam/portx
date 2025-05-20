using PortX.Samples;
using Xunit;

namespace PortX.EntityFrameworkCore.Domains;

[Collection(PortXTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<PortXEntityFrameworkCoreTestModule>
{

}
