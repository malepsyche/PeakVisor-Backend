import { Component } from '@angular/core';
import { VideoComponent } from '@app/shared/ui/video/video.component';
import { PhotoCardComponent } from '@app/shared/ui/photo-card/photo-card.component';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { MessageService } from 'primeng/api';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Observable } from 'rxjs';
import { SelectAuthenticated } from '@app/shared/feature/state/auth-state/auth-state.selector';
import { Store } from '@ngrx/store';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { VideoBackground } from '@app/shared/ui/video-background/video-background.component';
import { HeroComponent } from '@app/shared/ui/hero/hero.component';
import { GridsectionComponent } from '@app/shared/ui/gridsection/gridsection.component';
import { ButtongroupComponent } from '../ui/buttongroup/buttongroup.component';

@Component({
  selector: 'app-trails',
  standalone: true,
  imports: [PageWrapperComponent, VideoComponent, PhotoCardComponent,VideoBackground,HeroComponent,GridsectionComponent,ButtongroupComponent],
  providers:[GraphicsLoaderService, AuthService,MessageService],
  templateUrl: './trails.page.html',
  styleUrl: './trails.page.css'
})

export class TrailsPage {

  src:string;
  content = [{name:'MacRitchie',routerLink:'/trailinfo'},{name:'East Coast Park',routerLink:'/trailinfo'},{name:'Botanic Gardens',routerLink:'/trailinfo'},{name:'Chinese Garden',routerLink:'/trailinfo'}]
  authState$:Observable<boolean>;

  constructor(
    private authservice: AuthService, 
    private messageService: MessageService,
    private store:Store<AppState>,
    private graphicsLoaderService:GraphicsLoaderService
  ){
    this.authState$ = this.store.select(SelectAuthenticated)
    this.src = this.graphicsLoaderService.getGraphic('trailspagevideo')
  }

}
