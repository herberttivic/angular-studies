import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone: true,
})
export class CustomStringPipe implements PipeTransform {
  transform(value: string, args?: 'uper' | 'lower'): string {
    switch (args) {
      case 'lower':
        return value.toLowerCase();
      case 'uper':
        return value.toUpperCase();
      default:
        return value;
    }
  }
}
