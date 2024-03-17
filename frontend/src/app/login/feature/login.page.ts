import { Component } from '@angular/core';
import { TextInputComponent } from '@app/shared/ui/text-input/textinput.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { ButtonModule } from 'primeng/button';
import { ToastComponent } from '@app/shared/ui/toast/toast.component';
import { ToastModule } from 'primeng/toast';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { Login } from '@app/shared/feature/state/auth-state/auth-state.actions';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { ToastService } from '@app/shared/data-access/toast/toast.service';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { SidebarComponent } from '@app/shared/ui/sidebar/sidebar.component';
import { IconButtonComponent } from '@app/shared/ui/icon-button/icon-button.component';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PageWrapperComponent, TextInputComponent,CommonModule, ButtonComponent, ButtonModule,SidebarComponent, IconButtonComponent,AsyncPipe],
  providers:[GraphicsLoaderService],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})

export class LoginPage {
  src:string;
  
  constructor(
    private authservice: AuthService, 
    private messageService:MessageService, 
    private store:Store<AppState>,
    private graphicsLoaderService:GraphicsLoaderService
  ){
    this.src = this.graphicsLoaderService.getGraphic('mbs')
  }

  login(){
    this.store.dispatch(Login())
  }
  
}
