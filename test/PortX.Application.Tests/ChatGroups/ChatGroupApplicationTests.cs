using System;
using System.Linq;
using Shouldly;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;
using Xunit;

namespace PortX.ChatGroups
{
    public abstract class ChatGroupsAppServiceTests<TStartupModule> : PortXApplicationTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly IChatGroupsAppService _chatGroupsAppService;
        private readonly IRepository<ChatGroup, Guid> _chatGroupRepository;

        public ChatGroupsAppServiceTests()
        {
            _chatGroupsAppService = GetRequiredService<IChatGroupsAppService>();
            _chatGroupRepository = GetRequiredService<IRepository<ChatGroup, Guid>>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Act
            var result = await _chatGroupsAppService.GetListAsync(new GetChatGroupsInput());

            // Assert
            result.TotalCount.ShouldBe(2);
            result.Items.Count.ShouldBe(2);
            result.Items.Any(x => x.Id == Guid.Parse("e4d408f7-471e-497e-bb06-08902d05b472")).ShouldBe(true);
            result.Items.Any(x => x.Id == Guid.Parse("60001f59-9f45-4b9b-bacc-f24ca10657df")).ShouldBe(true);
        }

        [Fact]
        public async Task GetAsync()
        {
            // Act
            var result = await _chatGroupsAppService.GetAsync(Guid.Parse("e4d408f7-471e-497e-bb06-08902d05b472"));

            // Assert
            result.ShouldNotBeNull();
            result.Id.ShouldBe(Guid.Parse("e4d408f7-471e-497e-bb06-08902d05b472"));
        }

        [Fact]
        public async Task CreateAsync()
        {
            // Arrange
            var input = new ChatGroupCreateDto
            {
                Name = "e05df10f60b94856847171cda1a8ecefe1d418e9d6b64160a47fe99e32c2eab6d06da25a4bd04",
                Description = "845dde62f5f14689a1c958e27f93a34d7590a9a1d113485ba780ace215ae14896c36eb398d9e467783cd664835f89b0e",
                IsActive = true,
                ProviderName = "434b13d64c8e4cd2a8673bac9f628f7678a2002842624e89b",
                ProviderKey = Guid.Parse("ddacca96-5abe-4745-adeb-33b9d60d0841")
            };

            // Act
            var serviceResult = await _chatGroupsAppService.CreateAsync(input);

            // Assert
            var result = await _chatGroupRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.Name.ShouldBe("e05df10f60b94856847171cda1a8ecefe1d418e9d6b64160a47fe99e32c2eab6d06da25a4bd04");
            result.Description.ShouldBe("845dde62f5f14689a1c958e27f93a34d7590a9a1d113485ba780ace215ae14896c36eb398d9e467783cd664835f89b0e");
            result.IsActive.ShouldBe(true);
            result.ProviderName.ShouldBe("434b13d64c8e4cd2a8673bac9f628f7678a2002842624e89b");
            result.ProviderKey.ShouldBe(Guid.Parse("ddacca96-5abe-4745-adeb-33b9d60d0841"));
        }

        [Fact]
        public async Task UpdateAsync()
        {
            // Arrange
            var input = new ChatGroupUpdateDto()
            {
                Name = "f34ec1c1e6304a1a99",
                Description = "d84cfb",
                IsActive = true,
                ProviderName = "45086d4629ad4fa3837389c10b1c381d1f2337d6643141c58066e3762c81c86b50c2e0eca2b245",
                ProviderKey = Guid.Parse("2da95303-2fb8-460e-9b84-cb974d04e9e6")
            };

            // Act
            var serviceResult = await _chatGroupsAppService.UpdateAsync(Guid.Parse("e4d408f7-471e-497e-bb06-08902d05b472"), input);

            // Assert
            var result = await _chatGroupRepository.FindAsync(c => c.Id == serviceResult.Id);

            result.ShouldNotBe(null);
            result.Name.ShouldBe("f34ec1c1e6304a1a99");
            result.Description.ShouldBe("d84cfb");
            result.IsActive.ShouldBe(true);
            result.ProviderName.ShouldBe("45086d4629ad4fa3837389c10b1c381d1f2337d6643141c58066e3762c81c86b50c2e0eca2b245");
            result.ProviderKey.ShouldBe(Guid.Parse("2da95303-2fb8-460e-9b84-cb974d04e9e6"));
        }

        [Fact]
        public async Task DeleteAsync()
        {
            // Act
            await _chatGroupsAppService.DeleteAsync(Guid.Parse("e4d408f7-471e-497e-bb06-08902d05b472"));

            // Assert
            var result = await _chatGroupRepository.FindAsync(c => c.Id == Guid.Parse("e4d408f7-471e-497e-bb06-08902d05b472"));

            result.ShouldBeNull();
        }
    }
}