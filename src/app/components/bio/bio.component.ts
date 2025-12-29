import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bio',
   standalone: true,     
  imports: [NgbCollapse],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {

	public isCollapsed = false;
}
