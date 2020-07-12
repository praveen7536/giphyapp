import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gif = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {

  }
  getTrending() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=%${environment.giphyapi}&limit=52`).subscribe((Response: any) => {
      this.gif.next(Response.data);
    });

  }
  search(gifName: string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}api._key=%${environment.giphyapi}&limit=50`).subscribe((Response: any) => {
      this.gif.next(Response.data);
    });
  }
  getGifs(){
    return this.gif.asObservable();
  }
}
