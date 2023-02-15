import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksComponent } from './tracks.component';
import { TrackComponent } from './track/track.component';
import {MatCardModule} from "@angular/material/card";
import {MaterialModule} from "../../material.module";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {LibraryRoutingModule} from "../library/library-routing.module";


@NgModule({
  declarations: [
    TracksComponent,
    TrackComponent
  ],
  exports: [
    TrackComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    CommonModule,
    TracksRoutingModule,
    MaterialModule,
    FormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TracksModule { }
