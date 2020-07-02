import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'template.html',
  styleUrls: ['style.css']
})
export class FontSizeEditorComponent {
  fontSize = 14;

  onChange(value): void {
    this.fontSize = value;
  }
}
