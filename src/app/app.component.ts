import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { MusicComponent } from './components/music/music.component';
import { BioComponent } from './components/bio/bio.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MusicWholeComponent } from './components/music-whole/music-whole.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PlaceholderComponent,
    MusicComponent,
    BioComponent,
    NavbarComponent,
    MusicWholeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elysium';
}
