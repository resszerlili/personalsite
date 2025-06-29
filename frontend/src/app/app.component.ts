import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  http = inject(HttpClient);
  title = 'Lili Resszer';
  users: any;

  // TODO: REMOVE HARDCODES INTO CONFIG
  ngOnInit(): void {
    this.http.get('https://localhost:5001/admin/adminusers').subscribe({
      next: response => this.users = response,
      error: error => console.error(error),
      complete: () => console.log("Request completed")
    })
  }
}
