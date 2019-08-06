import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { WhatIsComponent } from './pages/what-is/what-is.component';
import { MultimediaComponent } from './pages/multimedia/multimedia.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '404-not-found', component: Page404Component, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'whatIs', component: WhatIsComponent, pathMatch: 'full' },
  { path: 'multimedia', component: MultimediaComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactPageComponent, pathMatch: 'full' },
  { path: 'accreditation', component: LoginComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }