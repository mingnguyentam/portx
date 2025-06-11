using Shouldly;
using System;
using System.Linq;
using System.Threading.Tasks;
using PortX.TransportationSetViewTemplates;
using PortX.EntityFrameworkCore;
using Xunit;

namespace PortX.EntityFrameworkCore.Domains.TransportationSetViewTemplates
{
    public class TransportationSetViewTemplateRepositoryTests : PortXEntityFrameworkCoreTestBase
    {
        private readonly ITransportationSetViewTemplateRepository _transportationSetViewTemplateRepository;

        public TransportationSetViewTemplateRepositoryTests()
        {
            _transportationSetViewTemplateRepository = GetRequiredService<ITransportationSetViewTemplateRepository>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Arrange
            await WithUnitOfWorkAsync(async () =>
            {
                // Act
                var result = await _transportationSetViewTemplateRepository.GetListAsync(
                    name: "5206f3dfb3af42058fa33ec40e554e2a0635ca5631274c54a4605254aedc3b582dce657662dc4ee4",
                    description: "d88eabd0a55f48db82384813e8ce9d437f426ed2fa9147c88c6dbdf2282558",
                    data: "5bbaf942ff654786809f54d49a6f74178ef7f38bb888468ca1596473d9cccdbc0",
                    rootId: Guid.Parse("e6c8d871-2e86-4709-ae3c-4b20db7c9d72"),
                    transportationSetRootId: Guid.Parse("a4d977b1-7037-45a4-b99f-6b20804ded21")
                );

                // Assert
                result.Count.ShouldBe(1);
                result.FirstOrDefault().ShouldNotBe(null);
                result.First().Id.ShouldBe(Guid.Parse("0e141e8e-1ece-417e-bacf-e6e7f729b07f"));
            });
        }

        [Fact]
        public async Task GetCountAsync()
        {
            // Arrange
            await WithUnitOfWorkAsync(async () =>
            {
                // Act
                var result = await _transportationSetViewTemplateRepository.GetCountAsync(
                    name: "f1dfad78cbc647e8857c58e5ce5fd6e197a1271144654fd9b8012b40bb85ab4841ded3c9029e4989aeefb1e8bdf3",
                    description: "8cf961f565ea4d0e9a94911869b3f7",
                    data: "1996017f9ed84231a8b4249ce71294be0937df2442404db4a3153f018ae53e04517",
                    rootId: Guid.Parse("1fc7c46e-b706-4928-9488-c71409b8b96c"),
                    transportationSetRootId: Guid.Parse("c795e38f-e173-43c7-85b3-aaaa2d5f34ab")
                );

                // Assert
                result.ShouldBe(1);
            });
        }
    }
}