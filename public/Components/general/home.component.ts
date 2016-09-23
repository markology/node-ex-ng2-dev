import {Component, OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router'
import {Http, HTTP_PROVIDERS, HTTP_BINDINGS} from '@angular/http'
import {SocketService} from 'socket.service'
import {TimePump} from 'timePump.pipe'

declare var io: any;

@Component({
	selector: 'home',
  templateUrl: '../public/Components/general/home.html',
  directives:[ROUTER_DIRECTIVES],
  providers: [Http ,HTTP_BINDINGS,SocketService],
  pipes: [TimePump]
})

export class HomeComponent implements OnInit, OnDestroy{
  socket;
  http;
  router;  

  constructor(
    private socketService: SocketService, 
    private http :Http){
    this.socket = socketService.getSocket();
   
    this.socket.on('incoming', data => {
    });      
  }


  /**
    * @desc connect to soundcloud
    * @param n/a
    * @return undefined
  */
  ngOnInit(){
 
  }

  /**
    * @desc unsubscribe from socet group
    * @param n/a
    * @return undefined
  */
  ngOnDestroy(){
     // this.socket.emit('leaveRoom', 'profile' + this.username) 
  }

}