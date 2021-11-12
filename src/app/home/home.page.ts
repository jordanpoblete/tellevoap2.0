import { Component, AfterViewInit} from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 

  constructor(private animationCtrl:AnimationController) {}

  ngAfterViewInit(){
  const animation = this.animationCtrl
  .create()
  .addElement(document.querySelector('.ruedaa'))
  .duration(1500)
  .iterations(1)
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.1) rotate(90deg)' },
    { offset: 1, transform: 'scale(1) rotate(180deg)' }
  ]);

  animation.play()
  


}
}