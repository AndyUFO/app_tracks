import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@NgModule({
  exports:[MatToolbarModule
    ,MatCardModule
    ,MatButtonModule
    ,MatIconModule
  ]
})

export class MaterialModule{}
