import { Component, Output, EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'hn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() darkModeChange = new EventEmitter<boolean>();

  changeHandler(event: MatSlideToggleChange) {
    this.darkModeChange.emit(event.checked);
  }
}
