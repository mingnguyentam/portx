using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace PortX.Data;

/* This is used if database provider does't define
 * IPortXDbSchemaMigrator implementation.
 */
public class NullPortXDbSchemaMigrator : IPortXDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
