import { Component } from '@angular/core';
import { PrivacySecurityComponent } from './privacy-security/privacy-security.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { SupportComponent } from './support/support.component';
import { SystemPreferencesComponent } from './system-preferences/system-preferences.component';
import { TreeNode } from '@/app/shared/interface';
import { MatTreeModule, MatTreeNode } from '@angular/material/tree';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  CdkPortalOutlet,
  ComponentPortal,
  ComponentType,
} from '@angular/cdk/portal';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    PrivacySecurityComponent,
    ProfileSettingsComponent,
    SupportComponent,
    SystemPreferencesComponent,
    MatTreeModule,
    MatTreeNode,
    MatIcon,
    MatButtonModule,
    CdkPortalOutlet,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export default class SettingsComponent {
  SETTINGS: TreeNode[] = [
    {
      name: 'Profile Settings',
      children: [],
      component: ProfileSettingsComponent,
    },
    {
      name: 'System Preferences',
      children: [],
      component: SystemPreferencesComponent,
    },
    {
      name: 'Privacy & Security',
      children: [],
      component: PrivacySecurityComponent,
    },
    {
      name: 'Support',
      children: [],
      component: SupportComponent,
    },
  ];

  dataSource = this.SETTINGS;
  selectedComponent: ComponentPortal<any> | null = null;

  childrenAccessor = (node: TreeNode) => node.children ?? [];

  hasChild = (_: number, node: TreeNode) =>
    !!node.children && node.children.length > 0;

  selectSetting(component: ComponentType<any>) {
    this.selectedComponent = new ComponentPortal(component);
  }
}
