import {Component,  Output,Input, EventEmitter, OnChanges, SimpleChange, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core'

@Component({
	selector:'ng2video',
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: '/public/Components/directives/components/ng2video/ng2music.html',
  styleUrls: ['public/Components/directives/components/ng2video/ng2music.css']
	})

export class NG2Video implements OnChanges, OnInit{
  @Input() source: Array;
  @Output() fullToggle = new EventEmitter();
  // @Output() trackError = new EventEmitter();
  // @Input() forceIndex : number;

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
  fullScreen = false;
  playlist = false;

  constructor(private ref: ChangeDetectorRef){
    this.ref = ref;
  }


  detectChange(){
    this.detection = true;
    this.ref.reattach();
    this.ref.detectChanges();
    this.detection = false;
  }

  setFull(){
    this.fullToggle.emit('ok')
    this.fullScreen = !this.fullScreen;
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
    // document.getElementById('ng2m-player').addEventListener("seeking", (e) => {console.log('seeking')} );

, false);




  }

}