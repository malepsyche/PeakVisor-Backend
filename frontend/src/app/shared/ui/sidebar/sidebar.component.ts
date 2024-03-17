import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { SelectAuthenticated } from '@app/shared/feature/state/auth-state/auth-state.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { Store } from '@ngrx/store';
import { AppState } from '@app/shared/feature/state/app-state/app.state';

import { ButtonComponent } from '../button/button.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonComponent, IconButtonComponent, AsyncPipe, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  @Input() sidebarVisible = false;
  authState$:Observable<boolean>;

  constructor(public messageService:MessageService, public store:Store<AppState>){
    this.authState$ = this.store.select(SelectAuthenticated)
  }

  
}
