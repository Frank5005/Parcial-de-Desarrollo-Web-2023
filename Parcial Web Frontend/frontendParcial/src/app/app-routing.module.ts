import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ListarComponent } from './listar/listar.component';


const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'insertar', component: InsertarComponent },
    { path: 'listar', component: ListarComponent },
    

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
