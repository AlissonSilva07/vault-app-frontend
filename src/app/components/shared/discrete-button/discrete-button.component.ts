import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discrete-button',
  templateUrl: './discrete-button.component.html',
})
export class DiscreteButtonComponent {
  @Input() discreteButtonText = '';
  @Input() discreteButtonLink = '';
}
