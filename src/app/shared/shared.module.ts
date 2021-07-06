import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [MyMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
