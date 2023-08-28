import { Component } from '@angular/core';
import { Movie } from 'src/app/interface/movie';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: MovieApiServiceService) { }

  bannerResult: Movie[] = [];
  trendingMovies: Movie[] = [];
  actionMovies: Movie[] = [];
  adventureMovies: Movie[] = [];
  animationMovies: Movie[] = [];
  documentedMovies: Movie[] = [];
  scienceFictionMovies: Movie[] = [];
  comedyMovies: Movie[] = [];
  thrillerMovies: Movie[] = [];

  ngOnInit(): void {
    this.bannerData();

    this.trendingMovieData();

    this.actionMoviesData();

    this.adventureMoviesData();

    this.animationMoviesData();

    this.comedyMoviesData();

    this.documenatedMoviesData();

    this.scienceFictionMoviesData();

    this.thrillerMoviesData();
  }

  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result): void => {
      console.log(result);
      
      this.bannerResult = result.results;
    });
  }

  //trendingmoviedata

  trendingMovieData() {
    this.service
      .trendingMovieApiData()
      .subscribe((result: { results: Movie[] }) => {
        this.trendingMovies = result.results;
      });
  }

  //action Movies Data
  actionMoviesData(){
    this.service.fetchActionMovies().subscribe((result:{results:Movie[]})=>{
      this.actionMovies=result.results
    })
  }
  //thriller Movies Data
  thrillerMoviesData(){
    this.service.fetchThrillerMovies().subscribe((result:{results:Movie[]})=>{
      this.thrillerMovies=result.results
    })
  }
  //adventure Movies Data
  adventureMoviesData(){
    this.service.fetchAdventureMovies().subscribe((result:{results:Movie[]})=>{
      this.adventureMovies=result.results
    })
  }
  //comedy Movies Data
  comedyMoviesData(){
    this.service.fetchComedyMovies().subscribe((result:{results:Movie[]})=>{
      this.comedyMovies=result.results
    })
  }
  //animation Movies Data
  animationMoviesData(){
    this.service.fetchAnimationMovies().subscribe((result:{results:Movie[]})=>{
      this.animationMovies=result.results
    })
  }
  //documented Movies Data
  documenatedMoviesData(){
    this.service.fetchDocumentedMovies().subscribe((result:{results:Movie[]})=>{
      this.documentedMovies=result.results
    })
  }
  //science-fiction Movies Data
  scienceFictionMoviesData(){
    this.service.fetchScienceFictionMovies().subscribe((result:{results:Movie[]})=>{
      this.scienceFictionMovies=result.results
    })
  }
}
