import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

// 
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgDatepickerModule  } from 'ng2-datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


import { CommanModule } from '../common/comman.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';


@NgModule({
  declarations: [
    DashboardComponent,  
    SettingsComponent,
    ProfileComponent,
    EditProfileComponent,    
    ChangePasswordComponent,   
    UserManagementComponent,   
    CategoryManagementComponent,   
    NotificationManagementComponent,  
  ],
  imports: [
    CommonModule,
    CommanModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    // BrowserAnimationsModule,
    FlexLayoutModule,
    NgDatepickerModule,
    ChartsModule,
    NgxMaterialTimepickerModule.setLocale('en'),
  ]
})
export class LayoutModule { }
