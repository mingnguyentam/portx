using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Uow;
using PortX.TransportationSetItemGroups;

namespace PortX.TransportationSetItemGroups
{
    public class TransportationSetItemGroupsDataSeedContributor : IDataSeedContributor, ISingletonDependency
    {
        private bool IsSeeded = false;
        private readonly ITransportationSetItemGroupRepository _transportationSetItemGroupRepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public TransportationSetItemGroupsDataSeedContributor(ITransportationSetItemGroupRepository transportationSetItemGroupRepository, IUnitOfWorkManager unitOfWorkManager)
        {
            _transportationSetItemGroupRepository = transportationSetItemGroupRepository;
            _unitOfWorkManager = unitOfWorkManager;

        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (IsSeeded)
            {
                return;
            }

            await _transportationSetItemGroupRepository.InsertAsync(new TransportationSetItemGroup
            (
                id: Guid.Parse("0274d837-25c2-448f-820d-8ca95c14685f"),
                name: "3cbb324df74b48d88cda946087cd12b2ef18cc7f19e14c1da677a6c104c687e16af",
                order: 359480617,
                type: "0badaaf0b4164181a83733072338421a7f64b6cf01be4320941c3d8460d2126",
                rootId: Guid.Parse("86606cf0-20f6-46b3-956b-17edb487ee55"),
                transportationSetRootId: Guid.Parse("d843a80b-51bd-4ec5-88ff-69cf3f096fb3")
            ));

            await _transportationSetItemGroupRepository.InsertAsync(new TransportationSetItemGroup
            (
                id: Guid.Parse("3bb9aeea-647d-4f3f-924c-c8a673a1d048"),
                name: "244c14b19e764bb6aba4cf247d6e499bf3cddb8018654a18add4d2d4efff331bbb058e8902f64b7882d49e4b385891",
                order: 203641142,
                type: "cd103344d4c543f387e6e7c97bb6470b3fd23a69603c49738251f00d7f8072dc41",
                rootId: Guid.Parse("38b4630d-6336-4d38-b104-92880ad21cc0"),
                transportationSetRootId: Guid.Parse("4d24ab2c-dd6d-418c-b9a9-065a13cb138a")
            ));

            await _unitOfWorkManager!.Current!.SaveChangesAsync();

            IsSeeded = true;
        }
    }
}