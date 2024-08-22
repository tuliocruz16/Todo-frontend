import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input('text') text: string = '';
  @Input('color') color: string = '';
  @Output('btnClicked') btnClicked = new EventEmitter();

  toggleButton(){
    this.btnClicked.emit();
  }
}
