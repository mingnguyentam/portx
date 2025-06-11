using Shouldly;
using System;
using System.Linq;
using System.Threading.Tasks;
using PortX.ChatGroups;
using PortX.EntityFrameworkCore;
using Xunit;

namespace PortX.EntityFrameworkCore.Domains.ChatGroups
{
    public class ChatGroupRepositoryTests : PortXEntityFrameworkCoreTestBase
    {
        private readonly IChatGroupRepository _chatGroupRepository;

        public ChatGroupRepositoryTests()
        {
            _chatGroupRepository = GetRequiredService<IChatGroupRepository>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Arrange
            await WithUnitOfWorkAsync(async () =>
            {
                // Act
                var result = await _chatGroupRepository.GetListAsync(
                    name: "74780641061e404ba6f7390c4a57d9f2b34c9dc28b5e472e",
                    description: "a33c84cc13cf441aafdff88a1af20ee80a625e942d5940eb8e35a",
                    isActive: true,
                    providerName: "2a421447e35b4cf4ab682683dddfbdb0b74",
                    providerKey: Guid.Parse("8f0f8654-ddfe-4d33-adb4-f4c5ca16c6f3")
                );

                // Assert
                result.Count.ShouldBe(1);
                result.FirstOrDefault().ShouldNotBe(null);
                result.First().Id.ShouldBe(Guid.Parse("e4d408f7-471e-497e-bb06-08902d05b472"));
            });
        }

        [Fact]
        public async Task GetCountAsync()
        {
            // Arrange
            await WithUnitOfWorkAsync(async () =>
            {
                // Act
                var result = await _chatGroupRepository.GetCountAsync(
                    name: "4fa27771187f470a954fdeb8bcb05bb1301307d5da7641a2bb0041",
                    description: "1c166a2f6ba5494db3c42ad7ab20e6c53e0d5e82fc0e413",
                    isActive: true,
                    providerName: "ce3d1a6367dd493d8704ce391bfbb935b5f43f",
                    providerKey: Guid.Parse("1f054462-a016-4b51-b129-1835a87e2983")
                );

                // Assert
                result.ShouldBe(1);
            });
        }
    }
}