using System;
using System.Linq;
using Shouldly;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;
using Xunit;

namespace PortX.TransportationSetSupplierViewTemplates
{
    public abstract class TransportationSetSupplierViewTemplatesAppServiceTests<TStartupModule> : PortXApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ITransportationSetSupplierViewTemplatesAppService _transportationSetSupplierViewTemplatesAppService;
        private readonly IRepository<TransportationSetSupplierViewTemplate, Guid> _transportationSetSupplierViewTemplateRepository;

        public TransportationSetSupplierViewTemplatesAppServiceTests()
        {
            _transportationSetSupplierViewTemplatesAppService = GetRequiredService<ITransportationSetSupplierViewTemplatesAppService>();
            _transportationSetSupplierViewTemplateRepository = GetRequiredService<IRepository<TransportationSetSupplierViewTemplate, Guid>>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Act
            var result = await _transportationSetSupplierViewTemplatesAppService.GetListAsync(new GetTransportationSetSupplierViewTemplatesInput());

            // Assert
            result.TotalCount.ShouldBe(2);
            result.Items.Count.ShouldBe(2);
            result.Items.Any(x => x.Id == Guid.Parse("6faf50c1-c0ed-423c-ae72-9924ee4b79aa")).ShouldBe(true);
            result.Items.Any(x => x.Id == Guid.Parse("1474b6a4-5fba-4768-9ecc-13bc4b7ec1a7")).ShouldBe(true);
        }

        [Fact]
        public async Task GetAsync()
        {
            // Act
            var result = await _transportationSetSupplierViewTemplatesAppService.GetAsync(Guid.Parse("6faf50c1-c0ed-423c-ae72-9924ee4b79aa"));

            // Assert
            result.ShouldNotBeNull();
            result.Id.ShouldBe(Guid.Parse("6faf50c1-c0ed-423c-ae72-9924ee4b79aa"));
        }

        [Fact]
        public async Task CreateAsync()
        {
            // Arrange
            var input = new TransportationSetSupplierViewTemplateCreateDto
            {
                SupplierTenantId = Guid.Parse("f2cf917b-c66d-4f63-b5ed-52d45e50f715"),
                TransportationSetViewTemplateRootId = Guid.Parse("72bf369f-a64a-436c-b124-508fba1235ba"),
                SupplierId = Guid.Parse("94e400c2-c0aa-491b-8a72-a3be96dfc315"),
                RootId = Guid.Parse("498de16b-7133-42a6-bd8c-d465fe091a4f"),
                ShippingRootId = Guid.Parse("87f1af34-f537-45d8-a9f2-d1d397aa1415")
            };

            // Act
            var serviceResult = await _transportationSetSupplierViewTemplatesAppService.CreateAsync(input);

            // Assert
            var result = await _transportationSetSupplierViewTemplateRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.SupplierTenantId.ShouldBe(Guid.Parse("f2cf917b-c66d-4f63-b5ed-52d45e50f715"));
            result.TransportationSetViewTemplateRootId.ShouldBe(Guid.Parse("72bf369f-a64a-436c-b124-508fba1235ba"));
            result.SupplierId.ShouldBe(Guid.Parse("94e400c2-c0aa-491b-8a72-a3be96dfc315"));
            result.RootId.ShouldBe(Guid.Parse("498de16b-7133-42a6-bd8c-d465fe091a4f"));
            result.ShippingRootId.ShouldBe(Guid.Parse("87f1af34-f537-45d8-a9f2-d1d397aa1415"));
        }

        [Fact]
        public async Task UpdateAsync()
        {
            // Arrange
            var input = new TransportationSetSupplierViewTemplateUpdateDto()
            {
                SupplierTenantId = Guid.Parse("9b4fc7a9-f050-4db6-b749-28bee95c73a8"),
                TransportationSetViewTemplateRootId = Guid.Parse("a2717227-5532-4d7c-92d8-0f953df5df84"),
                SupplierId = Guid.Parse("35462507-8c6e-459a-9e18-00e595db1d65"),
                RootId = Guid.Parse("feded365-94a0-4b70-a6fc-a994d9cd68e3"),
                ShippingRootId = Guid.Parse("5d9d2949-e85b-48bc-8541-2996e633271f")
            };

            // Act
            var serviceResult = await _transportationSetSupplierViewTemplatesAppService.UpdateAsync(Guid.Parse("6faf50c1-c0ed-423c-ae72-9924ee4b79aa"), input);

            // Assert
            var result = await _transportationSetSupplierViewTemplateRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.SupplierTenantId.ShouldBe(Guid.Parse("9b4fc7a9-f050-4db6-b749-28bee95c73a8"));
            result.TransportationSetViewTemplateRootId.ShouldBe(Guid.Parse("a2717227-5532-4d7c-92d8-0f953df5df84"));
            result.SupplierId.ShouldBe(Guid.Parse("35462507-8c6e-459a-9e18-00e595db1d65"));
            result.RootId.ShouldBe(Guid.Parse("feded365-94a0-4b70-a6fc-a994d9cd68e3"));
            result.ShippingRootId.ShouldBe(Guid.Parse("5d9d2949-e85b-48bc-8541-2996e633271f"));
        }

        [Fact]
        public async Task DeleteAsync()
        {
            // Act
            await _transportationSetSupplierViewTemplatesAppService.DeleteAsync(Guid.Parse("6faf50c1-c0ed-423c-ae72-9924ee4b79aa"));

            // Assert
            var result = await _transportationSetSupplierViewTemplateRepository.FindAsync(c => c.Id == Guid.Parse("6faf50c1-c0ed-423c-ae72-9924ee4b79aa"));

            result.ShouldBeNull();
        }
    }
}