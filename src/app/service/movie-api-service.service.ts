import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://api.themoviedb.org/3';

  apiKey: string = '1a68f7f99904f08890ab7da4c097f687';

  //bannerapidata

  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`
    );
  }

  //trendingmovieapidata
  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`
    );
  }

  //searchmovie
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`
    );
  }

  //getMovieDetails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`
    );
  }

  //getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`
    );
  }
  //getMovieCast

  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`
    );
  }

  //fetch ActionMovies
  fetchActionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`
    );
  }

  //fetch AdventureMovies
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`
    );
  }

  //fetch animation Movies
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=16`
    );
  }
  //fetch comedy Movies
  fetchComedyMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=35`
    );
  }
  //fetch  documentary Movies
  fetchDocumentedMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=99`
    );
  }
  //fetch science-fiction Movies
  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=878`
    );
  }
  //fetch thriller Movies
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=53`
    );
  }
}
