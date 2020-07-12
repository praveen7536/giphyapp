import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataService} from '../data.service'
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit, OnDestroy {
  gifs: any[]=[];
  subsciption: Subscription

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTrending();
    this.subsciption=this.dataService.getGifs().subscribe((response:any)=>{
      this.gifs=response;
    });
  }
  ngOnDestroy(){
    this.subsciption.unsubscribe();
  }

}
