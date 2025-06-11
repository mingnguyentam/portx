namespace PortX.TransportationSetViewTemplates
{
    public static class TransportationSetViewTemplateConsts
    {
        private const string DefaultSorting = "{0}Name asc";

        public static string GetDefaultSorting(bool withEntityName)
        {
            return string.Format(DefaultSorting, withEntityName ? "TransportationSetViewTemplate." : string.Empty);
        }

    }
}