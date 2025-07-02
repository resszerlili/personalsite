import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {  RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admins',
  imports: [RouterOutlet],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})

export class AdminsComponent implements OnInit {
  
  http = inject(HttpClient);
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
