namespace PortX.ShippingWorkflows
{
    public static class ShippingWorkflowConsts
    {
        private const string DefaultSorting = "{0}Name asc";

        public static string GetDefaultSorting(bool withEntityName)
        {
            return string.Format(DefaultSorting, withEntityName ? "ShippingWorkflow." : string.Empty);
        }

    }
}