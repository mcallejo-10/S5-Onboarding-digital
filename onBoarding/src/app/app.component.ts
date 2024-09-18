import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EscenaComponent } from "./escena/escena.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, EscenaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onBoarding';
}
