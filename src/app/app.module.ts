import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FontSizeEditorComponent} from './component/font-size-editor/module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FontSizeEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FontSizeEditorComponent]
})
export class AppModule {
}
