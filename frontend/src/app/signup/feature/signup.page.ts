import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { TextInputComponent } from '@app/shared/ui/text-input/textinput.component';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [PageWrapperComponent, TextInputComponent,ButtonComponent,CommonModule],
  providers:[GraphicsLoaderService],
  templateUrl: './signup.page.html',
  styleUrl: './signup.page.css'
})

export class SignupPage {
  src: string;
  stage: number = 0;
  otp: string = '';

  constructor(
    private authService: AuthService, 
    private messageService: MessageService,
    private store: Store<AppState>,
    private graphicsLoaderService: GraphicsLoaderService
  ) {
    this.src = this.graphicsLoaderService.getGraphic('signupphoto');
  }

  getOTP() {
    this.otp = '123'; // Presumably, there would be more logic here.
  }

  signUpNextStage() {
    this.stage = 1;
  }
  
}
