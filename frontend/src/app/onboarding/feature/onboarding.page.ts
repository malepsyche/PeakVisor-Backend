import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { NgModel } from '@angular/forms';
import { OnboardingcontentdisplayComponent } from '../ui/onboardingcontentdisplay/onboardingcontentdisplay.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [PageWrapperComponent, ButtonComponent,OnboardingcontentdisplayComponent],
  templateUrl: './onboarding.page.html',
  styleUrl: './onboarding.page.css'
})

export class OnboardingPage {
  
  stage= 0;
  
  nextStage(){
    this.stage+=1;
    this.stage = this.stage%3;
    
  }

  previousStage(){
    this.stage-=1;
    this.stage = this.stage%3;
  }

}
