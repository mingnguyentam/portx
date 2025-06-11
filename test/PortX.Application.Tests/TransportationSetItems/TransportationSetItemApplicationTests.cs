using System;
using System.Linq;
using Shouldly;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;
using Xunit;

namespace PortX.TransportationSetItems
{
    public abstract class TransportationSetItemsAppServiceTests<TStartupModule> : PortXApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ITransportationSetItemsAppService _transportationSetItemsAppService;
        private readonly IRepository<TransportationSetItem, Guid> _transportationSetItemRepository;

        public TransportationSetItemsAppServiceTests()
        {
            _transportationSetItemsAppService = GetRequiredService<ITransportationSetItemsAppService>();
            _transportationSetItemRepository = GetRequiredService<IRepository<TransportationSetItem, Guid>>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Act
            var result = await _transportationSetItemsAppService.GetListAsync(new GetTransportationSetItemsInput());

            // Assert
            result.TotalCount.ShouldBe(2);
            result.Items.Count.ShouldBe(2);
            result.Items.Any(x => x.Id == Guid.Parse("a7ccd494-7e51-42d7-95fc-47fb429d6c01")).ShouldBe(true);
            result.Items.Any(x => x.Id == Guid.Parse("ccdbfb1e-245f-4379-a841-5a969d944a48")).ShouldBe(true);
        }

        [Fact]
        public async Task GetAsync()
        {
            // Act
            var result = await _transportationSetItemsAppService.GetAsync(Guid.Parse("a7ccd494-7e51-42d7-95fc-47fb429d6c01"));

            // Assert
            result.ShouldNotBeNull();
            result.Id.ShouldBe(Guid.Parse("a7ccd494-7e51-42d7-95fc-47fb429d6c01"));
        }

        [Fact]
        public async Task CreateAsync()
        {
            // Arrange
            var input = new TransportationSetItemCreateDto
            {
                Name = "38dd2435e313420abf49b0c",
                Type = "f5e01f470ee848a594c5f9b213bc03b8e8b301ad9e5b4bd0a31bb6af1ee8714b5ac74a3adc34405aa",
                Attributes = "5623ee255c8548f4b092575228511a489c118930bd864888b77e046d3e78900fbe0c882756e8447fa2c8ac644633e19c",
                Order = 1073519389,
                Category = "619a3db0fb6445baa341183ad55be9eec0abe624d73a42b988272dad3b5b81c15fb3d80610fa4",
                IsActive = true,
                IsDefault = true,
                RootId = Guid.Parse("7f169820-7275-4ade-aecc-0d5930e75c0e"),
                TransportationSetRootId = Guid.Parse("ccc9bd07-34ce-48fd-ba3f-6e54c1981509"),
                TransportationSetItemGroupRootId = Guid.Parse("f9c829c0-789e-4bdf-995b-aedc56cc5334")
            };

            // Act
            var serviceResult = await _transportationSetItemsAppService.CreateAsync(input);

            // Assert
            var result = await _transportationSetItemRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.Name.ShouldBe("38dd2435e313420abf49b0c");
            result.Type.ShouldBe("f5e01f470ee848a594c5f9b213bc03b8e8b301ad9e5b4bd0a31bb6af1ee8714b5ac74a3adc34405aa");
            result.Attributes.ShouldBe("5623ee255c8548f4b092575228511a489c118930bd864888b77e046d3e78900fbe0c882756e8447fa2c8ac644633e19c");
            result.Order.ShouldBe(1073519389);
            result.Category.ShouldBe("619a3db0fb6445baa341183ad55be9eec0abe624d73a42b988272dad3b5b81c15fb3d80610fa4");
            result.IsActive.ShouldBe(true);
            result.IsDefault.ShouldBe(true);
            result.RootId.ShouldBe(Guid.Parse("7f169820-7275-4ade-aecc-0d5930e75c0e"));
            result.TransportationSetRootId.ShouldBe(Guid.Parse("ccc9bd07-34ce-48fd-ba3f-6e54c1981509"));
            result.TransportationSetItemGroupRootId.ShouldBe(Guid.Parse("f9c829c0-789e-4bdf-995b-aedc56cc5334"));
        }

        [Fact]
        public async Task UpdateAsync()
        {
            // Arrange
            var input = new TransportationSetItemUpdateDto()
            {
                Name = "4efe071fd99",
                Type = "075465afaebd49ab81586f097b104d0eab56690a54754351a41abce7e6fbd53b7858a9e891054e1e",
                Attributes = "a9c90ec3dc124ea1935e671be0f7069b7d6e625051e146189",
                Order = 930895461,
                Category = "cecf0d21",
                IsActive = true,
                IsDefault = true,
                RootId = Guid.Parse("eef66c02-8db7-4329-aa55-e9003ccaf276"),
                TransportationSetRootId = Guid.Parse("d342fc28-0cca-49e0-a9ab-a0ad3c35eeba"),
                TransportationSetItemGroupRootId = Guid.Parse("f327165c-a38e-4062-a1d9-ce8cb3b5bd70")
            };

            // Act
            var serviceResult = await _transportationSetItemsAppService.UpdateAsync(Guid.Parse("a7ccd494-7e51-42d7-95fc-47fb429d6c01"), input);

            // Assert
            var result = await _transportationSetItemRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.Name.ShouldBe("4efe071fd99");
            result.Type.ShouldBe("075465afaebd49ab81586f097b104d0eab56690a54754351a41abce7e6fbd53b7858a9e891054e1e");
            result.Attributes.ShouldBe("a9c90ec3dc124ea1935e671be0f7069b7d6e625051e146189");
            result.Order.ShouldBe(930895461);
            result.Category.ShouldBe("cecf0d21");
            result.IsActive.ShouldBe(true);
            result.IsDefault.ShouldBe(true);
            result.RootId.ShouldBe(Guid.Parse("eef66c02-8db7-4329-aa55-e9003ccaf276"));
            result.TransportationSetRootId.ShouldBe(Guid.Parse("d342fc28-0cca-49e0-a9ab-a0ad3c35eeba"));
            result.TransportationSetItemGroupRootId.ShouldBe(Guid.Parse("f327165c-a38e-4062-a1d9-ce8cb3b5bd70"));
        }

        [Fact]
        public async Task DeleteAsync()
        {
            // Act
            await _transportationSetItemsAppService.DeleteAsync(Guid.Parse("a7ccd494-7e51-42d7-95fc-47fb429d6c01"));

            // Assert
            var result = await _transportationSetItemRepository.FindAsync(c => c.Id == Guid.Parse("a7ccd494-7e51-42d7-95fc-47fb429d6c01"));

            result.ShouldBeNull();
        }
    }
}