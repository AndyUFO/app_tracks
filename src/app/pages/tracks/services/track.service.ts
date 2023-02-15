import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrackModel} from "../interface/track.interface";
import{HttpHeaders} from "@angular/common/http";
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private apiURL="http://localhost:3000/tracks";
  private apiURL_Library="http://localhost:3000/library"

  constructor(private http: HttpClient,private cartService:ShoppingCartService) { }
  getTracks():Observable<TrackModel[]>{
    return this.http.get<TrackModel[]>(this.apiURL);
  }
  getTracksLibrary():Observable<TrackModel[]>{
    return this.http.get<TrackModel[]>(this.apiURL_Library);
  }
  findTracks():Observable<TrackModel[]>{
    return this.http.get<TrackModel[]>(this.apiURL);
  }
  saveTrack(track:TrackModel):Observable<TrackModel>{
    console.log("entrando a save")

      return this.http.post<TrackModel>("http://localhost:3000/library",track);
    }

  library_findByID(id:number):Observable<TrackModel>{
    return this.http.get<TrackModel>(this.apiURL_Library+"/"+id);
  }

  library_deleteID(id:number):Observable<TrackModel>{
    return this.http.delete<TrackModel>(this.apiURL_Library+"/"+id);
  }

}