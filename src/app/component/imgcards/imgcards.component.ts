import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service/service.service'; 


@Component({
  selector: 'app-imgcards',
  templateUrl: './imgcards.component.html',
  styleUrls: ['./imgcards.component.css']
})
export class ImgcardsComponent implements OnInit {

  data: any;
  @Input()
  imgUrl?:string='';
  @Input()
  imgTitle?:string='';

  constructor(
  ) { }

  ngOnInit(): void {

  }

}
