using Shouldly;
using System;
using System.Linq;
using System.Threading.Tasks;
using PortX.ShippingWorkflows;
using PortX.EntityFrameworkCore;
using Xunit;

namespace PortX.EntityFrameworkCore.Domains.ShippingWorkflows
{
    public class ShippingWorkflowRepositoryTests : PortXEntityFrameworkCoreTestBase
    {
        private readonly IShippingWorkflowRepository _shippingWorkflowRepository;

        public ShippingWorkflowRepositoryTests()
        {
            _shippingWorkflowRepository = GetRequiredService<IShippingWorkflowRepository>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Arrange
            await WithUnitOfWorkAsync(async () =>
            {
                // Act
                var result = await _shippingWorkflowRepository.GetListAsync(
                    name: "dadeb9ab76d7478b9b30ff3081b3a3346c5bce",
                    transportationType: "f50005dec4fc4a18956975167d76419343c59",
                    mode: "5632889d20484aba98911bb503087121c894b22eec664d4f9506b4d669a2807f2a2d1479f19341968cd0059626ef4d6",
                    incoterms: "0b0d2de0fa504d9687f1c0707035ec86ab7b14be4",
                    isActive: true,
                    conditionSettings: "c2e8fd5e187a4502b350d9cff2ded3798f6b01a4d87a4d4aaea71bcabbd489c52ad12cc12ddb43249d31ca36ad05ec",
                    rootId: Guid.Parse("066306b8-3b66-455c-b509-3ff8d741bab3"),
                    transportationSetRootId: Guid.Parse("ccfe4fd6-9b8d-4276-a3bd-14d32564ab04")
                );

                // Assert
                result.Count.ShouldBe(1);
                result.FirstOrDefault().ShouldNotBe(null);
                result.First().Id.ShouldBe(Guid.Parse("fbfc4ed2-03e8-4c17-8f07-6b9dbc85ba19"));
            });
        }

        [Fact]
        public async Task GetCountAsync()
        {
            // Arrange
            await WithUnitOfWorkAsync(async () =>
            {
                // Act
                var result = await _shippingWorkflowRepository.GetCountAsync(
                    name: "156ca3e72ee246a1a463dac8b40784fbd7d8572163554df2",
                    transportationType: "64630a675ee645118b47d9ec066c0578386ec0d",
                    mode: "37b2dfbc61cb44339494c87c7538d98ed8c8eeffe21",
                    incoterms: "2d63ef7b7a284ed5a286a2f1fd0c074b4c583a761eba4c92b70c27679431b67e3fe8da16f6e24592910944e04900426810",
                    isActive: true,
                    conditionSettings: "5aef63fc26a24a5faf5f63e537d284deba4547a9c4074bedb9caa5b93d3d0",
                    rootId: Guid.Parse("2afaf3f5-4cb4-4f14-85fe-8fc316be1cd1"),
                    transportationSetRootId: Guid.Parse("8d65f8fe-4c1e-40d1-87e8-91ad1cbc34fd")
                );

                // Assert
                result.ShouldBe(1);
            });
        }
    }
}