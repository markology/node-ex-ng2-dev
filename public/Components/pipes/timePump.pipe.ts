import {Pipe, bind} from '@angular/core';

@Pipe({
  name: 'timePump'
})

export class TimePump {
  transform(value: any, args: Array<any>): string {
    return moment(value).fromNow();
  }
}

