using System;
using System.Linq;
using Shouldly;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;
using Xunit;

namespace PortX.TransportationSetItemGroups
{
    public abstract class TransportationSetItemGroupsAppServiceTests<TStartupModule> : PortXApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly ITransportationSetItemGroupsAppService _transportationSetItemGroupsAppService;
        private readonly IRepository<TransportationSetItemGroup, Guid> _transportationSetItemGroupRepository;

        public TransportationSetItemGroupsAppServiceTests()
        {
            _transportationSetItemGroupsAppService = GetRequiredService<ITransportationSetItemGroupsAppService>();
            _transportationSetItemGroupRepository = GetRequiredService<IRepository<TransportationSetItemGroup, Guid>>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Act
            var result = await _transportationSetItemGroupsAppService.GetListAsync(new GetTransportationSetItemGroupsInput());

            // Assert
            result.TotalCount.ShouldBe(2);
            result.Items.Count.ShouldBe(2);
            result.Items.Any(x => x.Id == Guid.Parse("0274d837-25c2-448f-820d-8ca95c14685f")).ShouldBe(true);
            result.Items.Any(x => x.Id == Guid.Parse("3bb9aeea-647d-4f3f-924c-c8a673a1d048")).ShouldBe(true);
        }

        [Fact]
        public async Task GetAsync()
        {
            // Act
            var result = await _transportationSetItemGroupsAppService.GetAsync(Guid.Parse("0274d837-25c2-448f-820d-8ca95c14685f"));

            // Assert
            result.ShouldNotBeNull();
            result.Id.ShouldBe(Guid.Parse("0274d837-25c2-448f-820d-8ca95c14685f"));
        }

        [Fact]
        public async Task CreateAsync()
        {
            // Arrange
            var input = new TransportationSetItemGroupCreateDto
            {
                Name = "cdcf5b40bacf42c383e914378da1a4d9904fdd2bd5984d539415c7dc9d885821719426",
                Order = 1806804297,
                Type = "9e1710b66a38462ab",
                RootId = Guid.Parse("ae7791e1-6c56-4bcb-a870-d1ad9134331e"),
                TransportationSetRootId = Guid.Parse("f72accbd-9911-4df4-9072-6b56104809f2")
            };

            // Act
            var serviceResult = await _transportationSetItemGroupsAppService.CreateAsync(input);

            // Assert
            var result = await _transportationSetItemGroupRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.Name.ShouldBe("cdcf5b40bacf42c383e914378da1a4d9904fdd2bd5984d539415c7dc9d885821719426");
            result.Order.ShouldBe(1806804297);
            result.Type.ShouldBe("9e1710b66a38462ab");
            result.RootId.ShouldBe(Guid.Parse("ae7791e1-6c56-4bcb-a870-d1ad9134331e"));
            result.TransportationSetRootId.ShouldBe(Guid.Parse("f72accbd-9911-4df4-9072-6b56104809f2"));
        }

        [Fact]
        public async Task UpdateAsync()
        {
            // Arrange
            var input = new TransportationSetItemGroupUpdateDto()
            {
                Name = "3dd1185a25bb46908cd8ba4ef6dd982154d7528666344bb88f77",
                Order = 43309518,
                Type = "925dd54ed4ca4dc59122a2dfde32c657f7f239172bd74e9fab091d60074aeca",
                RootId = Guid.Parse("e5d7dfd9-fa23-4017-b56e-e7ac3e9fba5f"),
                TransportationSetRootId = Guid.Parse("0241da65-ef91-46b0-b545-49dd5d1361a9")
            };

            // Act
            var serviceResult = await _transportationSetItemGroupsAppService.UpdateAsync(Guid.Parse("0274d837-25c2-448f-820d-8ca95c14685f"), input);

            // Assert
            var result = await _transportationSetItemGroupRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.Name.ShouldBe("3dd1185a25bb46908cd8ba4ef6dd982154d7528666344bb88f77");
            result.Order.ShouldBe(43309518);
            result.Type.ShouldBe("925dd54ed4ca4dc59122a2dfde32c657f7f239172bd74e9fab091d60074aeca");
            result.RootId.ShouldBe(Guid.Parse("e5d7dfd9-fa23-4017-b56e-e7ac3e9fba5f"));
            result.TransportationSetRootId.ShouldBe(Guid.Parse("0241da65-ef91-46b0-b545-49dd5d1361a9"));
        }

        [Fact]
        public async Task DeleteAsync()
        {
            // Act
            await _transportationSetItemGroupsAppService.DeleteAsync(Guid.Parse("0274d837-25c2-448f-820d-8ca95c14685f"));

            // Assert
            var result = await _transportationSetItemGroupRepository.FindAsync(c => c.Id == Guid.Parse("0274d837-25c2-448f-820d-8ca95c14685f"));

            result.ShouldBeNull();
        }
    }
}