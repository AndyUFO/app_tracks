import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TrackModel} from "../../tracks/interface/track.interface";

@Component({
  selector: 'app-library-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.scss']
})
export class LibraryItemComponent implements OnInit{
  @Input() track!:TrackModel;
  @Output() addToCartClick=new EventEmitter<TrackModel>();
  @Output() onDeleteClick=new EventEmitter<TrackModel>();
  constructor() {
  }
  ngOnInit(): void {
  }

  onClick():void{
    this.addToCartClick.emit(this.track);
  }

  onDelete():void {
    console.log("click1");
    this.onDeleteClick.emit(this.track);
  }
}
