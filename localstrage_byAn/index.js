(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,218,46],[0,48,218,46],[0,96,218,46],[0,144,218,46]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366FF").s().p("ArpEgIAAo/IXTAAIAAI/g");
	this.shape.setTransform(74.6,28.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(0,0,149.2,57.6), null);


// stage content:
(lib.Webstrage_save_an = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//――――――――――――――――――――
		//ポイント加算
		//――――――――――――――――――――
		this.pt = 0;	//得点変数を初期化して用意
		
		this.btn_ptadd.addEventListener("click", PtAdd.bind(this));
		function PtAdd()
		{
			this.pt += 10;	//得点加算
			this.pt_pnl.text = this.pt;	//得点をpt_pnl(得点表示)のテキストウィンドウにセット
			//alert("加算実行");
		}
		
		//――――――――――――――――――――
		//セーブボタン
		//――――――――――――――――――――
		this.btn_save.addEventListener("click", SavePt.bind(this));
		function SavePt()
		{
			localStorage.setItem('pt', this.pt);	//Webstrageにキー「pt」でセット
			alert("Webstrageに保存しました。");
		}
		
		//――――――――――――――――――――
		//ロードボタン
		//――――――――――――――――――――
		this.btn_load.addEventListener("click", LoadPt.bind(this));
		function LoadPt()
		{
			let pt = localStorage.getItem('pt');	//Webstrageからキー「pt」を読み込み
			this.pt_pnl.text = pt;					//読み込んだ得点をpt_pnl(得点表示)のテキストウィンドウにセット
			alert("Webstrageから読み込みました。");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(377.4,371.7,0.5,0.5);

	this.btn_load = new lib.btn();
	this.btn_load.name = "btn_load";
	this.btn_load.setTransform(357.2,354.45);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(377.4,270.9,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(160.2,270.9,0.5,0.5);

	this.btn_save = new lib.btn();
	this.btn_save.name = "btn_save";
	this.btn_save.setTransform(357.2,253.65);

	this.btn_ptadd = new lib.btn();
	this.btn_ptadd.name = "btn_ptadd";
	this.btn_ptadd.setTransform(140,253.65);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(272.8,125,0.5,0.5);

	this.name = new cjs.Text("ほげ", "37px 'MS PGothic'", "#3366FF");
	this.name.name = "name";
	this.name.textAlign = "center";
	this.name.lineHeight = 39;
	this.name.lineWidth = 129;
	this.name.parent = this;
	this.name.setTransform(206.4,111.6);

	this.pt_pnl = new cjs.Text("0", "61px 'MS PGothic'", "#3366FF");
	this.pt_pnl.name = "pt_pnl";
	this.pt_pnl.textAlign = "right";
	this.pt_pnl.lineHeight = 63;
	this.pt_pnl.lineWidth = 114;
	this.pt_pnl.parent = this;
	this.pt_pnl.setTransform(497.6,87.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pt_pnl},{t:this.name},{t:this.instance_3},{t:this.btn_ptadd},{t:this.btn_save},{t:this.instance_2},{t:this.instance_1},{t:this.btn_load},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(460,325.6,46.39999999999998,86.39999999999998);
// library properties:
lib.properties = {
	id: 'E3C8CA3FF791704D893FA8C131A6CC63',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFF00",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1762068469919", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E3C8CA3FF791704D893FA8C131A6CC63'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;