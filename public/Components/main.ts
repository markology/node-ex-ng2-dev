import {bootstrap} 			from '@angular/platform-browser-dynamic'
import {AppComponent} 		from 'root/app.component'
import {appRouterProviders} from 'routes';
import {HTTP_BINDINGS, HTTP_PROVIDERS,Http}		from '@angular/http'
import {Router, ROUTER_DIRECTIVES}		from '@angular/router'

declare var require: any;


import { MusicService } from 'music.service'
import { SocketService } from 'socket.service'



bootstrap(AppComponent, [
   HTTP_PROVIDERS,
   appRouterProviders, 
   ROUTER_DIRECTIVES, 
   MusicService, 
   SocketService], Http)
	.catch(err => console.error(err));
