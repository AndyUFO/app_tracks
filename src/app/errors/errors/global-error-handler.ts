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

      let errMsj !:string;

      if(error.message==undefined){
        const obj = JSON.parse(JSON.stringify(error.error));
        errMsj=obj.error+"\n"+obj.mensaje;
      }else{
        errMsj=error.message;
      }
      console.error(errMsj);

      this.zone.run(() =>
        this.errorDialogService.openDialog(
        errMsj,error.status
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
