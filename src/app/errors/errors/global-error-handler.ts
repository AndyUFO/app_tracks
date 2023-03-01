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
    console.error(error);
    if (error instanceof HttpErrorResponse) {
      console.error(JSON.stringify(error.error));
      let errMsj !:string;

      if(error.status==403){
        errMsj="Error de permisos en la API";
      }else if(JSON.parse(JSON.stringify(error.error)).mensaje==undefined){
        errMsj=error.message;
      }else{
        errMsj=JSON.parse(JSON.stringify(error.error)).mensaje;
      }
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
