import {Component, OnInit} from '@angular/core';
import {TrackModel} from "../tracks/interface/track.interface";
import {TrackService} from "../tracks/services/track.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit{
  tracks!:TrackModel[];
  id!: number;
  total!: number;
  constructor(private trackService:TrackService,private shoppingCartSvc:ShoppingCartService) {
  }

  ngOnInit(): void {
    this.tracks=[]
    this.trackService.getTracksLibrary().subscribe(track => {

    },(error: any)=>{
      //alert("Id "+this.id+" no encontrado");
    });
    /*this.trackService.getTracksLibrary()
      .pipe(tap((tracks:TrackModel[])=>this.tracks=tracks))
      .subscribe();*/
  }

  onFindByID() {
      console.log("se va a buscar el id "+this.id);
      this.tracks=[];
      this.trackService.library_findByID(this.id).subscribe(track => {
        if(track==null){
          alert("No existe");
        }else {
          this.tracks.push(track);
        }

      console.log('Respuesta en caso de que la solicitud retorne un estado success: ', track);
    },(error: any)=>{
        alert("Id "+this.id+" no encontrado");
      });
  }

  addToCart(track:TrackModel):void {
    console.log("Add to cart ",track)
    this.shoppingCartSvc.updateCart(track);
    console.log("El carro tiene "+(this.shoppingCartSvc.tracks.length));
  }

  onClick() {
    this.trackService.getTracks()
      .pipe(tap((tracks:TrackModel[])=>this.tracks=tracks))
      .subscribe();
  }

  findAll() {
    this.trackService.getTracksLibrary()
      .pipe(tap((tracks:TrackModel[])=>this.tracks=tracks))
      .subscribe();
  }

  DeleteItem(track:TrackModel):void {
    console.log("Borrar Item ",track)
    this.tracks=[];
    this.trackService.library_deleteID(this.id).subscribe(track => {
      console.log('Respuesta en caso de que la solicitud retorne un estado success: ', track);
    },(error: any)=>{
      alert("Id "+this.id+" no encontrado");
    });
  }
}
