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

namespace PortX.TransportationSetViewTemplates
{
    public class EfCoreTransportationSetViewTemplateRepository : EfCoreTransportationSetViewTemplateRepositoryBase, ITransportationSetViewTemplateRepository
    {
        public EfCoreTransportationSetViewTemplateRepository(IDbContextProvider<PortXDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }
    }
}