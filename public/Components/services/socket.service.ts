import {Injectable} from '@angular/core'

declare var io: any;

@Injectable()
export class SocketService{
	socket;

	constructor(){
       this.socket = io('localhost:3001', {'force new connection': true});
	} 

	getSocket(){
		return this.socket;
	}

}