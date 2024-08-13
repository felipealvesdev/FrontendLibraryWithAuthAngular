import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-login',
  standalone: true,
  imports: [],
  templateUrl: './input-login.component.html',
  styleUrl: './input-login.component.scss'
})
export class InputLoginComponent {
  @Input({required: true}) inputType: string = "text"
  @Input() placeHolder: string = "";
  @Output() valueChange = new EventEmitter<string>();

  @Input() reset: boolean = false;

  @ViewChild('inputField') inputField!: ElementRef<HTMLInputElement>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['reset'] && this.reset) {
      this.resetInputValue();
    }
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }

  resetInputValue() {
    if (this.inputField) {
      this.inputField.nativeElement.value = ''
    }
    this.valueChange.emit('');
  }


}
