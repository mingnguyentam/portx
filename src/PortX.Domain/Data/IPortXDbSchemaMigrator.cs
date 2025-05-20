using System.Threading.Tasks;

namespace PortX.Data;

public interface IPortXDbSchemaMigrator
{
    Task MigrateAsync();
}
