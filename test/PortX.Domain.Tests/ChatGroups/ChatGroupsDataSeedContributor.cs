using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Uow;
using PortX.ChatGroups;

namespace PortX.ChatGroups
{
    public class ChatGroupsDataSeedContributor : IDataSeedContributor, ISingletonDependency
    {
        private bool IsSeeded = false;
        private readonly IChatGroupRepository _chatGroupRepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public ChatGroupsDataSeedContributor(IChatGroupRepository chatGroupRepository, IUnitOfWorkManager unitOfWorkManager)
        {
            _chatGroupRepository = chatGroupRepository;
            _unitOfWorkManager = unitOfWorkManager;

        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (IsSeeded)
            {
                return;
            }

            await _chatGroupRepository.InsertAsync(new ChatGroup
            (
                id: Guid.Parse("e4d408f7-471e-497e-bb06-08902d05b472"),
                name: "74780641061e404ba6f7390c4a57d9f2b34c9dc28b5e472e",
                description: "a33c84cc13cf441aafdff88a1af20ee80a625e942d5940eb8e35a",
                isActive: true,
                providerName: "2a421447e35b4cf4ab682683dddfbdb0b74",
                providerKey: Guid.Parse("8f0f8654-ddfe-4d33-adb4-f4c5ca16c6f3")
            ));

            await _chatGroupRepository.InsertAsync(new ChatGroup
            (
                id: Guid.Parse("60001f59-9f45-4b9b-bacc-f24ca10657df"),
                name: "4fa27771187f470a954fdeb8bcb05bb1301307d5da7641a2bb0041",
                description: "1c166a2f6ba5494db3c42ad7ab20e6c53e0d5e82fc0e413",
                isActive: true,
                providerName: "ce3d1a6367dd493d8704ce391bfbb935b5f43f",
                providerKey: Guid.Parse("1f054462-a016-4b51-b129-1835a87e2983")
            ));

            await _unitOfWorkManager!.Current!.SaveChangesAsync();

            IsSeeded = true;
        }
    }
}