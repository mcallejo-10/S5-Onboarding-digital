import { Component, Input, NgModule } from '@angular/core';
import { iStep } from '../Interfaces/i-step';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})


export class EscenaComponent {
  @Input() steps!:iStep[]; 

  currentStep: number = 0;
  animation: string = ''

  getCurrentStep() {
    return this.currentStep;
  }

  changeStep(nextOrPrevious: number) {
    this.animation = nextOrPrevious === 0
    ? 'fade-in-previous'
    : 'fade-in-next'
    let step = nextOrPrevious === 0
    ? this.currentStep-- 
    : this.currentStep++;    
  }
  goToStep(step: number) {
    this.animation = 'fade-in'
    this.currentStep = step;
  }
}


