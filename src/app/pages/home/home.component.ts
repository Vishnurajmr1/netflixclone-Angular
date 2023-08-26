import { Component,OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:MovieApiServiceService){ }

  bannerResult:Movie[]=[];
  ngOnInit(): void { 
    this.bannerData();
  }

  // bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((result:{results:Movie[]})=>{
      console.log(result);
      this.bannerResult=result.results;
    })
  }

}
