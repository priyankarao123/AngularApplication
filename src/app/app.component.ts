import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular1';
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
      
  }
 
  showToaster(){
      this.toastr.success("Hello, I'm the toastr message.")
  }
 

}


