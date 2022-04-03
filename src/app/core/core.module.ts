import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VIEWS} from "./views";


@NgModule({
  declarations: [
    ...VIEWS,
  ],
  exports: [
    ...VIEWS,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
