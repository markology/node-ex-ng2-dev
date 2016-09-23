var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("main", ['@angular/platform-browser-dynamic', 'root/app.component', 'routes', '@angular/http', '@angular/router', 'music.service', 'socket.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_component_1, routes_1, http_1, router_1, music_service_1, socket_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (music_service_1_1) {
                music_service_1 = music_service_1_1;
            },
            function (socket_service_1_1) {
                socket_service_1 = socket_service_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                routes_1.appRouterProviders,
                router_1.ROUTER_DIRECTIVES,
                music_service_1.MusicService,
                socket_service_1.SocketService], http_1.Http)
                .catch(function (err) { return console.error(err); });
        }
    }
});
System.register("general/404.component", ['@angular/core'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1;
    var FourOhFour;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FourOhFour = (function () {
                function FourOhFour() {
                }
                FourOhFour = __decorate([
                    core_1.Component({
                        selector: 'fourohfour',
                        template: " \n        <section id=\"content\">\n          <h1>404</h1>\n          <h2>Oops, Something went wrong! :(</h2>\n        </section>",
                    }), 
                    __metadata('design:paramtypes', [])
                ], FourOhFour);
                return FourOhFour;
            }());
            exports_2("FourOhFour", FourOhFour);
        }
    }
});
System.register("general/info.component", ['@angular/core', '@angular/router', '@angular/http', 'socket.service', 'timePump.pipe'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, router_2, http_2, socket_service_2, timePump_pipe_1;
    var InfoComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (socket_service_2_1) {
                socket_service_2 = socket_service_2_1;
            },
            function (timePump_pipe_1_1) {
                timePump_pipe_1 = timePump_pipe_1_1;
            }],
        execute: function() {
            InfoComponent = (function () {
                function InfoComponent(socketService, http) {
                    this.socketService = socketService;
                    this.http = http;
                    this.userService = userService;
                    this.socket = socketService.getSocket();
                    this.socket.on('incoming', function (data) {
                    });
                }
                /**
                  * @desc connect to soundcloud
                  * @param n/a
                  * @return undefined
                */
                InfoComponent.prototype.ngOnInit = function () {
                };
                /**
                  * @desc unsubscribe from socet group
                  * @param n/a
                  * @return undefined
                */
                InfoComponent.prototype.ngOnDestroy = function () {
                    // this.socket.emit('leaveRoom', 'profile' + this.username) 
                };
                InfoComponent = __decorate([
                    core_2.Component({
                        selector: 'home',
                        templateUrl: '../public/Components/general/info.html',
                        directives: [router_2.ROUTER_DIRECTIVES],
                        providers: [http_2.Http, http_2.HTTP_BINDINGS, socket_service_2.SocketService],
                        pipes: [timePump_pipe_1.TimePump]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof socket_service_2.SocketService !== 'undefined' && socket_service_2.SocketService) === 'function' && _a) || Object, (typeof (_b = typeof http_2.Http !== 'undefined' && http_2.Http) === 'function' && _b) || Object])
                ], InfoComponent);
                return InfoComponent;
                var _a, _b;
            }());
            exports_3("InfoComponent", InfoComponent);
        }
    }
});
System.register("general/nav.component", ['@angular/core', '@angular/router'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, router_3;
    var Nav;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            }],
        execute: function() {
            Nav = (function () {
                function Nav() {
                }
                Nav = __decorate([
                    core_3.Component({
                        selector: 'navbar',
                        templateUrl: '../public/Components/general/nav.html',
                        directives: [router_3.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Nav);
                return Nav;
            }());
            exports_4("Nav", Nav);
        }
    }
});
System.register("directives/components/ng2music/ng2music.component", ['@angular/core'], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4;
    var NG2Music;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            }],
        execute: function() {
            NG2Music = (function () {
                function NG2Music(ref) {
                    this.ref = ref;
                    this.hidePlayer = new core_4.EventEmitter();
                    this.trackError = new core_4.EventEmitter();
                    this.typeFilter = /(?:\.([^.]+))?$/;
                    this.filenameFilter = /^.*[\\\/]/;
                    this.trackerOffset = 0;
                    this.currentTime = '00:00';
                    this.isShuffle = false;
                    this.tracker = [];
                    this.playing = false;
                    this.duration = 0;
                    this.load = true;
                    this.seeking = false;
                    this.detection = false;
                    this.playlist = false;
                    this.ref = ref;
                    this.trackIndex = 0;
                }
                NG2Music.prototype.spliceCB = function (index) {
                    if (index == this.targetIndex) {
                        this.targetIndex = (this.trackIndex + 1) % this.tracks.length;
                    }
                    this.detectChange();
                };
                NG2Music.prototype.detectChange = function () {
                    this.detection = true;
                    this.ref.reattach();
                    this.ref.detectChanges();
                    this.detection = false;
                };
                NG2Music.prototype.setDuration = function (dur) {
                    var d = dur / 60;
                    console.log(d);
                    return d.toFixed(2).toString().replace('.', ':');
                };
                NG2Music.prototype.shuffle = function (toggle) {
                    if (toggle) {
                        this.isShuffle = true;
                        this.shuffleForward();
                    }
                    else {
                        this.isShuffle = false;
                        this.tracker = [];
                        this.trackerOffset = 0;
                    }
                };
                NG2Music.prototype.formatTime = function (value) {
                    var s = Math.trunc(value % 60);
                    var m = Math.trunc((value / 60) % 60);
                    var h = Math.trunc(((value / 60) / 60) % 60);
                    return h > 0 ? (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s) : (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
                };
                NG2Music.prototype.shuffleForward = function () {
                    if (this.trackerOffset == 0) {
                        var random = Math.round((Math.random() * (this.tracks.length - 1)));
                        console.log(random);
                        while (random == this.trackIndex) {
                            random = Math.round((Math.random() * (this.tracks.length - 1)));
                        }
                        this.trackIndex = random;
                        console.log(this.trackIndex);
                        this.tracker.push(this.trackIndex);
                        console.log(this.tracks);
                        console.log(this.tracker);
                        console.log(this.tracks);
                    }
                    else {
                        this.trackerOffset--;
                        this.trackIndex = this.tracker[this.tracker.length - this.trackerOffset - 1];
                    }
                };
                NG2Music.prototype.shuffleBackward = function () {
                    if (this.tracker.length != 0 && this.trackerOffset != this.tracker.length - 1) {
                        this.trackerOffset++;
                        this.trackIndex = this.tracker[this.tracker.length - this.trackerOffset - 1];
                    }
                    else {
                        this.trackerOffset = 0;
                        this.trackIndex = 0;
                    }
                };
                // updateTime(player){
                //   this.currentTime = player.target.currentTime;    
                // }
                NG2Music.prototype.emitHide = function () {
                    this.hidePlayer.emit({});
                };
                NG2Music.prototype.fileType = function (track) {
                    return this.typeFilter.exec(track);
                };
                NG2Music.prototype.fileName = function (track) {
                    return track.replace(this.filenameFilter, '');
                };
                NG2Music.prototype.trackTime = function (e) {
                    if (this.detection)
                        this.ref.detach();
                    if (!this.seeking)
                        $('.ng2m-progress').slider('value', e.target.currentTime);
                    this.currentTime = this.formatTime(e.target.currentTime);
                };
                NG2Music.prototype.ngOnChanges = function (changes) {
                    console.log(changes.forceIndex && changes.forceIndex != -1);
                    if (changes.forceIndex.currentValue && changes.forceIndex.currentValue != -1) {
                        this.trackIndex = changes.forceIndex.currentValue;
                        this.detectChange();
                    }
                    else {
                        console.log(changes);
                    }
                };
                NG2Music.prototype.ngOnInit = function () {
                    var _this = this;
                    var _this = this;
                    $(".ng2m-progress").slider({
                        value: 0,
                        min: 0,
                        max: 100,
                        step: .2,
                        slide: function (event, ui) {
                            _this.seeking = true;
                        },
                        stop: function (e, ui) {
                            _this.seeking = false;
                            $('#ng2m-player').prop("currentTime", ui.value);
                        }
                    });
                    $('.ng2m-progress')[0].value = 0;
                    ;
                    document.getElementById('ng2m-player').addEventListener("timeupdate", function (e) { _this.trackTime(e); }, false);
                    document.getElementById('ng2m-player').addEventListener("durationchange", function (e) {
                        $('.ng2m-progress').slider("option", "max", $('#ng2m-player')[0].duration);
                        _this.duration = _this.formatTime($('#ng2m-player')[0].duration, _this.currentTime = '00:00');
                    }, false);
                    // document.getElementById('ng2m-player').addEventListener("playing", (e) => { this.playing = true; console.log('playing') }, false);
                    document.getElementById('ng2m-player').addEventListener("play", function (e) { _this.playing = true; console.log('playing'); _this.detectChange(); }, false);
                    document.getElementById('ng2m-player').addEventListener("pause", function (e) { _this.playing = false; console.log('ending'); _this.detectChange(); }, false);
                    document.getElementById('ng2m-player').addEventListener("ended", function (e) { _this.trackIndex = ((_this.trackIndex + 1) % _this.tracks.length); if (!_this.load) { } _this.load = false; console.log('ending'); _this.detectChange(); }, false);
                    document.getElementById('ng2m-player').addEventListener("loadstart", function (e) { console.log('loadstart'); if (!_this.load) {
                        $('#ng2m-player')[0].play();
                    } _this.load = false; $('.ng2m-progress')[0].value = 0; });
                    false;
                    ;
                };
                __decorate([
                    core_4.Input(), 
                    __metadata('design:type', Array)
                ], NG2Music.prototype, "tracks", void 0);
                __decorate([
                    core_4.Output(), 
                    __metadata('design:type', Object)
                ], NG2Music.prototype, "hidePlayer", void 0);
                __decorate([
                    core_4.Output(), 
                    __metadata('design:type', Object)
                ], NG2Music.prototype, "trackError", void 0);
                __decorate([
                    core_4.Input(), 
                    __metadata('design:type', Number)
                ], NG2Music.prototype, "forceIndex", void 0);
                NG2Music = __decorate([
                    core_4.Component({
                        selector: 'ng2music',
                        changeDetection: core_4.ChangeDetectionStrategy.OnPush,
                        templateUrl: '/public/Components/directives/components/ng2music/ng2music.html',
                        styleUrls: ['public/Components/directives/components/ng2music/ng2music.css']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_4.ChangeDetectorRef !== 'undefined' && core_4.ChangeDetectorRef) === 'function' && _a) || Object])
                ], NG2Music);
                return NG2Music;
                var _a;
            }());
            exports_5("NG2Music", NG2Music);
        }
    }
});
System.register("directives/components/ng2video/ng2video.component", ['@angular/core'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_5;
    var NG2Video;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            }],
        execute: function() {
            NG2Video = (function () {
                function NG2Video(ref) {
                    this.ref = ref;
                    this.fullToggle = new core_5.EventEmitter();
                    // @Output() trackError = new EventEmitter();
                    // @Input() forceIndex : number;
                    this.typeFilter = /(?:\.([^.]+))?$/;
                    this.filenameFilter = /^.*[\\\/]/;
                    this.trackerOffset = 0;
                    this.currentTime = '00:00';
                    this.isShuffle = false;
                    this.tracker = [];
                    this.playing = false;
                    this.duration = 0;
                    this.load = true;
                    this.seeking = false;
                    this.detection = false;
                    this.fullScreen = false;
                    this.playlist = false;
                    this.ref = ref;
                }
                NG2Video.prototype.detectChange = function () {
                    this.detection = true;
                    this.ref.reattach();
                    this.ref.detectChanges();
                    this.detection = false;
                };
                NG2Video.prototype.setFull = function () {
                    this.fullToggle.emit('ok');
                    this.fullScreen = !this.fullScreen;
                };
                NG2Video.prototype.setDuration = function (dur) {
                    var d = dur / 60;
                    console.log(d);
                    return d.toFixed(2).toString().replace('.', ':');
                };
                NG2Video.prototype.shuffle = function (toggle) {
                    if (toggle) {
                        this.isShuffle = true;
                        this.shuffleForward();
                    }
                    else {
                        this.isShuffle = false;
                        this.tracker = [];
                        this.trackerOffset = 0;
                    }
                };
                NG2Video.prototype.formatTime = function (value) {
                    var s = Math.trunc(value % 60);
                    var m = Math.trunc((value / 60) % 60);
                    var h = Math.trunc(((value / 60) / 60) % 60);
                    return h > 0 ? (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s) : (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
                };
                NG2Video.prototype.emitHide = function () {
                    this.hidePlayer.emit({});
                };
                NG2Video.prototype.fileType = function (track) {
                    return this.typeFilter.exec(track);
                };
                NG2Video.prototype.fileName = function (track) {
                    return track.replace(this.filenameFilter, '');
                };
                NG2Video.prototype.trackTime = function (e) {
                    if (this.detection)
                        this.ref.detach();
                    if (!this.seeking)
                        $('.ng2m-progress').slider('value', e.target.currentTime);
                    this.currentTime = this.formatTime(e.target.currentTime);
                };
                NG2Video.prototype.ngOnChanges = function (changes) {
                };
                NG2Video.prototype.ngOnInit = function () {
                    var _this = this;
                    var _this = this;
                    $(".ng2m-progress").slider({
                        value: 0,
                        min: 0,
                        max: 100,
                        step: .2,
                        slide: function (event, ui) {
                            _this.seeking = true;
                        },
                        stop: function (e, ui) {
                            _this.seeking = false;
                            $('#ng2m-player').prop("currentTime", ui.value);
                        }
                    });
                    $('.ng2m-progress')[0].value = 0;
                    ;
                    document.getElementById('ng2m-player').addEventListener("timeupdate", function (e) { _this.trackTime(e); }, false);
                    document.getElementById('ng2m-player').addEventListener("durationchange", function (e) {
                        $('.ng2m-progress').slider("option", "max", $('#ng2m-player')[0].duration);
                        _this.duration = _this.formatTime($('#ng2m-player')[0].duration, _this.currentTime = '00:00');
                    }, false);
                    // document.getElementById('ng2m-player').addEventListener("playing", (e) => { this.playing = true; console.log('playing') }, false);
                    document.getElementById('ng2m-player').addEventListener("play", function (e) { _this.playing = true; console.log('playing'); _this.detectChange(); }, false);
                    document.getElementById('ng2m-player').addEventListener("pause", function (e) { _this.playing = false; console.log('ending'); _this.detectChange(); }, false);
                    false;
                    ;
                };
                __decorate([
                    core_5.Input(), 
                    __metadata('design:type', Array)
                ], NG2Video.prototype, "source", void 0);
                __decorate([
                    core_5.Output(), 
                    __metadata('design:type', Object)
                ], NG2Video.prototype, "fullToggle", void 0);
                NG2Video = __decorate([
                    core_5.Component({
                        selector: 'ng2video',
                        changeDetection: core_5.ChangeDetectionStrategy.OnPush,
                        templateUrl: '/public/Components/directives/components/ng2video/ng2music.html',
                        styleUrls: ['public/Components/directives/components/ng2video/ng2music.css']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_5.ChangeDetectorRef !== 'undefined' && core_5.ChangeDetectorRef) === 'function' && _a) || Object])
                ], NG2Video);
                return NG2Video;
                var _a;
            }());
            exports_6("NG2Video", NG2Video);
        }
    }
});
System.register("services/upload.service", ['@angular/core', 'rxjs/Observable'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_6, Observable_1;
    var UploadService;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            UploadService = (function () {
                function UploadService() {
                }
                UploadService.prototype.uploadRequest = function (url, name, files, params) {
                    return Observable_1.Observable.create(function (observer) {
                        var formData = new FormData(), xhr = new XMLHttpRequest();
                        console.log(files);
                        if (params)
                            formData.append('data', params);
                        for (var i in files) {
                            formData.append(name, files[i], files[i].name);
                        }
                        console.log('passed');
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    observer.next(JSON.parse(xhr.response));
                                }
                                else {
                                    observer.error(xhr.response);
                                }
                            }
                        };
                        console.log(formData.values());
                        // xhr.upload.onprogress = (event) => {
                        // 	this.progress = Math.round(event.loaded / event.total * 100);
                        // 	this.progressObserver.next(this.progress)
                        // };
                        xhr.open('Post', url, true);
                        xhr.send(formData);
                    });
                };
                UploadService = __decorate([
                    core_6.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UploadService);
                return UploadService;
            }());
            exports_7("UploadService", UploadService);
        }
    }
});
System.register("services/music.service", ['@angular/core'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_7;
    var MusicService;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            }],
        execute: function() {
            MusicService = (function () {
                function MusicService() {
                    this.tracks = ['mp3/lord.m4a', 'mp3/feelgood.m4a', 'mp3/pale.m4a', 'mp3/misery.m4a',];
                    this.forceIndex = -1;
                }
                MusicService.prototype.checkAndPlay = function (path) {
                    var index = this.tracks.indexOf(path);
                    if (index == -1) {
                        this.tracks.push(path);
                        this.forceIndex = this.tracks.length - 1;
                    }
                    else {
                        for (var x in this.tracks) {
                            if (this.tracks[x] == path) {
                                this.forceIndex = x;
                                break;
                            }
                        }
                    }
                };
                MusicService = __decorate([
                    core_7.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MusicService);
                return MusicService;
            }());
            exports_8("MusicService", MusicService);
        }
    }
});
System.register("services/socket.service", ['@angular/core'], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_8;
    var SocketService;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            }],
        execute: function() {
            SocketService = (function () {
                function SocketService() {
                    this.socket = io('localhost:3001', { 'force new connection': true });
                }
                SocketService.prototype.getSocket = function () {
                    return this.socket;
                };
                SocketService = __decorate([
                    core_8.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SocketService);
                return SocketService;
            }());
            exports_9("SocketService", SocketService);
        }
    }
});
System.register("directives/outside.directive", ['@angular/core'], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_9;
    var ClickOutsideDirective;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            }],
        execute: function() {
            ClickOutsideDirective = (function () {
                function ClickOutsideDirective(_elementRef) {
                    this._elementRef = _elementRef;
                    this.clickOutside = new core_9.EventEmitter();
                }
                ClickOutsideDirective.prototype.onClick = function (targetElement) {
                    // console.log(targetElement)
                    var clickedInside = this._elementRef.nativeElement.contains(targetElement);
                    if (!clickedInside) {
                        this.clickOutside.emit(targetElement);
                    }
                };
                __decorate([
                    core_9.Output(), 
                    __metadata('design:type', Object)
                ], ClickOutsideDirective.prototype, "clickOutside", void 0);
                __decorate([
                    core_9.HostListener('document:click', ['$event.target']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], ClickOutsideDirective.prototype, "onClick", null);
                ClickOutsideDirective = __decorate([
                    core_9.Directive({
                        selector: '[clickOutside]'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_9.ElementRef !== 'undefined' && core_9.ElementRef) === 'function' && _a) || Object])
                ], ClickOutsideDirective);
                return ClickOutsideDirective;
                var _a;
            }());
            exports_10("ClickOutsideDirective", ClickOutsideDirective);
        }
    }
});
System.register("pipes/timePump.pipe", ['@angular/core'], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_10;
    var TimePump;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            }],
        execute: function() {
            TimePump = (function () {
                function TimePump() {
                }
                TimePump.prototype.transform = function (value, args) {
                    return moment(value).fromNow();
                };
                TimePump = __decorate([
                    core_10.Pipe({
                        name: 'timePump'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimePump);
                return TimePump;
            }());
            exports_11("TimePump", TimePump);
        }
    }
});
System.register("app.component", ['@angular/core', '@angular/router', '@angular/http', 'ng2music', "general/nav.component", 'socket.service', 'music.service'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_11, router_4, http_3, ng2music_1, nav_component_1, socket_service_3, music_service_2;
    var AppComponent;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (http_3_1) {
                http_3 = http_3_1;
            },
            function (ng2music_1_1) {
                ng2music_1 = ng2music_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (socket_service_3_1) {
                socket_service_3 = socket_service_3_1;
            },
            function (music_service_2_1) {
                music_service_2 = music_service_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, socketService, musicService) {
                    this.router = router;
                    this.musicService = musicService;
                }
                AppComponent.prototype.joinRoom = function (conversationId) {
                    // this.socket.emit('joinRoom', conversationId );
                };
                AppComponent.prototype.hidePlayer = function (event) {
                    //   $('footer.bottomPlayer').addClass('hidePlayer');
                };
                AppComponent.prototype.setSocketId = function (currentUser) {
                    // this.socket.emit('setUserId' , currentUser._id )
                    // this.socket.emit('conversationRooms',convoIds);
                };
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_11.Component({
                        selector: "my-app",
                        template: "\n    <body class=\"init\">\n\n      <navbar></navbar>\n      <div class=\"container\">\n        <router-outlet ></router-outlet>\n      </div>\n\n      <footer style=\"height: 66px\" class=\"footer bg-info dker bottomPlayer\">\n        <ng2music [tracks]=\"musicService.tracks\" [forceIndex]=\"musicService.forceIndex\"  (hidePlayer)=\"hidePlayer($event)\" ></ng2music>\n      </footer>  \n\n    </body> \n\n",
                        directives: [
                            router_4.ROUTER_DIRECTIVES,
                            ng2music_1.NG2Music,
                            nav_component_1.Nav
                        ],
                        providers: [
                            http_3.HTTP_PROVIDERS,
                            socket_service_3.SocketService
                        ]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_4.Router !== 'undefined' && router_4.Router) === 'function' && _a) || Object, (typeof (_b = typeof socket_service_3.SocketService !== 'undefined' && socket_service_3.SocketService) === 'function' && _b) || Object, (typeof (_c = typeof music_service_2.MusicService !== 'undefined' && music_service_2.MusicService) === 'function' && _c) || Object])
                ], AppComponent);
                return AppComponent;
                var _a, _b, _c;
            }());
            exports_12("AppComponent", AppComponent);
        }
    }
});
System.register("general/home.component", ['@angular/core', '@angular/router', '@angular/http', 'socket.service', 'timePump.pipe'], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_12, router_5, http_4, socket_service_4, timePump_pipe_2;
    var HomeComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            },
            function (http_4_1) {
                http_4 = http_4_1;
            },
            function (socket_service_4_1) {
                socket_service_4 = socket_service_4_1;
            },
            function (timePump_pipe_2_1) {
                timePump_pipe_2 = timePump_pipe_2_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(socketService, http) {
                    this.socketService = socketService;
                    this.http = http;
                    this.socket = socketService.getSocket();
                    this.socket.on('incoming', function (data) {
                    });
                }
                /**
                  * @desc connect to soundcloud
                  * @param n/a
                  * @return undefined
                */
                HomeComponent.prototype.ngOnInit = function () {
                };
                /**
                  * @desc unsubscribe from socet group
                  * @param n/a
                  * @return undefined
                */
                HomeComponent.prototype.ngOnDestroy = function () {
                    // this.socket.emit('leaveRoom', 'profile' + this.username) 
                };
                HomeComponent = __decorate([
                    core_12.Component({
                        selector: 'home',
                        templateUrl: '../public/Components/general/home.html',
                        directives: [router_5.ROUTER_DIRECTIVES],
                        providers: [http_4.Http, http_4.HTTP_BINDINGS, socket_service_4.SocketService],
                        pipes: [timePump_pipe_2.TimePump]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof socket_service_4.SocketService !== 'undefined' && socket_service_4.SocketService) === 'function' && _a) || Object, (typeof (_b = typeof http_4.Http !== 'undefined' && http_4.Http) === 'function' && _b) || Object])
                ], HomeComponent);
                return HomeComponent;
                var _a, _b;
            }());
            exports_13("HomeComponent", HomeComponent);
        }
    }
});
System.register("app.routes", ["general/home.component", "general/info.component", '@angular/router'], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var home_component_1, info_component_1, router_6;
    var routes, appRouterProviders;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (info_component_1_1) {
                info_component_1 = info_component_1_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            }],
        execute: function() {
            routes = [
                {
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: home_component_1.HomeComponent,
                },
                {
                    path: 'info',
                    component: info_component_1.InfoComponent,
                }
            ];
            exports_14("appRouterProviders", appRouterProviders = [
                router_6.provideRouter(routes)
            ]);
        }
    }
});
