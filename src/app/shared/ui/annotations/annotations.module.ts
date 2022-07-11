import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationsComponent } from './component/annotations.component';

@NgModule({
  declarations: [AnnotationsComponent],
  imports: [CommonModule],
  exports: [AnnotationsComponent],
})
export class AnnotationsModule {}
