using PortX.TransportationSetViewTemplates;
using PortX.TransportationSetSupplierViewTemplates;
using PortX.TransportationSetItemGroups;
using PortX.TransportationSetItems;
using PortX.ShippingWorkflows;
using System;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Uow;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.MySQL;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.LanguageManagement.EntityFrameworkCore;
using Volo.FileManagement.EntityFrameworkCore;
using Volo.Abp.TextTemplateManagement.EntityFrameworkCore;
using Volo.Saas.EntityFrameworkCore;
using Volo.Abp.Gdpr;
using Volo.Chat.EntityFrameworkCore;

namespace PortX.EntityFrameworkCore;

[DependsOn(
    typeof(PortXDomainModule),
    typeof(AbpPermissionManagementEntityFrameworkCoreModule),
    typeof(AbpSettingManagementEntityFrameworkCoreModule),
    typeof(AbpEntityFrameworkCoreMySQLModule),
    typeof(AbpBackgroundJobsEntityFrameworkCoreModule),
    typeof(AbpAuditLoggingEntityFrameworkCoreModule),
    typeof(AbpFeatureManagementEntityFrameworkCoreModule),
    typeof(AbpIdentityProEntityFrameworkCoreModule),
    typeof(AbpOpenIddictProEntityFrameworkCoreModule),
    typeof(LanguageManagementEntityFrameworkCoreModule),
    typeof(FileManagementEntityFrameworkCoreModule),
    typeof(SaasEntityFrameworkCoreModule),
    typeof(ChatEntityFrameworkCoreModule),
    typeof(TextTemplateManagementEntityFrameworkCoreModule),
    typeof(AbpGdprEntityFrameworkCoreModule),
    typeof(BlobStoringDatabaseEntityFrameworkCoreModule)
    )]
public class PortXEntityFrameworkCoreModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {

        PortXEfCoreEntityExtensionMappings.Configure();
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<PortXDbContext>(options =>
        {
            /* Remove "includeAllEntities: true" to create
             * default repositories only for aggregate roots */
            options.AddDefaultRepositories(includeAllEntities: true);
            options.AddRepository<ShippingWorkflow, ShippingWorkflows.EfCoreShippingWorkflowRepository>();

            options.AddRepository<TransportationSetItem, TransportationSetItems.EfCoreTransportationSetItemRepository>();

            options.AddRepository<TransportationSetItemGroup, TransportationSetItemGroups.EfCoreTransportationSetItemGroupRepository>();

            options.AddRepository<TransportationSetSupplierViewTemplate, TransportationSetSupplierViewTemplates.EfCoreTransportationSetSupplierViewTemplateRepository>();

            options.AddRepository<TransportationSetViewTemplate, TransportationSetViewTemplates.EfCoreTransportationSetViewTemplateRepository>();

        });

        Configure<AbpDbContextOptions>(options =>
        {
            /* The main point to change your DBMS.
             * See also PortXDbContextFactory for EF Core tooling. */
            options.UseMySQL();
        });

    }
}