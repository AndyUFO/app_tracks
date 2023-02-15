import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInterface} from "../interfaces/product.interface";
import {TrackModel} from "../../tracks/interface/track.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  @Input() track!:TrackModel;
  @Output() addToCartClick=new EventEmitter<TrackModel>();
  constructor() {
  }
  ngOnInit(): void {
  }

  onClick():void{
    this.addToCartClick.emit(this.track);
  }

}
