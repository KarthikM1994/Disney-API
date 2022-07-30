import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Disney {
  apiService: any;

  constructor(private http: HttpClient,) { }
  getDisney(): Observable<Disney> {
    return this.http.get('https://api.disneyapi.dev/characters').pipe(map((Disney: any) => {
      return Disney;

    }));
  }

  getDisneyById(_id: any): Observable<Disney> {
    return this.http.get(`https://api.disneyapi.dev/characters/${_id}`).pipe(map((Disney: any) => {
      return Disney;

    }));
  }
}
