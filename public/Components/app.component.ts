import {Component,  OnInit}   from '@angular/core';
import { ROUTER_DIRECTIVES, Router}   from '@angular/router';
import {HTTP_PROVIDERS, Http} from '@angular/http'

import{NG2Music} from 'ng2music';
import{Nav} from 'general/nav.component';


import {SocketService} from 'socket.service'
import {MusicService} from 'music.service'


declare var io: any;


@Component({
  
  selector: "my-app",
    template:`
    <body class="init">

      <navbar></navbar>
      <div class="container">
        <router-outlet ></router-outlet>
      </div>

      <footer style="height: 66px" class="footer bg-info dker bottomPlayer">
        <ng2music [tracks]="musicService.tracks" [forceIndex]="musicService.forceIndex"  (hidePlayer)="hidePlayer($event)" ></ng2music>
      </footer>  

    </body> 

`,    
  directives: 
  [
  	ROUTER_DIRECTIVES,
    NG2Music,
    Nav
  ],
  providers: 
  [
	  HTTP_PROVIDERS , 
    SocketService
  ]

})



export class AppComponent implements OnInit{
  socket;
  musicService;

  constructor(
    private router: Router, 
    socketService: SocketService, 
    musicService: MusicService, 
  )
  {
    this.musicService = musicService;
  }

  joinRoom(conversationId){
    // this.socket.emit('joinRoom', conversationId );

  }


  hidePlayer(event){
  //   $('footer.bottomPlayer').addClass('hidePlayer');
  }

  setSocketId(currentUser){
    // this.socket.emit('setUserId' , currentUser._id )

    // this.socket.emit('conversationRooms',convoIds);
  }

  ngOnInit(){
      
  }
}
