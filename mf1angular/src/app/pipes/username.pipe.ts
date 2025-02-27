import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    const url = value as string;
    const username = url.split('/').pop();
    return  username;
  }

}