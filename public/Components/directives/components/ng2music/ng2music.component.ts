import {Component,  Output,Input, EventEmitter, OnChanges, SimpleChange, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core'

@Component({
	selector:'ng2music',
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: '/public/Components/directives/components/ng2music/ng2music.html',
  styleUrls: ['public/Components/directives/components/ng2music/ng2music.css']
	})

export class NG2Music implements OnChanges, OnInit{
  @Input() tracks: Array;
  @Output() hidePlayer = new EventEmitter();
  @Output() trackError = new EventEmitter();
  @Input() forceIndex : number;
  typeFilter = /(?:\.([^.]+))?$/;
  filenameFilter = /^.*[\\\/]/;
  trackIndex: number;
  trackerOffset = 0;
  currentTime = '00:00';  
  isShuffle = false;
  tracker = [];
  playing = false;
  duration = 0;
  load = true;
  ref;
  slider: any;
  seeking = false;
  detection = false;
  playlist = false;

  constructor(private ref: ChangeDetectorRef){
    this.ref = ref;
		this.trackIndex = 0;
  }

  spliceCB(index){
    if(index == this.targetIndex){
      this.targetIndex = (this.trackIndex + 1) % this.tracks.length;
    }

    this.detectChange();
  }
  detectChange(){
    this.detection = true;
    this.ref.reattach();
    this.ref.detectChanges();
    this.detection = false;
  }

  setDuration(dur){
    var d = dur/60;
    console.log(d)
    return d.toFixed(2).toString().replace('.', ':')    
  }

  shuffle(toggle){
    if(toggle){
      this.isShuffle = true;
      this.shuffleForward();     
    }
    else{
      this.isShuffle = false;
      this.tracker = [];
      this.trackerOffset = 0;
    }
  }

  formatTime(value:number) {
    let s = Math.trunc(value % 60);
    let m = Math.trunc((value / 60) % 60);
    let h = Math.trunc(((value / 60) / 60) % 60);  
    return h > 0 ? `${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}` : `${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
  } 

  shuffleForward(){
    if(this.trackerOffset == 0){
      var random = Math.round((Math.random() * (this.tracks.length-1)));
      console.log(random);
      
      while(random == this.trackIndex){
       random = Math.round((Math.random() * (this.tracks.length-1)));      
      }
        this.trackIndex = random;
        console.log(this.trackIndex)
        this.tracker.push(this.trackIndex)     
        console.log(this.tracks) 
        console.log(this.tracker) 
        console.log(this.tracks) 
      }
      else{
        this.trackerOffset--;
        this.trackIndex = this.tracker[this.tracker.length - this.trackerOffset -1]
      }
  }

  shuffleBackward(){
    if(this.tracker.length != 0 && this.trackerOffset != this.tracker.length -1){
        this.trackerOffset++;
        this.trackIndex = this.tracker[this.tracker.length - this.trackerOffset -1]
      }
      else {
        this.trackerOffset = 0;
        this.trackIndex = 0;
      }
  }
  // updateTime(player){
  //   this.currentTime = player.target.currentTime;    
  // }
    
  emitHide(){
  	this.hidePlayer.emit({});
  }

  fileType(track){
    return this.typeFilter.exec(track)
  }

  fileName(track){
    return track.replace(this.filenameFilter, '');
  }

  trackTime(e){
    if(this.detection)
      this.ref.detach();

    if (!this.seeking)
      $('.ng2m-progress').slider('value', e.target.currentTime)
    this.currentTime = this.formatTime(e.target.currentTime);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes.forceIndex && changes.forceIndex != -1);
    
    if(changes.forceIndex.currentValue && changes.forceIndex.currentValue != -1){
      this.trackIndex = changes.forceIndex.currentValue
      this.detectChange();
    }
    else{
      console.log(changes)
    }

  }


  ngOnInit(){

    var _this = this;

    $(".ng2m-progress").slider({
    value: 0,
    min: 0,
    max: 100,
    step: .2,

    slide: function(event, ui) {
        _this.seeking = true;
    },
    stop: function (e, ui) {
        _this.seeking = false;
        $('#ng2m-player').prop("currentTime", ui.value);
    }            
    });
    $('.ng2m-progress')[0].value = 0);
    document.getElementById('ng2m-player').addEventListener("timeupdate", (e) => {this.trackTime(e)}, false);

    document.getElementById('ng2m-player').addEventListener("durationchange", (e) => {     
      $('.ng2m-progress').slider( "option", "max", $('#ng2m-player')[0].duration );
       this.duration = this.formatTime($('#ng2m-player')[0].duration, this.currentTime = '00:00';  },
        false);
    // document.getElementById('ng2m-player').addEventListener("playing", (e) => { this.playing = true; console.log('playing') }, false);
    document.getElementById('ng2m-player').addEventListener("play", (e) => { this.playing = true; console.log('playing') ;this.detectChange()}, false);
    document.getElementById('ng2m-player').addEventListener("pause", (e) => { this.playing = false;  console.log('ending'); this.detectChange()}, false);
    document.getElementById('ng2m-player').addEventListener("ended", (e) => { this.trackIndex = ((this.trackIndex + 1) % this.tracks.length);  if(!this.load){ }this.load = false; console.log('ending'); this.detectChange()}, false);
    document.getElementById('ng2m-player').addEventListener("loadstart", (e) => {console.log('loadstart'); if(!this.load){$('#ng2m-player')[0].play(); }this.load = false;    $('.ng2m-progress')[0].value = 0);
    // document.getElementById('ng2m-player').addEventListener("seeking", (e) => {console.log('seeking')} );

, false);




  }

}