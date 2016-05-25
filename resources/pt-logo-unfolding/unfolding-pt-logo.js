(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 800,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.p3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1).p("AAAhjIAADH");
	this.shape.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,22);


(lib.p2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1).p("AAADIIAAmP");
	this.shape.setTransform(0,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,42);


(lib.p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1).p("AjHAAIGPAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-1,42,2);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,5,5);


// stage content:
(lib.unfoldingptlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#222222").ss(1,1,1).p("AgxjHIAxAAIAAAyAAAj5IAAAyIAyAAAjHjHIAAjIIGPAAIAAGPIDIjHIAAjIAjHAAIAAGQADIAAImPAAIjIAAAjHAAIjIjHAjHAAIAAjHIjIjI");
	this.shape.setTransform(360,400);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(371));

	// Layer 14
	this.instance = new lib.dot();
	this.instance.setTransform(530,400,0.002,0.002);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1},9).wait(361));

	// Layer 1
	this.instance_1 = new lib.p1();
	this.instance_1.setTransform(530,400,0.002,0.002);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1},9).to({y:380},10).wait(342));

	// Layer 3
	this.instance_2 = new lib.p2();
	this.instance_2.setTransform(550,400,1,1,90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({rotation:0,y:380},10).wait(342));

	// Layer 4
	this.instance_3 = new lib.p2();
	this.instance_3.setTransform(550,420,1,1,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({rotation:90},10).wait(332));

	// Layer 5
	this.instance_4 = new lib.p2();
	this.instance_4.setTransform(510,420,1,1,-90);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({rotation:-180},10).wait(322));

	// Layer 6
	this.instance_5 = new lib.p3();
	this.instance_5.setTransform(510,400,1,1,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).to({scaleY:1.41,rotation:135},10).wait(312));

	// Layer 7
	this.instance_6 = new lib.p3();
	this.instance_6.setTransform(510,420,1,1,180);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({scaleY:1.41,rotation:135},10).wait(302));

	// Layer 8
	this.instance_7 = new lib.p3();
	this.instance_7.setTransform(550,420,1,1,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).to({scaleY:1.41,rotation:225},10).wait(292));

	// Layer 13
	this.instance_8 = new lib.p3();
	this.instance_8.setTransform(570,400,1,1.415,45);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(79).to({_off:false},0).to({scaleY:1,rotation:180},10).wait(282));

	// Layer 12
	this.instance_9 = new lib.p3();
	this.instance_9.setTransform(510,420,1,1.412,135);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({_off:false},0).to({scaleY:1,rotation:90},10).wait(272));

	// Layer 11
	this.instance_10 = new lib.p3();
	this.instance_10.setTransform(510,420,1,0.999,90);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(99).to({_off:false},0).to({rotation:0},10).wait(262));

	// Layer 10
	this.instance_11 = new lib.p3();
	this.instance_11.setTransform(510,440,1,0.999,0,-180,180);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(109).to({_off:false},0).to({skewX:0,skewY:0},10).wait(252));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(719,759,82,82);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;