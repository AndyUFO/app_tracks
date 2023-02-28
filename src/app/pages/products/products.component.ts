import {Component, OnChanges, OnInit} from '@angular/core';
import {tap} from "rxjs";
import {TrackModel} from "../tracks/interface/track.interface";
import {TrackService} from "../tracks/services/track.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  tracks!:TrackModel[];
  word!: string;
  cantidad!: number;
  textFormControl= new FormControl("",Validators.required);
  selectFormControl= new FormControl("",Validators.required);
  constructor(private trackService:TrackService,private shoppingCartSvc:ShoppingCartService) {
  }

  ngOnInit(): void {

  }

  addToCart(track:TrackModel):void {
    console.log("Add to cart ",track)
    this.shoppingCartSvc.updateCart(track);
    console.log("El carro tiene "+(this.shoppingCartSvc.tracks.length));
  }

  onClick() {
    console.log("word :'"+this.word+"'");
    if(this.word==undefined || this.word==""){
      console.log("word is undefined")
      throw Error("Debe ingresar una palabra de busqueda");
    }else if(this.cantidad==undefined){
      throw Error("Debe ingresar un limite de busqueda");
    }else{
      this.trackService.getTracksByWord(this.word,this.cantidad)
        .pipe(tap((tracks:TrackModel[])=>this.tracks=tracks))
        .subscribe();
    }

  }

  onAddTrack() {
    console.log("Agregando a biblioteca")
    let correcto:boolean=false;
    for (let i = 0; i < this.shoppingCartSvc.tracks.length; i++) {
      console.log(this.shoppingCartSvc.tracks.at(i));
      // @ts-ignore
      this.trackService.saveTrack(this.shoppingCartSvc.tracks.at(i)).subscribe(respuesta => {
        console.log('Respuesta en caso de que la solicitud retorne un estado success: ', respuesta);
      });
    }
    alert("Se agregaron "+this.shoppingCartSvc.tracks.length+" tracks");
    this.shoppingCartSvc.emptyCart();
  }
}
