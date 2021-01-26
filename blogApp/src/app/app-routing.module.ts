import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DEFAULT_ROUTES } from './routes/default-layout-routes'
import { BACKEND_ROUTES } from './routes/backend-layout-routes'

const routes: Routes = [

  /**
   * Path: If reference URL is blanks. Example - http://localhost:4200
   * Component: DefaultLayoutComponent will be called which reseides in /app/layouts/default-layout/default-layout.component
   * Routes: The children attribute pointing to DEFAULT_ROUTES. Which resides in /app/routes/default-layout-routes
   */
  {path:'', component: DefaultLayoutComponent, children: DEFAULT_ROUTES},

  /**
   * Path: If reference URL is backend. Example - http://localhost:4200/backend/
   * Component: BackendLayoutComponent wil be called which reseides in /app/layouts/backend-layout/backend-layout.component
   * Routes: The children attribute pointing to BACKEND_ROUTES. Which resides in /app/routes/backend-layout-routes
   */

  {path:'backend', component: BackendLayoutComponent, children: BACKEND_ROUTES},

  /**
   * If no path matched.
   */

  {path:'**', redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
