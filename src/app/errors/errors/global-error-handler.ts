import {HttpErrorResponse} from '@angular/common/http';
import {ErrorHandler, Injectable, NgZone} from '@angular/core';
import {ErrorDialogService} from "../../shared/services/error-dialog.service.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorDialogService: ErrorDialogService,
    private zone: NgZone
  ) {
  }

  handleError(error: Error) {
    console.error(error.message);
    if (error instanceof HttpErrorResponse) {
      console.error(error);
      console.error(error.error);
      const obj = JSON.parse(JSON.stringify(error.error));

      this.zone.run(() =>
        this.errorDialogService.openDialog(
          obj.mensaje ,error.status
        )
      );
    } else {
      this.zone.run(() =>
        this.errorDialogService.openDialog(
          error.message
        )
      );
    }
    }
}
