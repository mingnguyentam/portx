namespace PortX.Permissions;

public static class PortXPermissions
{
    public const string GroupName = "PortX";

    public static class Dashboard
    {
        public const string DashboardGroup = GroupName + ".Dashboard";
        public const string Host = DashboardGroup + ".Host";
        public const string Tenant = DashboardGroup + ".Tenant";
    }

    //Add your own permission names. Example:
    //public const string MyPermission1 = GroupName + ".MyPermission1";

    public static class ShippingWorkflows
    {
        public const string Default = GroupName + ".ShippingWorkflows";
        public const string Edit = Default + ".Edit";
        public const string Create = Default + ".Create";
        public const string Delete = Default + ".Delete";
    }

    public static class TransportationSetItems
    {
        public const string Default = GroupName + ".TransportationSetItems";
        public const string Edit = Default + ".Edit";
        public const string Create = Default + ".Create";
        public const string Delete = Default + ".Delete";
    }

    public static class TransportationSetItemGroups
    {
        public const string Default = GroupName + ".TransportationSetItemGroups";
        public const string Edit = Default + ".Edit";
        public const string Create = Default + ".Create";
        public const string Delete = Default + ".Delete";
    }

    public static class TransportationSetSupplierViewTemplates
    {
        public const string Default = GroupName + ".TransportationSetSupplierViewTemplates";
        public const string Edit = Default + ".Edit";
        public const string Create = Default + ".Create";
        public const string Delete = Default + ".Delete";
    }

    public static class TransportationSetViewTemplates
    {
        public const string Default = GroupName + ".TransportationSetViewTemplates";
        public const string Edit = Default + ".Edit";
        public const string Create = Default + ".Create";
        public const string Delete = Default + ".Delete";
    }
}