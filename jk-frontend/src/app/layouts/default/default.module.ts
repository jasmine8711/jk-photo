import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PicsComponent } from '../../modules/pics/pics.component';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [DefaultComponent,
    DashboardComponent, PicsComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    MatSidenavModule]
})
export class DefaultModule { }
