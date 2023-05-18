import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputsComponent } from './components/inputs/inputs.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
    { path:'', component: InputsComponent, pathMatch: 'full'},
    { path:'tabs', component: TabsComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }