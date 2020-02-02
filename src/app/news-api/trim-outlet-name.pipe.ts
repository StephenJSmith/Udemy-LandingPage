import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimOutletName'
})
export class TrimOutletNamePipe implements PipeTransform {

  transform(title: string, outletName: string): string {
    const lastIndexOf = title.lastIndexOf(' -');
    if (lastIndexOf < 0) {
      return title;
    }

    return title.substring(0, lastIndexOf);
    // return title.replace(` - ${outletName}`, '');
  }

}
