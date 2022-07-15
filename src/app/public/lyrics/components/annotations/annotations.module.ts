import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotationsComponent } from './component/annotations.component';
import { UtilsModule } from '../../../../shared/utils/utis.module';

@NgModule({
  declarations: [AnnotationsComponent],
  imports: [CommonModule, UtilsModule],
  exports: [AnnotationsComponent],
})
export class AnnotationsModule {}
