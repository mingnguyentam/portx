using Shouldly;
using System;
using System.Linq;
using System.Threading.Tasks;
using PortX.TransportationSetItemGroups;
using PortX.EntityFrameworkCore;
using Xunit;

namespace PortX.EntityFrameworkCore.Domains.TransportationSetItemGroups
{
    public class TransportationSetItemGroupRepositoryTests : PortXEntityFrameworkCoreTestBase
    {
        private readonly ITransportationSetItemGroupRepository _transportationSetItemGroupRepository;

        public TransportationSetItemGroupRepositoryTests()
        {
            _transportationSetItemGroupRepository = GetRequiredService<ITransportationSetItemGroupRepository>();
        }

        [Fact]
        public async Task GetListAsync()
        {
            // Arrange
            await WithUnitOfWorkAsync(async () =>
            {
                // Act
                var result = await _transportationSetItemGroupRepository.GetListAsync(
                    name: "3cbb324df74b48d88cda946087cd12b2ef18cc7f19e14c1da677a6c104c687e16af",
                    type: "0badaaf0b4164181a83733072338421a7f64b6cf01be4320941c3d8460d2126",
                    rootId: Guid.Parse("86606cf0-20f6-46b3-956b-17edb487ee55"),
                    transportationSetRootId: Guid.Parse("d843a80b-51bd-4ec5-88ff-69cf3f096fb3")
                );

                // Assert
                result.Count.ShouldBe(1);
                result.FirstOrDefault().ShouldNotBe(null);
                result.First().Id.ShouldBe(Guid.Parse("0274d837-25c2-448f-820d-8ca95c14685f"));
            });
        }

        [Fact]
        public async Task GetCountAsync()
        {
            // Arrange
            await WithUnitOfWorkAsync(async () =>
            {
                // Act
                var result = await _transportationSetItemGroupRepository.GetCountAsync(
                    name: "244c14b19e764bb6aba4cf247d6e499bf3cddb8018654a18add4d2d4efff331bbb058e8902f64b7882d49e4b385891",
                    type: "cd103344d4c543f387e6e7c97bb6470b3fd23a69603c49738251f00d7f8072dc41",
                    rootId: Guid.Parse("38b4630d-6336-4d38-b104-92880ad21cc0"),
                    transportationSetRootId: Guid.Parse("4d24ab2c-dd6d-418c-b9a9-065a13cb138a")
                );

                // Assert
                result.ShouldBe(1);
            });
        }
    }
}