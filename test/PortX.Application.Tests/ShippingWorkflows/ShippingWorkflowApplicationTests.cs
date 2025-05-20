using System;
using System.Linq;
using Shouldly;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;
using Xunit;

namespace PortX.ShippingWorkflows
{
    public abstract class ShippingWorkflowsAppServiceTests<TStartupModule> : PortXApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly IShippingWorkflowsAppService _shippingWorkflowsAppService;
        private readonly IRepository<ShippingWorkflow, Guid> _shippingWorkflowRepository;

        public ShippingWorkflowsAppServiceTests()
        {
            _shippingWorkflowsAppService = GetRequiredService<IShippingWorkflowsAppService>();
            _shippingWorkflowRepository = GetRequiredService<IRepository<ShippingWorkflow, Guid>>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Act
            var result = await _shippingWorkflowsAppService.GetListAsync(new GetShippingWorkflowsInput());

            // Assert
            result.TotalCount.ShouldBe(2);
            result.Items.Count.ShouldBe(2);
            result.Items.Any(x => x.Id == Guid.Parse("fbfc4ed2-03e8-4c17-8f07-6b9dbc85ba19")).ShouldBe(true);
            result.Items.Any(x => x.Id == Guid.Parse("51ac27c3-bd04-4161-83cb-cb78c5a6c46d")).ShouldBe(true);
        }

        [Fact]
        public async Task GetAsync()
        {
            // Act
            var result = await _shippingWorkflowsAppService.GetAsync(Guid.Parse("fbfc4ed2-03e8-4c17-8f07-6b9dbc85ba19"));

            // Assert
            result.ShouldNotBeNull();
            result.Id.ShouldBe(Guid.Parse("fbfc4ed2-03e8-4c17-8f07-6b9dbc85ba19"));
        }

        [Fact]
        public async Task CreateAsync()
        {
            // Arrange
            var input = new ShippingWorkflowCreateDto
            {
                Name = "b56213aa0ca94ff5aa257381bc5cef8a6ef76ea5bd4",
                TransportationType = "96eac98a4a8242a7aa784235d0f0c",
                Mode = "e30674d4496547d7adc92ae51c5e39e2967f657a5cd74b03ac71b653758ca37153ff34c2b78a48a5ad4f3bb8fadd174",
                Incoterms = "6f0d854bdc3d42c1b32bea62d1f9",
                IsActive = true,
                ConditionSettings = "0a4b850a5c3c4de0808449d622d2c2a0ae2179a10a",
                rootId = Guid.Parse("525b4220-6bd9-4e37-a890-efa3c12699f3"),
                TransportationSetRootId = Guid.Parse("8a1b0d6e-a3c2-4d0c-aa5e-3528a1d7218c")
            };

            // Act
            var serviceResult = await _shippingWorkflowsAppService.CreateAsync(input);

            // Assert
            var result = await _shippingWorkflowRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.Name.ShouldBe("b56213aa0ca94ff5aa257381bc5cef8a6ef76ea5bd4");
            result.TransportationType.ShouldBe("96eac98a4a8242a7aa784235d0f0c");
            result.Mode.ShouldBe("e30674d4496547d7adc92ae51c5e39e2967f657a5cd74b03ac71b653758ca37153ff34c2b78a48a5ad4f3bb8fadd174");
            result.Incoterms.ShouldBe("6f0d854bdc3d42c1b32bea62d1f9");
            result.IsActive.ShouldBe(true);
            result.ConditionSettings.ShouldBe("0a4b850a5c3c4de0808449d622d2c2a0ae2179a10a");
            result.rootId.ShouldBe(Guid.Parse("525b4220-6bd9-4e37-a890-efa3c12699f3"));
            result.TransportationSetRootId.ShouldBe(Guid.Parse("8a1b0d6e-a3c2-4d0c-aa5e-3528a1d7218c"));
        }

        [Fact]
        public async Task UpdateAsync()
        {
            // Arrange
            var input = new ShippingWorkflowUpdateDto()
            {
                Name = "2a8122b4d59a433da03342bfb885a6d142ec2e12b4e247ca8bafc6453e6",
                TransportationType = "ff3b2aa128f14cecaa",
                Mode = "3f05321b282f450ba4e16d505d1bf860e245cb01c6b6",
                Incoterms = "c9583cfbb9b148e1b267e7",
                IsActive = true,
                ConditionSettings = "9b978c3355084230a2d20f071b0f3807bdfb8b38665f4ec68cf81a33db05f",
                rootId = Guid.Parse("15493326-8c35-49d7-900f-984afd199997"),
                TransportationSetRootId = Guid.Parse("84cb1d1d-ec2f-4fee-afc6-c6084bc7407c")
            };

            // Act
            var serviceResult = await _shippingWorkflowsAppService.UpdateAsync(Guid.Parse("fbfc4ed2-03e8-4c17-8f07-6b9dbc85ba19"), input);

            // Assert
            var result = await _shippingWorkflowRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.Name.ShouldBe("2a8122b4d59a433da03342bfb885a6d142ec2e12b4e247ca8bafc6453e6");
            result.TransportationType.ShouldBe("ff3b2aa128f14cecaa");
            result.Mode.ShouldBe("3f05321b282f450ba4e16d505d1bf860e245cb01c6b6");
            result.Incoterms.ShouldBe("c9583cfbb9b148e1b267e7");
            result.IsActive.ShouldBe(true);
            result.ConditionSettings.ShouldBe("9b978c3355084230a2d20f071b0f3807bdfb8b38665f4ec68cf81a33db05f");
            result.rootId.ShouldBe(Guid.Parse("15493326-8c35-49d7-900f-984afd199997"));
            result.TransportationSetRootId.ShouldBe(Guid.Parse("84cb1d1d-ec2f-4fee-afc6-c6084bc7407c"));
        }

        [Fact]
        public async Task DeleteAsync()
        {
            // Act
            await _shippingWorkflowsAppService.DeleteAsync(Guid.Parse("fbfc4ed2-03e8-4c17-8f07-6b9dbc85ba19"));

            // Assert
            var result = await _shippingWorkflowRepository.FindAsync(c => c.Id == Guid.Parse("fbfc4ed2-03e8-4c17-8f07-6b9dbc85ba19"));

            result.ShouldBeNull();
        }
    }
}