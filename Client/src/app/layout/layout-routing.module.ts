import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'change-password', component: ChangePasswordComponent },
  {path: 'edit-profile', component: EditProfileComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'user-management', component: UserManagementComponent },
  {path: 'notification-management', component: NotificationManagementComponent },
  {path: 'setting', component: SettingsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
