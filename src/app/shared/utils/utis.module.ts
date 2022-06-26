import { NgModule } from '@angular/core';
import { ImgHandlerDirective } from './directives/img-handler.directive';

@NgModule({
  declarations: [ImgHandlerDirective],
  exports: [ImgHandlerDirective],
})
export class UtilsModule {}
