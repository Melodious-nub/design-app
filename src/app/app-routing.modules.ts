import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputsComponent } from './components/inputs/inputs.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ModalsComponent } from './components/modals/modals.component';

const routes: Routes = [
    { path:'', component: InputsComponent, pathMatch: 'full'},
    { path:'excel', component: TabsComponent},
    { path:'buttons', component: ButtonsComponent},
    { path:'modals', component: ModalsComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }