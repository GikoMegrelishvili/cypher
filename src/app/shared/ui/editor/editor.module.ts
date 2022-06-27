import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './component/editor.component';

@NgModule({
  declarations: [EditorComponent],
  imports: [CommonModule],
  exports: [EditorComponent],
})
export class EditorModule {}
