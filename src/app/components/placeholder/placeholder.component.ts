import { Component } from '@angular/core';
import { BioComponent } from "../bio/bio.component";
import { MusicComponent } from "../music/music.component";
import { MusicWholeComponent } from "../music-whole/music-whole.component";

@Component({
  selector: 'app-placeholder',
  standalone: true,  
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
  imports: [BioComponent, MusicComponent, MusicWholeComponent]
})
export class PlaceholderComponent {

}
