import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleUrl'
})
export class SimpleUrlPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(value.indexOf('//') + 2);
  }
}
