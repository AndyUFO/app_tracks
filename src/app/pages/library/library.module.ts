import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { LibraryItemComponent } from './library-item/library-item.component';
import {MaterialModule} from "../../material.module";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TracksModule} from "../tracks/tracks.module";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    LibraryComponent,
    LibraryItemComponent
  ],
  exports: [
    LibraryItemComponent
  ],
    imports: [
        CommonModule,
        CommonModule,
        LibraryRoutingModule,
        MaterialModule,
        FormsModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatInputModule,
        TracksModule,
        MatListModule
    ]
})
export class LibraryModule { }
