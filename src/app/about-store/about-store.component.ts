import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-store',
  templateUrl: './about-store.component.html',
  styleUrls: ['./about-store.component.css']
})
export class AboutStoreComponent implements OnInit {

  constructor(private route:Router){}

  ngOnInit(): void {
  }
  back(){
    this.route.navigate(['/welcomepage'])
  }
}
