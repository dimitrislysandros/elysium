import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  

    music=
    [
      {
        genre:'POP',
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/x3PoCJXWsTs?si=mWeFQolusJXEVWtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  
      }
    ];
  // public albums:Album[]=[];

constructor(private http: HttpClient) { 

}



getData(url: string): Observable<any> {
    return this.http.get<any>(url);
}


 


  getMusic() {
        return this.music;
   
  }

}
