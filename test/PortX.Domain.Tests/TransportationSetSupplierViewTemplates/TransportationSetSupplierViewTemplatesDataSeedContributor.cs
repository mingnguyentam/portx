using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Uow;
using PortX.TransportationSetSupplierViewTemplates;

namespace PortX.TransportationSetSupplierViewTemplates
{
    public class TransportationSetSupplierViewTemplatesDataSeedContributor : IDataSeedContributor, ISingletonDependency
    {
        private bool IsSeeded = false;
        private readonly ITransportationSetSupplierViewTemplateRepository _transportationSetSupplierViewTemplateRepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public TransportationSetSupplierViewTemplatesDataSeedContributor(ITransportationSetSupplierViewTemplateRepository transportationSetSupplierViewTemplateRepository, IUnitOfWorkManager unitOfWorkManager)
        {
            _transportationSetSupplierViewTemplateRepository = transportationSetSupplierViewTemplateRepository;
            _unitOfWorkManager = unitOfWorkManager;

        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (IsSeeded)
            {
                return;
            }

            await _transportationSetSupplierViewTemplateRepository.InsertAsync(new TransportationSetSupplierViewTemplate
            (
                id: Guid.Parse("6faf50c1-c0ed-423c-ae72-9924ee4b79aa"),
                supplierTenantId: Guid.Parse("e3a72ba5-24bc-4edf-b45a-4a8f9a7a05b2"),
                transportationSetViewTemplateRootId: Guid.Parse("4bbcb60a-c941-4274-b05e-74ba3e425f47"),
                supplierId: Guid.Parse("2fd95042-b332-46de-a2b6-d0bcc770f306"),
                rootId: Guid.Parse("8e15d4a5-792a-4d6a-9a05-548e8a52954c"),
                shippingRootId: Guid.Parse("ec7bc17c-9c33-42f4-bb8b-1dde268ffff4")
            ));

            await _transportationSetSupplierViewTemplateRepository.InsertAsync(new TransportationSetSupplierViewTemplate
            (
                id: Guid.Parse("1474b6a4-5fba-4768-9ecc-13bc4b7ec1a7"),
                supplierTenantId: Guid.Parse("99baf287-43c4-4345-a259-c26eac510633"),
                transportationSetViewTemplateRootId: Guid.Parse("8514c81f-8d27-4d0b-8bd0-9fe6d8acb206"),
                supplierId: Guid.Parse("a0ed7d9f-70af-44d9-b8ba-d5b646bd3cc0"),
                rootId: Guid.Parse("44644f07-693a-4b3e-b06b-41f734dfca51"),
                shippingRootId: Guid.Parse("9f7ed2c0-4bed-4d35-960d-75403ed16cdd")
            ));

            await _unitOfWorkManager!.Current!.SaveChangesAsync();

            IsSeeded = true;
        }
    }
}