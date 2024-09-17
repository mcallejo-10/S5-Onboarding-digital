import { Component, inject } from '@angular/core';
import { EscenaComponent } from "../escena/escena.component";
import { IStep } from "../Interfaces/i-step";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

}
