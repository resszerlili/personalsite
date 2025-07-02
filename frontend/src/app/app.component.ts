import { Component, OnInit } from '@angular/core';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@Component({
  selector: 'app-root',
  imports: [AdminPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  

  ngOnInit(): void {
 
  }
}
