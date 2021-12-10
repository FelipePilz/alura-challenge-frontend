import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-outlined',
  templateUrl: './button-outlined.component.html',
  styleUrls: ['./button-outlined.component.scss'],
})
export class ButtonOutlinedComponent {
  @Input() mensagem = '';
}
