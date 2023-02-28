import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TrackModel} from "../../tracks/interface/track.interface";

@Component({
  selector: 'app-library-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.scss']
})
export class LibraryItemComponent implements OnInit{
  @Input() track!:TrackModel;
  @Output() onDeleteClick=new EventEmitter<TrackModel>();
  constructor() {
  }
  ngOnInit(): void {
  }

  onDelete():void {
    console.log("click on delete");
    this.onDeleteClick.emit(this.track);
  }
}
