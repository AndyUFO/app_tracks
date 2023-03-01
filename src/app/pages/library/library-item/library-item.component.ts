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
  @Output() onSaveClick=new EventEmitter<TrackModel>();
  descripcion!: string;
  isDisabledText!: boolean;
  isDisabledEdit!: boolean;
  isDisabledSave!: boolean;
  constructor() {

  }
  ngOnInit(): void {
    this.isDisabledText=true;
    this.isDisabledEdit=false;
    this.isDisabledSave=true;
    this.descripcion=this.track.description;
  }

  onDelete():void {
    console.log("click on delete");
    this.onDeleteClick.emit(this.track);
  }

  onEdit() {
    console.log("click on edit");
    console.log("El valor de la descripcion es :"+this.descripcion);
    this.isDisabledText=false;
    this.isDisabledSave=false
    this.isDisabledEdit=true;
  }


  onSave() {
    console.log("click on save");
    console.log("El valor de la descripcion es :"+this.descripcion);
    this.track.description=this.descripcion;
    this.onSaveClick.emit(this.track);
    this.isDisabledText=true;
    this.isDisabledEdit=false;
    this.isDisabledSave=true;
  }
}
