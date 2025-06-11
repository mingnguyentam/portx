using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Domain.Services;
using Volo.Abp.Data;

namespace PortX.ChatGroups
{
    public abstract class ChatGroupManagerBase : DomainService
    {
        protected IChatGroupRepository _chatGroupRepository;

        public ChatGroupManagerBase(IChatGroupRepository chatGroupRepository)
        {
            _chatGroupRepository = chatGroupRepository;
        }

        public virtual async Task<ChatGroup> CreateAsync(
        bool isActive, string? name = null, string? description = null, string? providerName = null, Guid? providerKey = null)
        {

            var chatGroup = new ChatGroup(
             GuidGenerator.Create(),
             isActive, name, description, providerName, providerKey
             );

            return await _chatGroupRepository.InsertAsync(chatGroup);
        }

        public virtual async Task<ChatGroup> UpdateAsync(
            Guid id,
            bool isActive, string? name = null, string? description = null, string? providerName = null, Guid? providerKey = null, [CanBeNull] string? concurrencyStamp = null
        )
        {

            var chatGroup = await _chatGroupRepository.GetAsync(id);

            chatGroup.IsActive = isActive;
            chatGroup.Name = name;
            chatGroup.Description = description;
            chatGroup.ProviderName = providerName;
            chatGroup.ProviderKey = providerKey;

            chatGroup.SetConcurrencyStampIfNotNull(concurrencyStamp);
            return await _chatGroupRepository.UpdateAsync(chatGroup);
        }

    }
}