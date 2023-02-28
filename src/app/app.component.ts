import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app_tracks';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //todo cambiar a false para presentacion
    localStorage.setItem("isValid","true");
  }
}
