namespace PortX.TransportationSetItemGroups
{
    public static class TransportationSetItemGroupConsts
    {
        private const string DefaultSorting = "{0}Name asc";

        public static string GetDefaultSorting(bool withEntityName)
        {
            return string.Format(DefaultSorting, withEntityName ? "TransportationSetItemGroup." : string.Empty);
        }

    }
}