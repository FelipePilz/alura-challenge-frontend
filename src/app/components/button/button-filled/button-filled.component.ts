import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-filled',
  templateUrl: './button-filled.component.html',
  styleUrls: ['./button-filled.component.scss'],
})
export class ButtonFilledComponent {
  @Input() mensagem: string = '';
}
