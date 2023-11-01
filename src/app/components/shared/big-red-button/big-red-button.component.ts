import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-red-button',
  templateUrl: './big-red-button.component.html'
})
export class BigRedButtonComponent {
  @Input() bigButtonText = "";
  @Input() bigButtonLink = "";

}
