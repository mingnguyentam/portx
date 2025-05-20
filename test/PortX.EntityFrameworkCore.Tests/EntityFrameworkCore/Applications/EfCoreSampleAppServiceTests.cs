using PortX.Samples;
using Xunit;

namespace PortX.EntityFrameworkCore.Applications;

[Collection(PortXTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<PortXEntityFrameworkCoreTestModule>
{

}
