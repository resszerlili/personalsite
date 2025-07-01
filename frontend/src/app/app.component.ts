import { Component, OnInit } from '@angular/core';
import { AdminsComponent } from './admins/admins.component';
import { AdminsNavComponent } from './admins-nav/admins-nav.component';

@Component({
  selector: 'app-root',
  imports: [AdminsComponent,AdminsNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  

  ngOnInit(): void {
 
  }
}
