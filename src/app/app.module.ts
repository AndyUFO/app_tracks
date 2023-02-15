import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./shared/components/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {HttpClientModule} from "@angular/common/http";
import {CartComponent} from "./shared/components/cart/cart.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatDividerModule} from "@angular/material/divider";
import { LoginModule } from './pages/login/login.module';
import {AuthGuard} from "./guards/auth.guard";
import {AuthUserGuard} from "./guards/auth-user.guard";
import {AuthAdminGuard} from "./guards/auth-admin.guard";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatDividerModule,
    LoginModule
  ],
  providers: [AuthGuard,AuthUserGuard,AuthAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
