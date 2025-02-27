import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followers'
})
export class FollowersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const followers = value as number;
   
    if(!followers) 
      return "No tiene seguidores";

    return followers > 1 ? `${followers} seguidores` : `${followers} seguidor`;
  }

}
