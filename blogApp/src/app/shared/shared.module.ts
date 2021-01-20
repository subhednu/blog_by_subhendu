import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackendFooterComponent } from './backend-footer/backend-footer.component';
import { BackendHeaderComponent } from './backend-header/backend-header.component';


@NgModule({
  declarations: [ 
    HeaderComponent, 
    FooterComponent, 
    BackendFooterComponent, 
    BackendHeaderComponent
  ],
  exports:[
    HeaderComponent, 
    FooterComponent, 
    BackendFooterComponent, 
    BackendHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
