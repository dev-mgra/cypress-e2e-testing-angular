import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';

export const routes: Routes = [{ path: 'home', component: AppComponent }, { path: 'page1', component: Page1Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
