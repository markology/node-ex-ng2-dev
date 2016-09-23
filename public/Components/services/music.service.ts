import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MusicService{
    tracks = ['mp3/lord.m4a','mp3/feelgood.m4a','mp3/pale.m4a','mp3/misery.m4a', ];
	forceIndex = -1;

	constructor(){
	}


	checkAndPlay(path){
		var index = this.tracks.indexOf(path)
		if(index == -1){
			this.tracks.push(path)
			this.forceIndex = this.tracks.length -1;
		}
		else{
			for(var x in this.tracks){
				if(this.tracks[x] == path){
					this.forceIndex = x;
					break;
				}
			}
		}
	}
}