import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutComponent } from './logout.component';


@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    LogoutRoutingModule
  ]
})
export class LogoutModule implements OnInit{
  ngOnInit(): void {
    localStorage.clear();
  } }
