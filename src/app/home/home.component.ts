import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from "../escena/escena.component";
import { StepsService } from '../steps.service';
import { iStep } from "../Interfaces/i-step";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  steps: iStep[] = [];
  constructor(private stepsService: StepsService) {};
  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();      
  }
 
}
