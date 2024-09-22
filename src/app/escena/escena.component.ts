import { Component, Input, OnInit } from '@angular/core';
import { iStep } from '../Interfaces/i-step';
import { HomeComponent } from "../home/home.component";
import { StepsService } from '../steps.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})


export class EscenaComponent {
  @Input() steps!:iStep[]; 

  currentStep: number = 0;

  getCurrentStep() {
    return this.currentStep;
  }
}
