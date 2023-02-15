import {Component, OnInit} from '@angular/core';
import {tap} from "rxjs";
import {TrackModel} from "../tracks/interface/track.interface";
import {TrackService} from "../tracks/services/track.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  tracks!:TrackModel[];
  word!: string;
  constructor(private trackService:TrackService,private shoppingCartSvc:ShoppingCartService) {
  }

  ngOnInit(): void {
    /*this.trackService.getTracks()
      .pipe(tap((tracks:TrackModel[])=>this.tracks=tracks))
      .subscribe();*/
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
