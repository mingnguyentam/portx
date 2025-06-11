using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using PortX.EntityFrameworkCore;

namespace PortX.ChatGroups
{
    public class EfCoreChatGroupRepository : EfCoreChatGroupRepositoryBase, IChatGroupRepository
    {
        public EfCoreChatGroupRepository(IDbContextProvider<PortXDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }
    }
}