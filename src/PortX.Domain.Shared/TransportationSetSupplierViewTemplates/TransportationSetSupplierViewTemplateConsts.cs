namespace PortX.TransportationSetSupplierViewTemplates
{
    public static class TransportationSetSupplierViewTemplateConsts
    {
        private const string DefaultSorting = "{0}SupplierTenantId asc";

        public static string GetDefaultSorting(bool withEntityName)
        {
            return string.Format(DefaultSorting, withEntityName ? "TransportationSetSupplierViewTemplate." : string.Empty);
        }

    }
}