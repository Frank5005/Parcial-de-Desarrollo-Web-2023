import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertarComponent } from './insertar/insertar.component';
import { ListarComponent } from './listar/listar.component';

@NgModule({
    declarations: [
      AppComponent,
      InsertarComponent,
      ListarComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  