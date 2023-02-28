import {Component, OnInit} from '@angular/core';
import {TrackModel} from "../tracks/interface/track.interface";
import {TrackService} from "../tracks/services/track.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {tap} from "rxjs";
import {InfoDialogService} from "../../shared/services/info-dialog.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  tracks!: TrackModel[];
  id!: number;
  total!: number;

  constructor(private trackService: TrackService, private shoppingCartSvc: ShoppingCartService, private infoDialogService: InfoDialogService) {
  }

  ngOnInit(): void {
    /* this.tracks=[]
     //this.trackService.getTracksLibrary().subscribe(track => {

     },(error: any)=>{
       //alert("Id "+this.id+" no encontrado");
     });
     /*this.trackService.getTracksLibrary()
       .pipe(tap((tracks:TrackModel[])=>this.tracks=tracks))
       .subscribe();*/
  }

  onFindByID() {
    console.log("se va a buscar el id " + this.id);
    // @ts-ignore
    if (this.id == undefined || this.id == " ") {
      throw Error("Debe ingresar un id para la busqueda");
    } else {
      this.tracks = [];
      this.trackService.library_findByID(this.id).subscribe(track => {
        this.tracks.push(track);
        //console.log('Respuesta en caso de que la solicitud retorne un estado success: ', track);
      }, (error: any) => {
        throw Error("Id " + this.id + " no encontrado en la base de datos");
      });
    }
  }

  addToCart(track: TrackModel): void {
    console.log("Add to cart ", track)
    this.shoppingCartSvc.updateCart(track);
    console.log("El carro tiene " + (this.shoppingCartSvc.tracks.length));
  }

  onClick() {
    this.trackService.getTracks()
      .pipe(tap((tracks: TrackModel[]) => this.tracks = tracks))
      .subscribe();
  }

  findAll() {
    this.trackService.getTracksLibrary()
      .pipe(tap((tracks: TrackModel[]) => this.tracks = tracks))
      .subscribe();
  }

  DeleteItem(track: TrackModel): void {
    console.log("Borrar Item ", track);
    this.trackService.library_deleteID(track.id).subscribe((response: any) => {
      console.log('Respuesta en caso de que la solicitud retorne un estado success: ', response);
    }, (error: any) => {
      //alert("Id " + this.id + " no encontrado");
    });

    this.infoDialogService.openDialog(
      "Id: " + track.id + " borrado correctamente"
    );

    this.tracks.forEach((value: TrackModel, index: number) => {
      if (value.id == track.id) this.tracks.splice(index, 1);
    });
  }
}
