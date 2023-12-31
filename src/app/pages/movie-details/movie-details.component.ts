import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/movie';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}
  movieDetails: any = [];
  movieVideoResult: any = [];
  movieCastDetails: any = [];
  ngOnInit(): void {
    let paramId: string = this.router.snapshot.paramMap.get('id')!;
    this.getMovieDetails(paramId);
    this.getVideo(paramId);
    this.getMovieCast(paramId);
  }

  getMovieDetails(id: string) {
    this.service.getMovieDetails(id).subscribe((result): void => {
      console.log(result, 'getmoviedetatils#');
      this.movieDetails = result;
    });
  }

  getVideo(id: string) {
    this.service.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer' || element.type == 'Teaser') {
          this.movieVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id: string) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.movieCastDetails = result.cast;
    });
  }
}
