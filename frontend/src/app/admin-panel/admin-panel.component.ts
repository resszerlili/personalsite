import { Component } from '@angular/core';
import { AdminsComponent } from '../admins/admins.component';
import { AdminsNavComponent } from '../admins-nav/admins-nav.component';

@Component({
  selector: 'app-admin-panel',
  imports: [AdminsNavComponent,AdminsComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

}
