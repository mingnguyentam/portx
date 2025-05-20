using Volo.Abp.Settings;

namespace PortX.Settings;

public class PortXSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(PortXSettings.MySetting1));
    }
}
