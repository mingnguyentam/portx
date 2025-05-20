./build-image.ps1 -ProjectPath "../../src/PortX.DbMigrator/PortX.DbMigrator.csproj" -ImageName portx/dbmigrator
./build-image.ps1 -ProjectPath "../../src/PortX.HttpApi.Host/PortX.HttpApi.Host.csproj" -ImageName portx/httpapihost
./build-image.ps1 -ProjectPath "../../angular" -ImageName portx/angular -ProjectType "angular"
./build-image.ps1 -ProjectPath "../../src/PortX.AuthServer/PortX.AuthServer.csproj" -ImageName portx/authserver
