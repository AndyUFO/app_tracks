import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";
import {AuthAdminGuard} from "./guards/auth-admin.guard";
import {AuthUserGuard} from "./guards/auth-user.guard";

const routes: Routes = [
  //{ path: 'tracks', loadChildren: () => import('./pages/tracks/tracks.module').then(m => m.TracksModule) },
  { path: 'spotify', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),canActivate :[AuthAdminGuard] },
  { path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule) ,canActivate :[AuthGuard]},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'logout', loadChildren: () => import('./pages/logout/logout.module').then(m => m.LogoutModule) },
  {path:"**",loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
