import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import {MaterialModule} from "../../material.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LibraryModule} from "../library/library.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    LibraryModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
