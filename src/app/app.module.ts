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
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';
import { LoadingDialogComponent } from './shared/components/loading-dialog/loading-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ErrorsModule } from './errors/errors.module';
import { InfoDialogComponent } from './shared/components/info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    FooterComponent,
    ErrorDialogComponent,
    LoadingDialogComponent,
    InfoDialogComponent
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
    LoginModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ErrorsModule
  ],
  providers: [AuthGuard,AuthUserGuard,AuthAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
