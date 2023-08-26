import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }


  baseurl:string="https://api.themoviedb.org/3";

  apiKey:string="1a68f7f99904f08890ab7da4c097f687"

  //bannerapidata

  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}`);
  }
  
}
