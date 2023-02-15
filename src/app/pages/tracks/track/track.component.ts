import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TrackModel} from "../interface/track.interface";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit{
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
