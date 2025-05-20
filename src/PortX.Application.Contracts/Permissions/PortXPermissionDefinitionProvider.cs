using PortX.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace PortX.Permissions;

public class PortXPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(PortXPermissions.GroupName);

        myGroup.AddPermission(PortXPermissions.Dashboard.Host, L("Permission:Dashboard"), MultiTenancySides.Host);
        myGroup.AddPermission(PortXPermissions.Dashboard.Tenant, L("Permission:Dashboard"), MultiTenancySides.Tenant);

        //Define your own permissions here. Example:
        //myGroup.AddPermission(PortXPermissions.MyPermission1, L("Permission:MyPermission1"));

        var shippingWorkflowPermission = myGroup.AddPermission(PortXPermissions.ShippingWorkflows.Default, L("Permission:ShippingWorkflows"));
        shippingWorkflowPermission.AddChild(PortXPermissions.ShippingWorkflows.Create, L("Permission:Create"));
        shippingWorkflowPermission.AddChild(PortXPermissions.ShippingWorkflows.Edit, L("Permission:Edit"));
        shippingWorkflowPermission.AddChild(PortXPermissions.ShippingWorkflows.Delete, L("Permission:Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<PortXResource>(name);
    }
}