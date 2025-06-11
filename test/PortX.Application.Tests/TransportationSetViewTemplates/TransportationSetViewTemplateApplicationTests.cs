using System;
using System.Linq;
using Shouldly;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;
using Xunit;

namespace PortX.TransportationSetViewTemplates
{
    public abstract class TransportationSetViewTemplatesAppServiceTests<TStartupModule> : PortXApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ITransportationSetViewTemplatesAppService _transportationSetViewTemplatesAppService;
        private readonly IRepository<TransportationSetViewTemplate, Guid> _transportationSetViewTemplateRepository;

        public TransportationSetViewTemplatesAppServiceTests()
        {
            _transportationSetViewTemplatesAppService = GetRequiredService<ITransportationSetViewTemplatesAppService>();
            _transportationSetViewTemplateRepository = GetRequiredService<IRepository<TransportationSetViewTemplate, Guid>>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Act
            var result = await _transportationSetViewTemplatesAppService.GetListAsync(new GetTransportationSetViewTemplatesInput());

            // Assert
            result.TotalCount.ShouldBe(2);
            result.Items.Count.ShouldBe(2);
            result.Items.Any(x => x.Id == Guid.Parse("0e141e8e-1ece-417e-bacf-e6e7f729b07f")).ShouldBe(true);
            result.Items.Any(x => x.Id == Guid.Parse("d26b6162-d1af-452a-b44a-62d2dfbc5b72")).ShouldBe(true);
        }

        [Fact]
        public async Task GetAsync()
        {
            // Act
            var result = await _transportationSetViewTemplatesAppService.GetAsync(Guid.Parse("0e141e8e-1ece-417e-bacf-e6e7f729b07f"));

            // Assert
            result.ShouldNotBeNull();
            result.Id.ShouldBe(Guid.Parse("0e141e8e-1ece-417e-bacf-e6e7f729b07f"));
        }

        [Fact]
        public async Task CreateAsync()
        {
            // Arrange
            var input = new TransportationSetViewTemplateCreateDto
            {
                Name = "b6abbe82fa1d4361b4a",
                Description = "49fa1fe4bb20",
                Data = "e2210aa61d76499180f14fa0482768a305856fa0cccc425",
                RootId = Guid.Parse("743813a1-b0bf-475d-8ee0-3720fc28703b"),
                TransportationSetRootId = Guid.Parse("d09165bb-fda3-4fc0-ae2c-b932146b32f9")
            };

            // Act
            var serviceResult = await _transportationSetViewTemplatesAppService.CreateAsync(input);

            // Assert
            var result = await _transportationSetViewTemplateRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.Name.ShouldBe("b6abbe82fa1d4361b4a");
            result.Description.ShouldBe("49fa1fe4bb20");
            result.Data.ShouldBe("e2210aa61d76499180f14fa0482768a305856fa0cccc425");
            result.RootId.ShouldBe(Guid.Parse("743813a1-b0bf-475d-8ee0-3720fc28703b"));
            result.TransportationSetRootId.ShouldBe(Guid.Parse("d09165bb-fda3-4fc0-ae2c-b932146b32f9"));
        }

        [Fact]
        public async Task UpdateAsync()
        {
            // Arrange
            var input = new TransportationSetViewTemplateUpdateDto()
            {
                Name = "92678e4e7ef1463882411f7bb1c13326dfb93",
                Description = "de996d2d3ff544a198b6ef607831",
                Data = "c2bece636a9a45c6827af4b68",
                RootId = Guid.Parse("a5670b1f-737b-4989-a91a-31910cf5cd1f"),
                TransportationSetRootId = Guid.Parse("3dc00bec-6716-4fda-ac4e-114bad2c1f1d")
            };

            // Act
            var serviceResult = await _transportationSetViewTemplatesAppService.UpdateAsync(Guid.Parse("0e141e8e-1ece-417e-bacf-e6e7f729b07f"), input);

            // Assert
            var result = await _transportationSetViewTemplateRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.Name.ShouldBe("92678e4e7ef1463882411f7bb1c13326dfb93");
            result.Description.ShouldBe("de996d2d3ff544a198b6ef607831");
            result.Data.ShouldBe("c2bece636a9a45c6827af4b68");
            result.RootId.ShouldBe(Guid.Parse("a5670b1f-737b-4989-a91a-31910cf5cd1f"));
            result.TransportationSetRootId.ShouldBe(Guid.Parse("3dc00bec-6716-4fda-ac4e-114bad2c1f1d"));
        }

        [Fact]
        public async Task DeleteAsync()
        {
            // Act
            await _transportationSetViewTemplatesAppService.DeleteAsync(Guid.Parse("0e141e8e-1ece-417e-bacf-e6e7f729b07f"));

            // Assert
            var result = await _transportationSetViewTemplateRepository.FindAsync(c => c.Id == Guid.Parse("0e141e8e-1ece-417e-bacf-e6e7f729b07f"));

            result.ShouldBeNull();
        }
    }
}