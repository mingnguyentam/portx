import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'PortX.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'PortX.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
