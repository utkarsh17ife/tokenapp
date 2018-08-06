import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router'

@Component({
  selector: 'app-adminvalidate',
  templateUrl: './adminvalidate.component.html',
  styleUrls: ['./adminvalidate.component.css']
})
export class AdminvalidateComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  goBack(){
    this.route.navigate(['/login'])
  }

}
