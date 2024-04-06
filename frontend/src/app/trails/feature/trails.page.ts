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
import { GoogleMapComponent } from '@app/shared/ui/google-map/google-map.component';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-trails',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    PageWrapperComponent, 
    VideoComponent, 
    PhotoCardComponent,
    VideoBackground,HeroComponent,
    GridsectionComponent,
    ButtongroupComponent,
    GoogleMapComponent
  ],
  providers:[
    GraphicsLoaderService, 
    AuthService,
    MessageService],
  templateUrl: './trails.page.html',
  styleUrl: './trails.page.css'
})

export class TrailsPage {

  src: string;
  authState$:Observable<boolean>;
  content: {name: string; routerLink: string }[];
  trails: {title: string, lat: number, lng: number, mapId: string}[];

  constructor(
    private authservice: AuthService, 
    private messageService: MessageService,
    private store:Store<AppState>,
    private graphicsLoaderService:GraphicsLoaderService
  ){
    this.src = this.graphicsLoaderService.getGraphic('trailspagevideo');
    this.authState$ = this.store.select(SelectAuthenticated);
    this.content = [
      {name:'MacRitchie',routerLink:'/trailinfo'},
      {name:'East Coast Park',routerLink:'/trailinfo'},
      {name:'Botanic Gardens',routerLink:'/trailinfo'},
      {name:'Chinese Garden',routerLink:'/trailinfo'}
    ];
    this.trails = [
      { title: 'New York', lat: 40.7128, lng: -74.0060, mapId:'1' }, 
      { title: 'Los Angeles', lat: 34.0522, lng: -118.2437, mapId:'2' }, 
      { title: 'London', lat: 51.5074, lng: -0.1278, mapId:'3' },   
    ];
  }

}
