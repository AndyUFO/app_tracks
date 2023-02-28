import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../components/error-dialog/error-dialog.component";
import {InfoDialogComponent} from "../components/info-dialog/info-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class InfoDialogService {
  private opened = false;

  constructor(private dialog: MatDialog) {}

  openDialog(message: string): void {
    if (!this.opened) {
      this.opened = true;
      const dialogRef = this.dialog.open(InfoDialogComponent, {
        data: { message },
        maxHeight: '100%',
        width: '540px',
        maxWidth: '100%',
        disableClose: true,
        hasBackdrop: true,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.opened = false;
      });
    }
  }
}
