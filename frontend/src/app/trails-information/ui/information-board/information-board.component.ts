import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information-board',
  standalone: true,
  imports: [],
  templateUrl: './information-board.component.html',
  styleUrl: './information-board.component.css'
})

export class InformationBoardComponent {
  @Input() content:string= '';
  @Input() sectionHeader:string = ''
}
