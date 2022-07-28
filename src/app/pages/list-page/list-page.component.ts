import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service/service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  
  pageNo:number=1;
  data: any;
  searchkey:string='';

  constructor(
    private router:Router,
    private http:HttpClient,
    private user: ServiceService
  ) {
    
   }

  ngOnInit(): void {
    this.user.getData('',this.pageNo).subscribe((data : any) => {
      console.warn(data);
      this.data=data?.Search;
    })
  }
  onImageSearch(value:any){
    this.searchkey = value;

    this.user.getData(this.searchkey,this.pageNo).subscribe((data:any)=>{
      this.data=data?.Search;
    })
  }


  setNextPage(){
    console.log("pageNo:",this.pageNo);
    this.pageNo = this.pageNo + 1;
    this.user.getData(this.searchkey,this.pageNo).subscribe((data:any)=>{
      this.data=data?.Search;
    })
  }
  setPrevPage(){
    console.log(this.pageNo);
    this.pageNo = this.pageNo - 1;
    this.user.getData(this.searchkey,this.pageNo).subscribe((data:any)=>{
      this.data=data?.Search;
    })
  }
  onScroll(){
    this.pageNo = this.pageNo + 1;
    const prevdata = [...this.data];
    this.user.getData(this.searchkey,this.pageNo).subscribe((data:any)=>{
      this.data = prevdata.concat(data?.Search);
      console.log("data",this.data);
    })
    console.log(this.pageNo);
  }
}
