import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {TrackModel} from "../../pages/tracks/interface/track.interface";
@Injectable(
  {providedIn: "root"}
)
export class ShoppingCartService{
  tracks:TrackModel[]=[];

  private cartSubject = new Subject<TrackModel[]>();
  private totalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();

  get totalActions$(): Observable<number>{
    return this.totalSubject.asObservable();
  }

  get quantityActions$(): Observable<number>{
    return this.quantitySubject.asObservable();
  }

  get cartActions$(): Observable<TrackModel[]>{
    return this.cartSubject.asObservable();
  }
  updateCart(track:TrackModel):void{
    this.addToCart(track);
    this.quantityTracks();
    this.calcTotal();

  }

  emptyCart():void{
    this.tracks=[];
    this.quantityTracks();
    this.calcTotal();

  }
  private addToCart(track:TrackModel):void{
    this.tracks.push(track);
    this.cartSubject.next(this.tracks);
  }
  private quantityTracks():void{
    const quantity = this.tracks.length;
    this.quantitySubject.next(quantity);

  }
  private calcTotal():void{
    const total = this.tracks.reduce((acc,prod)=>acc+=prod.duration_ms,0);
    this.totalSubject.next(total);
  }



}
