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

        var transportationSetItemPermission = myGroup.AddPermission(PortXPermissions.TransportationSetItems.Default, L("Permission:TransportationSetItems"));
        transportationSetItemPermission.AddChild(PortXPermissions.TransportationSetItems.Create, L("Permission:Create"));
        transportationSetItemPermission.AddChild(PortXPermissions.TransportationSetItems.Edit, L("Permission:Edit"));
        transportationSetItemPermission.AddChild(PortXPermissions.TransportationSetItems.Delete, L("Permission:Delete"));

        var transportationSetItemGroupPermission = myGroup.AddPermission(PortXPermissions.TransportationSetItemGroups.Default, L("Permission:TransportationSetItemGroups"));
        transportationSetItemGroupPermission.AddChild(PortXPermissions.TransportationSetItemGroups.Create, L("Permission:Create"));
        transportationSetItemGroupPermission.AddChild(PortXPermissions.TransportationSetItemGroups.Edit, L("Permission:Edit"));
        transportationSetItemGroupPermission.AddChild(PortXPermissions.TransportationSetItemGroups.Delete, L("Permission:Delete"));

        var transportationSetSupplierViewTemplatePermission = myGroup.AddPermission(PortXPermissions.TransportationSetSupplierViewTemplates.Default, L("Permission:TransportationSetSupplierViewTemplates"));
        transportationSetSupplierViewTemplatePermission.AddChild(PortXPermissions.TransportationSetSupplierViewTemplates.Create, L("Permission:Create"));
        transportationSetSupplierViewTemplatePermission.AddChild(PortXPermissions.TransportationSetSupplierViewTemplates.Edit, L("Permission:Edit"));
        transportationSetSupplierViewTemplatePermission.AddChild(PortXPermissions.TransportationSetSupplierViewTemplates.Delete, L("Permission:Delete"));

        var transportationSetViewTemplatePermission = myGroup.AddPermission(PortXPermissions.TransportationSetViewTemplates.Default, L("Permission:TransportationSetViewTemplates"));
        transportationSetViewTemplatePermission.AddChild(PortXPermissions.TransportationSetViewTemplates.Create, L("Permission:Create"));
        transportationSetViewTemplatePermission.AddChild(PortXPermissions.TransportationSetViewTemplates.Edit, L("Permission:Edit"));
        transportationSetViewTemplatePermission.AddChild(PortXPermissions.TransportationSetViewTemplates.Delete, L("Permission:Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<PortXResource>(name);
    }
}