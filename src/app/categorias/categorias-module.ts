import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { CategoriasRoutingModule } from './categorias-routing-module';
import { CategoriaComponent } from './categoria/categoria';

@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule {}
