import { Component } from '@angular/core';
import { NgbCollapse, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bio',
   standalone: true,     
  imports: [NgbCollapse, NgbTooltip],
  providers: [Clipboard],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {

	public isCollapsed = false;


}
