import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LanguageTranslatePipe} from "./language-translate.pipe";


@NgModule({
  declarations: [
    LanguageTranslatePipe],
  imports: [
    CommonModule,
  ],
  exports: [
    LanguageTranslatePipe]
})
export class PipesModule {
}
