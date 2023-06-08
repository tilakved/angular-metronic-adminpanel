import {Pipe, PipeTransform} from '@angular/core';
// @ts-ignore
import *  as enData from "../../../assets/i18n/en.json";
// @ts-ignore
import *  as spainData from "../../../assets/i18n/spanish.json";
// @ts-ignore
import *  as frenchData from "../../../assets/i18n/french.json";
// @ts-ignore
import *  as japanData from "../../../assets/i18n/japanese.json";
// @ts-ignore
import *  as germanData from "../../../assets/i18n/german.json";


@Pipe({
  name: 'languageTranslate'
})
export class LanguageTranslatePipe implements PipeTransform {
  en: any = (enData as any).default;
  spain: any = (spainData as any).default;
  french: any = (frenchData as any).default;
  japan: any = (japanData as any).default;
  german: any = (germanData as any).default;

  transform(value: string, language: string = 'en') {
    if (language == 'en') {
      return this.en[value] ? this.en[value] : this.humanize(value);
    }
    if (language == 'spain') {
      return this.spain[value] ? this.spain[value] : this.humanize(value);
    }
    if (language == 'french') {
      return this.french[value] ? this.french[value] : this.humanize(value);
    }
    if (language == 'japan') {
      return this.japan[value] ? this.japan[value] : this.humanize(value);
    }
    if (language == 'german') {
      return this.german[value] ? this.german[value] : this.humanize(value);
    }
  }

  humanize(str: any) {
    if (str && typeof str == 'string') {
      // eslint-disable-next-line prefer-const
      let i, frags = str.split('_');
      for (i = 0; i < frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
      }
      return frags.join(' ');
    }
    return str;
  }
}
