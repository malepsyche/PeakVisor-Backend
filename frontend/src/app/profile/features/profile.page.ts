import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { ProfilestatsComponent } from '@app/profile/ui/profilestats/profilestats.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { GridsectionComponent } from '@app/shared/ui/gridsection/gridsection.component';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';

import { StravaAuthService } from '@app/services/strava/strava-auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    PageWrapperComponent, 
    ButtonComponent, 
    GridsectionComponent, 
    ProfilestatsComponent,
  ],
  templateUrl: './profile.page.html',
  styleUrl: './profile.page.css'
})

export class ProfilePage {

  content = [{name:'June 10 Hike'},{name:'June 20 Hike'},{name:'June 30 Hike'},]
  
  constructor(
    private stravaAuthService: StravaAuthService,
    private location: Location,
  ){

  }
  
  requestStravaAuth(): void {
    const currentUrl: string = window.location.href;
    this.stravaAuthService.redirectToStravaAuth(currentUrl);
  }

}
