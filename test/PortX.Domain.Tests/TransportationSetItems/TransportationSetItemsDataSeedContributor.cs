using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Uow;
using PortX.TransportationSetItems;

namespace PortX.TransportationSetItems
{
    public class TransportationSetItemsDataSeedContributor : IDataSeedContributor, ISingletonDependency
    {
        private bool IsSeeded = false;
        private readonly ITransportationSetItemRepository _transportationSetItemRepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public TransportationSetItemsDataSeedContributor(ITransportationSetItemRepository transportationSetItemRepository, IUnitOfWorkManager unitOfWorkManager)
        {
            _transportationSetItemRepository = transportationSetItemRepository;
            _unitOfWorkManager = unitOfWorkManager;

        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (IsSeeded)
            {
                return;
            }

            await _transportationSetItemRepository.InsertAsync(new TransportationSetItem
            (
                id: Guid.Parse("a7ccd494-7e51-42d7-95fc-47fb429d6c01"),
                name: "858debdae9694d69acfbcbe4ab0c5048472aae1bd12",
                type: "3599c3513f4f4fef84c92a312893101b8ab0",
                attributes: "ace978cc",
                order: 195738351,
                category: "737c22a763b04b5a9235fec59fb03a80e062be13b0e14be6aa9e7101e63c4cb10e95ef39bfab4d9c926c10820a11c7",
                isActive: true,
                isDefault: true,
                rootId: Guid.Parse("7ef8d320-2592-4ed1-941d-e5bc946f1ebc"),
                transportationSetRootId: Guid.Parse("7c50f91e-b2db-4316-84b0-269c97b13125"),
                transportationSetItemGroupRootId: Guid.Parse("f222e55e-8f29-421d-89aa-a6e2aa42a4ed")
            ));

            await _transportationSetItemRepository.InsertAsync(new TransportationSetItem
            (
                id: Guid.Parse("ccdbfb1e-245f-4379-a841-5a969d944a48"),
                name: "7148c72d52074128bac08075c64e15e1b5f4ccaebffa48d0988438ec3a0f912edbb6dfa9fa4e4",
                type: "d5ef4067c61b4d8db384303407bee2aab4",
                attributes: "a4dfdccd649b4e87859440fc5a0704e75a36f1",
                order: 955357064,
                category: "9d567d36b01846e2a3bb23cc61ee5fd5536c351050b945f0bce5c5d5e13b0e880c295423f185490",
                isActive: true,
                isDefault: true,
                rootId: Guid.Parse("53d92fa4-ec52-461f-9ffe-464752e966cb"),
                transportationSetRootId: Guid.Parse("bb64da63-0e20-4035-b857-754a26e06af3"),
                transportationSetItemGroupRootId: Guid.Parse("68983f1e-80d5-4548-91a8-8dffc6ab3709")
            ));

            await _unitOfWorkManager!.Current!.SaveChangesAsync();

            IsSeeded = true;
        }
    }
}