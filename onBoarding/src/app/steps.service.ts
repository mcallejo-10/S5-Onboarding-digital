import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  step = [
    `<h3>Dedica moltes hores</h3>
    Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.`, 
    
   `<br><br>`,
    
    `<h3>Programa projectes propis:</h3> 
    Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.`,
    
    `<br><br>`,
    
    `<h3>Procura descansar:</h3> 
    Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.`

  ]
  constructor() { }
}
