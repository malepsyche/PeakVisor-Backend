import { Component } from '@angular/core';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { SettingsInputComponent } from '@app/shared/ui/settings-input/settings-input.component';
import { DeletesectionComponent } from '../ui/deletesection/deletesection.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [PageWrapperComponent, SettingsInputComponent,DeletesectionComponent],
  templateUrl: './settings.page.html',
  styleUrl: './settings.page.css'
})

export class SettingsPage {

}
