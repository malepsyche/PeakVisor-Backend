import { Component, Input } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';                                
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Observable } from 'rxjs';
import { ButtonComponent } from '../button/button.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-page-wrapper',
  standalone: true,
  imports: [ButtonComponent, SidebarComponent, HeaderComponent, AsyncPipe, CommonModule],
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.css'
})

export class PageWrapperComponent {

  sidebarVisible:boolean = false;

  toggleSidebarVisible(){
    this.sidebarVisible = !this.sidebarVisible
  }

}
