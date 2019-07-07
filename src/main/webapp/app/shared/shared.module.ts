import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OdSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [OdSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [OdSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OdSharedModule {
  static forRoot() {
    return {
      ngModule: OdSharedModule
    };
  }
}
