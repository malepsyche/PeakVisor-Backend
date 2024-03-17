import { Component } from '@angular/core';
import { HeroComponent } from '@app/shared/ui/hero/hero.component';
import { PhotoBackgroundComponent } from '@app/shared/ui/photo-background/photo-background.component';
import { InformationBoardComponent } from '../ui/information-board/information-board.component';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-trails-information',
  standalone: true,
  imports: [PageWrapperComponent, HeroComponent, PhotoBackgroundComponent, InformationBoardComponent],
  templateUrl: './trails-information.page.html',
  styleUrl: './trails-information.page.css'
})

export class TrailsInformationPage {
  src:string = ''

}
