import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DEFAULT_ROUTES } from './routes/default-layout-routes'
import { BACKEND_ROUTES } from './routes/backend-layout-routes'

const routes: Routes = [
  /**
   * If path is blank then the default layout components will be called. But the routes will be chosen according
   * to the children mentioned. The children here mentioned as 'DEFAULT_ROUTES' which has been defined in 
   * './routes/default-layout-routes'
   */
  {path:'', component: DefaultLayoutComponent, children: DEFAULT_ROUTES},
  {path:'backend', component: BackendLayoutComponent, children: BACKEND_ROUTES},
  {path:'**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
