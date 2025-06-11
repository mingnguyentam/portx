using PortX.TransportationSetViewTemplates;
using PortX.TransportationSetSupplierViewTemplates;
using PortX.TransportationSetItemGroups;
using PortX.TransportationSetItems;
using PortX.ShippingWorkflows;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.LanguageManagement.EntityFrameworkCore;
using Volo.FileManagement.EntityFrameworkCore;
using Volo.Chat.EntityFrameworkCore;
using Volo.Abp.TextTemplateManagement.EntityFrameworkCore;
using Volo.Saas.EntityFrameworkCore;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;
using Volo.Abp.Gdpr;

namespace PortX.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityProDbContext))]
[ReplaceDbContext(typeof(ISaasDbContext))]
[ConnectionStringName("Default")]
public class PortXDbContext :
    AbpDbContext<PortXDbContext>,
    ISaasDbContext,
    IIdentityProDbContext
{
    public DbSet<TransportationSetViewTemplate> TransportationSetViewTemplates { get; set; } = null!;
    public DbSet<TransportationSetSupplierViewTemplate> TransportationSetSupplierViewTemplates { get; set; } = null!;
    public DbSet<TransportationSetItemGroup> TransportationSetItemGroups { get; set; } = null!;
    public DbSet<TransportationSetItem> TransportationSetItems { get; set; } = null!;
    public DbSet<ShippingWorkflow> ShippingWorkflows { get; set; } = null!;
    /* Add DbSet properties for your Aggregate Roots / Entities here. */

    #region Entities from the modules

    /* Notice: We only implemented IIdentityProDbContext and ISaasDbContext
     * and replaced them for this DbContext. This allows you to perform JOIN
     * queries for the entities of these modules over the repositories easily. You
     * typically don't need that for other modules. But, if you need, you can
     * implement the DbContext interface of the needed module and use ReplaceDbContext
     * attribute just like IIdentityProDbContext and ISaasDbContext.
     *
     * More info: Replacing a DbContext of a module ensures that the related module
     * uses this DbContext on runtime. Otherwise, it will use its own DbContext class.
     */

    // Identity
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }
    public DbSet<IdentityUserDelegation> UserDelegations { get; set; }
    public DbSet<IdentitySession> Sessions { get; set; }

    // SaaS
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<Edition> Editions { get; set; }
    public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }

    #endregion

    public PortXDbContext(DbContextOptions<PortXDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigurePermissionManagement();
        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureFeatureManagement();
        builder.ConfigureIdentityPro();
        builder.ConfigureOpenIddictPro();
        builder.ConfigureLanguageManagement();
        builder.ConfigureFileManagement();
        builder.ConfigureSaas();
        builder.ConfigureChat();
        builder.ConfigureTextTemplateManagement();
        builder.ConfigureGdpr();
        builder.ConfigureBlobStoring();

        /* Configure your own tables/entities inside here */

        //builder.Entity<YourEntity>(b =>
        //{
        //    b.ToTable(PortXConsts.DbTablePrefix + "YourEntities", PortXConsts.DbSchema);
        //    b.ConfigureByConvention(); //auto configure for the base class props
        //    //...
        //});

        builder.Entity<ShippingWorkflow>(b =>
                {
                    b.ToTable(PortXConsts.DbTablePrefix + "ShippingWorkflows", PortXConsts.DbSchema);
                    b.ConfigureByConvention();
                    b.Property(x => x.TenantId).HasColumnName(nameof(ShippingWorkflow.TenantId));
                    b.Property(x => x.Name).HasColumnName(nameof(ShippingWorkflow.Name));
                    b.Property(x => x.TransportationType).HasColumnName(nameof(ShippingWorkflow.TransportationType));
                    b.Property(x => x.Mode).HasColumnName(nameof(ShippingWorkflow.Mode));
                    b.Property(x => x.Incoterms).HasColumnName(nameof(ShippingWorkflow.Incoterms));
                    b.Property(x => x.IsActive).HasColumnName(nameof(ShippingWorkflow.IsActive));
                    b.Property(x => x.ConditionSettings).HasColumnName(nameof(ShippingWorkflow.ConditionSettings));
                    b.Property(x => x.rootId).HasColumnName(nameof(ShippingWorkflow.rootId));
                    b.Property(x => x.TransportationSetRootId).HasColumnName(nameof(ShippingWorkflow.TransportationSetRootId));
                });
        builder.Entity<TransportationSetItem>(b =>
                {
                    b.ToTable(PortXConsts.DbTablePrefix + "TransportationSetItems", PortXConsts.DbSchema);
                    b.ConfigureByConvention();
                    b.Property(x => x.TenantId).HasColumnName(nameof(TransportationSetItem.TenantId));
                    b.Property(x => x.Name).HasColumnName(nameof(TransportationSetItem.Name));
                    b.Property(x => x.Type).HasColumnName(nameof(TransportationSetItem.Type));
                    b.Property(x => x.Attributes).HasColumnName(nameof(TransportationSetItem.Attributes));
                    b.Property(x => x.Order).HasColumnName(nameof(TransportationSetItem.Order));
                    b.Property(x => x.Category).HasColumnName(nameof(TransportationSetItem.Category));
                    b.Property(x => x.IsActive).HasColumnName(nameof(TransportationSetItem.IsActive));
                    b.Property(x => x.IsDefault).HasColumnName(nameof(TransportationSetItem.IsDefault));
                    b.Property(x => x.RootId).HasColumnName(nameof(TransportationSetItem.RootId));
                    b.Property(x => x.TransportationSetRootId).HasColumnName(nameof(TransportationSetItem.TransportationSetRootId));
                    b.Property(x => x.TransportationSetItemGroupRootId).HasColumnName(nameof(TransportationSetItem.TransportationSetItemGroupRootId));
                });
        builder.Entity<TransportationSetItemGroup>(b =>
                {
                    b.ToTable(PortXConsts.DbTablePrefix + "TransportationSetItemGroups", PortXConsts.DbSchema);
                    b.ConfigureByConvention();
                    b.Property(x => x.TenantId).HasColumnName(nameof(TransportationSetItemGroup.TenantId));
                    b.Property(x => x.Name).HasColumnName(nameof(TransportationSetItemGroup.Name));
                    b.Property(x => x.Order).HasColumnName(nameof(TransportationSetItemGroup.Order));
                    b.Property(x => x.Type).HasColumnName(nameof(TransportationSetItemGroup.Type));
                    b.Property(x => x.RootId).HasColumnName(nameof(TransportationSetItemGroup.RootId));
                    b.Property(x => x.TransportationSetRootId).HasColumnName(nameof(TransportationSetItemGroup.TransportationSetRootId));
                });
        builder.Entity<TransportationSetSupplierViewTemplate>(b =>
                {
                    b.ToTable(PortXConsts.DbTablePrefix + "TransportationSetSupplierViewTemplates", PortXConsts.DbSchema);
                    b.ConfigureByConvention();
                    b.Property(x => x.TenantId).HasColumnName(nameof(TransportationSetSupplierViewTemplate.TenantId));
                    b.Property(x => x.SupplierTenantId).HasColumnName(nameof(TransportationSetSupplierViewTemplate.SupplierTenantId));
                    b.Property(x => x.TransportationSetViewTemplateRootId).HasColumnName(nameof(TransportationSetSupplierViewTemplate.TransportationSetViewTemplateRootId));
                    b.Property(x => x.SupplierId).HasColumnName(nameof(TransportationSetSupplierViewTemplate.SupplierId));
                    b.Property(x => x.RootId).HasColumnName(nameof(TransportationSetSupplierViewTemplate.RootId));
                    b.Property(x => x.ShippingRootId).HasColumnName(nameof(TransportationSetSupplierViewTemplate.ShippingRootId));
                });
        builder.Entity<TransportationSetViewTemplate>(b =>
                {
                    b.ToTable(PortXConsts.DbTablePrefix + "TransportationSetViewTemplates", PortXConsts.DbSchema);
                    b.ConfigureByConvention();
                    b.Property(x => x.TenantId).HasColumnName(nameof(TransportationSetViewTemplate.TenantId));
                    b.Property(x => x.Name).HasColumnName(nameof(TransportationSetViewTemplate.Name));
                    b.Property(x => x.Description).HasColumnName(nameof(TransportationSetViewTemplate.Description));
                    b.Property(x => x.Data).HasColumnName(nameof(TransportationSetViewTemplate.Data));
                    b.Property(x => x.RootId).HasColumnName(nameof(TransportationSetViewTemplate.RootId));
                    b.Property(x => x.TransportationSetRootId).HasColumnName(nameof(TransportationSetViewTemplate.TransportationSetRootId));
                });
    }
}