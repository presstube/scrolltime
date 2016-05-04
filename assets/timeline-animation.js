(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.treemc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AiACDQARhFAohxQAWg/AXhBQAVAHAgA+QAfA6AZBIQAFAOAdA1QAaAuAAAMIhuAAQgPgBgTgCIAAgCQgCAAgCABQAAAAgBABQAAAAAAAAQgegCgngCQgjgDgSgEQgJgCgFgCAgFCOQAAgBAAAAQABgbADgJIAAAjQAAABAAABQgCAAgCAAQAAAAgBAAQAAAAAAAAQgEACgGAGAgBCOIAAAAQgEAPgBAPQAAABAAACIAAAFAgGCOIAAAAIAAAWQABgMAAgKAgGCsIAAgIAgBC0IAAgmAiDCMQABgFACgEAgGBVIAAA5AADB9QgDAHgBAI");
	this.shape.setTransform(0,-14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-33,30.6,38);


(lib.mainmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AhKgEQAiAAAzAEQA0AFAMAA");
	this.shape.setTransform(-311.5,-354.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AhKAFQA8gFAkgCQAXgCAeAA");
	this.shape_1.setTransform(-299.5,-355.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AiagJIC9AAQAoAJBQAAIAAAK");
	this.shape_2.setTransform(-281.5,-355);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("AhtAKQA/gLAHgBQAigHAPAAQAVAAAiAHQAmAFAHAH");
	this.shape_3.setTransform(-261,-352);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("AhTgnQB0A/ASAKQAQAHARgC");
	this.shape_4.setTransform(-241.6,-344);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(1,1,1).p("AifgsQENBZAyAA");
	this.shape_5.setTransform(-210,-343.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AiagTICzAAQAdATAuALQAjAJAUAA");
	this.shape_6.setTransform(-176.5,-342);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(1,1,1).p("AhygYQA7AKBTAUQBIASAPAB");
	this.shape_7.setTransform(-156.5,-344.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#333333").ss(1,1,1).p("AifgnQAQAHCPAjQCTAlANAA");
	this.shape_8.setTransform(-125,-344);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#333333").ss(1,1,1).p("AhygxQCVA7BQAo");
	this.shape_9.setTransform(-93.5,-342);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(1,1,1).p("AiugxQBhARBpArQBZAlA6AC");
	this.shape_10.setTransform(-67.5,-338);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#333333").ss(1,1,1).p("AjRhUQCPA0BfAoQCNA8AoAR");
	this.shape_11.setTransform(-19,-334.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(1,1,1).p("AjvAAQAwAHDYAXQAPAABLgVQBNgTAwgT");
	this.shape_12.setTransform(29,-355);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(1,1,1).p("AiaA3QAugYB9goQBUgcA2gR");
	this.shape_13.setTransform(98.5,-394.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#333333").ss(1,1,1).p("Ak6g7IFJAAQBgAcDMBb");
	this.shape_14.setTransform(187.5,-399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(22));

	// Layer 4
	this.tree = new lib.treemc();
	this.tree.setTransform(-179.5,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.tree).wait(1).to({x:-177.5,y:-9.5},0).wait(1).to({x:-165,y:-20},0).wait(1).to({rotation:6.7,x:-153.5,y:-21.8},0).wait(1).to({rotation:16.2,x:-136.7,y:-27.5},0).wait(1).to({rotation:27.5,x:-127.2},0).wait(1).to({rotation:25.7,x:-114.7},0).wait(1).to({rotation:28,x:-102.2},0).wait(1).to({rotation:34.2,x:-89.2,y:-34.5},0).wait(1).to({rotation:22.7,x:-82.2},0).wait(1).to({rotation:16,x:-70.7,y:-29.5},0).wait(1).to({rotation:6.5,x:-62.2},0).wait(1).to({x:-52.2,y:-21.5},0).wait(1).to({rotation:5.9,x:-43.7,y:-10},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:0,x:-35.2,y:-4.5},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-27.2,y:-10},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:-14.2,y:-4.5},0).wait(1).to({scaleX:1.59,scaleY:1.59,x:6.8},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:5.4,x:25.3},0).wait(1).to({scaleX:1.97,scaleY:1.97,rotation:14,x:38.8},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:21.2,x:49.8},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:14.5,x:61.3,y:-12.5},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:7,x:80.8,y:-21.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.5,x:94.3,y:-26.5},0).wait(1).to({rotation:4,x:106.8},0).wait(1).to({rotation:0,x:120.3,y:-32},0).wait(1).to({x:136.8,y:-27},0).wait(1).to({x:145.3},0).wait(1).to({x:154.8},0).wait(1).to({x:162.8,y:-17.5},0).wait(1).to({x:167.8,y:-11.5},0).wait(1).to({x:172.3},0).wait(1).to({x:177.3},0).wait(1).to({y:-5},0).wait(1).to({x:182.3},0).wait(1).to({x:186.3},0).wait(1).to({x:190.8},0).wait(1).to({x:192.8},0).wait(1).to({x:197.8,y:1},0).wait(1).to({x:202.3},0).wait(1).to({x:205.5,y:2.1},0).wait(1));

	// Layer 3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#333333").ss(1,1,1).p("AAPBYQAEAFAGAGQAKhjAAgYQAAgZgKhjQAAAOgFBrQgFBUAAAfgAAPBXIAAibIgKgUQAAAdgCAeQABAJABAKQAFA2ACAoQABABACACIAAABQAAADAAADgAgEBZIAAjPQAEArADAuQgCAdgBAeQgCAeAOAYQABAHAAAIIgEgBQgIgDgFgGgAAPBjIgCAAQABAVABAQIAAglIAAgFAAPCIIAAANAgOBMIAAAMQAAgCgCgHQgFgPgNgZIAAh/QACArADAfQAAACAAADQAIAKACAPQAFAeAAANgAgdgJQAEAoALAtQAFAQAFARIAAgU");
	this.shape_15.setTransform(-182,2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#333333").ss(1,1,1).p("AgEgGIAJAcQAGgGAIguQAFglABgOQAAAUAKA5QAKA8AAAaAgEhKIAABEAgshAQAiAygCAnQgBAkAJALIAAhO");
	this.shape_16.setTransform(-177,-1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#333333").ss(1,1,1).p("AABg1IgBgBQAAAGgBAGQgChQAAggQADAqABA7QABAdACAfQABgFAAgCQACgHACgGQgBgEgBgDQgDgcgDgFgAgrBaQAAgWgDg7QAAgHAAgGQABgwACgqIAUAAQAGAcAEAgQAAgGAAgEIAFgPQAAAOAAAYQgBAHAAAJQADAZADAcQABgHACgIQABgNADgNQABAXAAAZQACAAABAAQACABAAADIAAgqQAAgLgBgTQARhSAOgdQAABdgKA4QgFAdgDAUQgGAmgBANIAAAeQAGgeAFgaQAUhjAEgsIAAgPQAEAsAAAaQgCA0gRAbIgJAJIgBABIgDgaAgwBIQABgoABgkQgDhBgEgoQAEB5ABA8IAAAcAgKgPQgCAGgBAFQAAgTAAgLQACAJABAKQABAFAAAFQgBAmgDA+QAFgYAFgXQADAfAAAiQAAgrAAglQgBgpAAgiQgEAMgDAJQgBADgBADgAgNgEQgHATAAADQACAXAAA2QAEhAABgjgAAAB2IAAgFAAAB2QAAADAAAEIAAAUQAAgOAAgNgAgrBaIAAAFAgmg2QgFA4AABY");
	this.shape_17.setTransform(-169.1,-7.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#333333").ss(1,1,1).p("AgThbQABgDACgDQAGgTAHgSIADgKQAAAsgTBUQAIgYAIgYIADgKQAAAjgNBAIAAAPQAHggAKgtQAMgsAEgNQAAAMgFA/QgFA8AAAEQAEglARgtQAbhMACgGQAAAvgTBFQgDAKgSA6QgOAtgGAQQgEAOgEAAQgFgtAAgPAgggvIACgOQAEgZADgNQAAAMgBAPQACgKADgJQgBAUgDAsQgBAIgBAKQADgSAFgZIACgHQABgFABgFAghgQIAAgXIABgIQAEgNAEgMQgDAZgGAfQgCAHgCAJQgHAdgOAzQAAgiAThEQADgNAEgMAgZgIQAAgBAAAAAgZgIQAAABAAAAQgBAHAAAEQAAADAAADQgBADgBADQgDAJgCAJIAAgFIAAgBQAAgDABgCQACgIAFgXgAgRg0QgCAKgEAPQgFAPgFARIAAgVAghAdQAAgBAAgBQAAgBABgDQABgDAAgBQADgIACgHQADgJAEgLQgEANgDANQgCAaAAAOIgFAAIAAgQQgFATgEAPIgDAJQgIAcgDANQAGgiARg4IAAgXQgFAOgFARQgQA0AAAqQAAAHABAIQAAgLACgQQgCAKgBACAgqBEQAFgXAEgQ");
	this.shape_18.setTransform(-155.5,-12.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#333333").ss(1,1,1).p("AgRhKQASgtAQAAQAAAIgBAJQAOgZARgbQgUBGg6CfQgGAYgCALQgCAIAAACQADgJAEgKQASguAbhDQAJgVAJgSQAFgJAGgKQABgCABgCIAFgKQgEASgPAnQgHAQgIASQgOAlgdBFQAAABgBABQgDAFgCAFQAAgDAAgCQABgJABgKQAHgpAbg7QAOgaAPgaQAGgQAHgOQALgYAJgTQAAAsglBNQgHANgJAUQgBABAAABQgPAhgXAwAgRhKQgHAVgKAdQgbBTAAAKQAAgbAbhLQAJgYAIgRgAgfBzQgDAGgCAGIAAgCAAIAgQghBpgBAIIgKAKIAAgcQgKAYAAAEQAAgTAHgaQAJgjAVgyQAJgVAlhOIAFgKQAAACAAABQgBAEgBAHQgEAPgIAcQgIAYgLAhAAQhmQgBArgPApQgIAaghBDQAYhfARgtQAGgSAKgTgAACiBQgEAKgPAt");
	this.shape_19.setTransform(-144.7,-15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#333333").ss(1,1,1).p("AAohsIAAgBQgBABAAAAQAAABAAAAQgCAEgCAEQgbA3gRAmQAIgYAHgUQACgEABgDQAgg7AYgwQAAAFgZAzQAGgNAJgNQgFAPgvBzQgGAQgGAQQgKAXgJAVQACgJACgJQABgGABgGQAGgaAHgVQAAAAAAAAABBhtQgBAIgQAiQAMgTAKgNQAPgPAFAFQgKAZgeBGQAPgeAPgUQgKAlgdAtQgQAagKATQgFAIgDAHQgCACAAAAQAKgbATgoQAIgOAIgNQgOAbgQAlQgCAGgDAHQAAABgBABQgEAKgDADQgFAKgCAHIgGAPQASgmAlgsQAegjABgLQAAAdgUAPQgUAPAAAYAAohsIgBAAAAnhrQgHAQgnBRQgBADgBACIAAgBQgIAQgHAPQgtBVgUA3QAAgwBfinQAPgbASgegAgYA2QAHgNAIgNQAhg6AYglQgKAUgOAbQgkBGgRAZQAAgCABgBIAAAAAgWAqQAIgTALgWQAlhKAGgjAgJBzIADgFAgJgFQgZAxAAAaQABgBAAAAQAFgNAGgOAgcBIQgLAZgKAXQAFgVALgeQAEgIAFgH");
	this.shape_20.setTransform(-135.5,-18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#333333").ss(1,1,1).p("AgQhlQAAABAAAAQgLARgKAUQgOAcgcA7QgCAFgDAGQANg5AcgrQAIgMASgWQABgBAAgBQABgBABgBQARgdAQgRAgRhjQAAgBABAAQAPgTAUgZQgLAUgkA0QgZAngPAqQAAAAgBABIgKAPQAAgBAAAAQABgYAmg+QAMgUALgRgAgtgUQAJgRALgSQAOgXALgTQAVglASgZQAAAEg6B0QgZAxgQApQgOAjAAAJQAxhYAdg2IABgDQAeg3AOgZQgXAmgRAhQgCAEgCAFAgtgUQgLAPgMAOQgGARgFATQAJgYAZgpgAA4iPQADgFAAgBIAFgJQAAACgIANIgHANAAiikQgOAZgUAqQgEAHgEAJQgRAfgUAeAAEgvQgwBfAAARQAehEAQgkQAfg/Azg0QACAGhJCLQg/B7gIApQgBAGAAAE");
	this.shape_21.setTransform(-120.5,-15.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(1,1,1).p("ABBhtQgFAEgNAQQgXAbgvA6QgWAbgPASQAHgPAFgIQAJgRAAgBQAXgoAVgdQAUgcAUgRIAKgKQgDAQgFATQgGATgJAVQgNAigTApQgpBVgCAIQAThUA4hUQAlg0Azg1QAAAFghA5QgqBJgUAnQgSAogIAcQALgdAbgyQA2hfATgNQgmBNgvBJQgXAlgLAXQgEAHgDAFQgJAPgEAHAAFhFQgFAHgDAHQgaApgTAgQgIANgIAOQAAAAAAABQgbAgACgDQAAgYAog7QAmg6AkgmQAAACgUAhgAg8ApQgCACgCADQg2BjgBAKQAnhMAUgmgAgBBYQgFANgDAK");
	this.shape_22.setTransform(-111,-19.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(1,1,1).p("AAbhVQgCADgDADQgWAggQAZQAHgNAIgOQANgZAPgVIAAAKIAAALQAdghApgqQAAADggAsQgaAkgUAdQgFAXgFAUQgEAFgFAHQg1BLgIACQAAgDAAgCQgbAsgIAQQAIgcAag4QAWguAYgqQgcAmgRAYIgNAaQgPAcgHAGQAAgjANgpIAAgBQgBAFgCAFQgFAQAAABQABgNAGgOQgBgCABgCQAAgDADgGQAAADAAAFQACgFACgFQAGgPAKgTQAVgsAvhKQgHAegaA3QAbgdAagLIAAAEQAIgMAHgKQAVgbAEAAQgIANggAugAALADQABgDACgCQASgpAUgVQgBAHgBAHQgBAPgCADIgUAcABDhKQgEAGgNASQgOATgZAiQgBABgBACQAAACgBADQACgFABgDAhNAIQALgUAUgXQAKgNAKgLQgIATgMAVQgRAggBABQgGALgJAAQgCAAgCgBQADgIADgIgAhRASQgBACgBADQgBAAAAAAQABgDACgCgAAIALQgGAWgDAWAATglQgMASgIAPQglA4gXAmQADg0A2hGQAMgUATgWQgEATgEASg");
	this.shape_23.setTransform(-97.7,-20);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(1,1,1).p("AgwA1QgKAUgIAUQgUAugDADQAAgPASgtQAUgvAbgzQAXgqAjguQAXgdANgNQAAACgZAbQghAogfA4QgIAQgHANQgPAVAAANQAAgHANgVQgGAPgEAPQgCAFAAAEQgFAQAAADQAOgiAKgWQgKATgJASgAAahMQADgDADgDQAIgKAKgJQAAAKgNAfQgKAXgbA2QgTAqgKAuQgFAXgFAYQATguAvhTQAqhGALgOIAKgPQAAAGgLAaQgTArgPAhIgNAXQgNAbgJAPAAZhLIABgBQAmgzAQgYQAAABghAvQgIALgHAKQgRAXgNAWQgJAMgHAKIAAAAQACgFADgEIAAgBQAFgHAEgGQANgUAMgRgAgYgDQgGAGgEAFQgBADgBADQAFgIAHgJQAGgKAJgLAACglQgLASgKASQgFAHgFAKQANgbACgEQgGAGgEAGAgJgZQANgZAVgZAAjhMQgTAVgOAS");
	this.shape_24.setTransform(-89.5,-19.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(1,1,1).p("AgsAjQgHAJgFADQAAgFAAgGQAFgkAtg0QAGgIAEgHQArg1AAgVQgCAIgjA5QgDAFgDAEQgoBEgUAjQAAAAAAABQgeBGgKAjQAag7AagwQAfg5AegsQAegtAegZQgCAFgZAtQgIAOgHANQgaAygZAzQgZBBgKAeQAWhWAphJQAMgUALgRQAfgrAfgYQgcA6gjBJQAIgLAKgPQAZgjAUgKQgKAqgWAsQgNAagUAkAA0hlQgXAPgiA9QgYApgPATAAiAFQgKAXgMAYIgKAPQAAgMAggyg");
	this.shape_25.setTransform(-80.7,-16.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(1,1,1).p("Ag2gJQAEgGAGgJQAUgeAKgPQAOgUAFAAQgBACgXAvQgUAmAAAgQAShAAkgyIAKgFQgIAfgRAsQgRAmgbAzQAJggAXgoQAGgIAGgJQAVghAYgMQAAAHgNAcQgRAkgKAXIgYBBQA0haAbgiQgDATgUAuQgRAqAAAgAg2gJQgFAFAAAEAAAhyQgXAbgNAgQgKAhgIAN");
	this.shape_26.setTransform(-66.5,-17.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#333333").ss(1,1,1).p("AACguQggA2gYAvQAAADgCACQgDAHgCAGQgKATgDADQADgLAHgPQAIgRAMgWQAHgKAlhAQABgBABgBQAhgmAFAAQAAAHgOAcQgIAJgHALQgvBAgUAZQgFAGgDAEIAAgBQABgsAqg8QAcguAwgwQgdArgYAogABLhoQgSAOgfApQgGAKgHANQgHAOgGAMQAGgKAJgOQAegeAUgKQAAAzgcApQgbAqAAAeQADgIAOgUQAPgUAIgHQgPAygUAjAAAAAQgYAvgPAmIgKAPQAAgHAOgdQAOgeAVgig");
	this.shape_27.setTransform(-58.5,-10);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(1,1,1).p("AgcgvQgCAEgBAFQgJAigLALQAPgrAFgHQAAgBADgDQAIgKAbgdQgCAFgUArQgWArgJAWIgKAUQBIh5AVgbQAAAIgJAWQgCAFgDAFQgIAUgaA1QgRAngKAfQAYhSAAgBQAOglAcghQAHgIAHgHQAAAGgKAfQgDAHgbBKIgCAOQgBAJgCAFQAEgNAPgcQATgiAMgVIAKgFQgVBBgYBOAgBhlQgSAYgJAeAgDA8QgCAFgBACAgpBbIADgJ");
	this.shape_28.setTransform(-47.7,-0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#333333").ss(1,1,1).p("AAAg1QgOATgRAgQgOAZgOAdQAAgLAVgqQAVgsAIgGIAJgFQAAABAAACQAAAQgGAeQgDAJgDAOQgEAJgDAMQAAgIADgIQACgDACgCQABgEACAAQAAAKgEAZQgDALgDAOAAUhHQgKAGgKAMAAaADIAAAAQARgFARgdIgFAUAAUAqIAGgnAgNAvQAHgUAQgaQAhgrAHgJQgCAHgQAgQgEAIgCAH");
	this.shape_29.setTransform(-38.5,2.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(1,1,1).p("AgOhvQAAgBABgCIAAgFQgBAEAAAEgAgiACQACgPABgKQAGgvAMhKQAAAIAAAHQAAABAAABIAAAIAgShJQACgQACgSQAAgCAAgCAAPiBIAAAKAAFhPIAAAIQgBAWgDAfQACgGABgGQABgUAAgOIAAgHAALg9QAFgdgBgTIAAgKQgBAYgDAiQgCAQgCATQgBAPgCALQgBACgBADQABgTABgQQAEgRADgOgAAbAXQAAgEAAgEQgCgRAAgJQgBgRAGgLQgTATgHAUQgCATgBAMQABgNAAgNQAAAEgBACQgBAOAAAUIAAAAAABgSQgBANgBAOIgHA4QAfgOAEgcQABgDABgCQABgEAPg6QgUCfAAAeAgQA6QAEgdALghQABgHABgHAABAfIAAAEQgBAGAAAEIAFAKQAQgWAGgKAgShJQgEAcgIAiQgCAIgCAFQgLAxACAOIAAAUQAGg0ADgfAgOgeQgHAMgBAJQAAAGgBAIQAAgcAFgyAgOgeQAAAygCAmQgBAcgBATAgIgnQgDAFgDAEAgNhyQAAAugBAm");
	this.shape_30.setTransform(-29,4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#333333").ss(1,1,1).p("Ag5ghQAJgcAPgZQAAAJgHAkQgEAWgOBCIAAAeQAIgaAXhMQAThBANgkQgFAvgaBJQgWA8AAAwQAdghAQg6QAMg/ALgdQgFAjgKAtIgFATQgDAVAAAIQAAANADACQALgQAKgPQgVAzAFAtAAVAfQAkg4ANgkQgPAeghA6QgBACAAACgAg5ghQgCAKgBAMQgIAxAAAYQgDg0AOgrgAgwhMQgEAPgFAc");
	this.shape_31.setTransform(-15.5,6.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(1,1,1).p("ABVhnIACgGAgxAoQAohQALgdIAFgKQgnBEgRAzgAgkhZQgTAUgRAxQgIAYgGAaIAAAoQALgvAKgXQANghAVgVQAAAfgSAmQgRApAAATQAJgTAIgQQgMAmAAAgQAhgUARgUQgFATAAAQQAOgbAMgZQALgWAKgUQgOAjAAATQgFgFgCgHAAVgGQgJAOgEAJQgNAdgGAYQAMgPAEgQQAHgZAJgUQALgbAPgVABVhnQgKAXgdA6QgJATgGAOQAjhEATgug");
	this.shape_32.setTransform(0.3,5.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AgkA6QgEARAAARQANggAVgtQAZg3AOgVIAKgKQgIAhgbAzQgUAqACAMQALgpAjgvQAng2ARgaQgGAcgwBZQgbAygpBRAgkA6QARgeATgqQAAgDABgCQgGANgKAMQgPAagGAagAgygCIAAAAQAAgBAAAAQAGggAIgNQAQgYAUgiQgEAOgFAQQgLAggWAmQghA4gLAbQgDAGgCAEAgygCQAAAAAAABQAAgBAAAAAAAiSQgYAegQA7QgKAnAAAQAgygDQAUgoAVghQAMgWAPgSQABAmgcA7QggA/gEAcQAEgGAFgIAhWBNQARgsATgjAABgTQASgmATgTQgPAYgWAhg");
	this.shape_33.setTransform(17.7,7.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("AA7hjQgGAKgHAKQgcArgNAWQguBPACBGQAJgGATgcQgDgKAAgGQAAgzAogwQAXgZAegZIADgCQAEgDADAAQgEAPgIAWQgEALgGAOQgGALgEAKQgBABgBACQgEAHgDAGQgBAEgBADQACgCABgBQgBACgCADQgBAEgBACIgFAKQAAgBAAgBQAAgEABgDQAAgQAEgPQACgFACgDQAAgBABgBQAAAKgBAPQgFAIgDAIQgKAUgFARQAIgRAGgNQACgEACgEQACgEABgEQAAABAAABQgBAHAAAKQgKAQgMAPAgHglQANgYAJgIQAKgIAEAIQgIALgHALQgTAegVAfQgHALgGAKQAGgWAOgTQAEgGAng0QgFAJgFAIQgiA7gWAkQABgHACgGQgPAXgMAUQACgEABgFQABgEACgEQADgGACgGQgCAGgDAGQANgmAUgkQAWgmAshEQgdAxgRAhQgUAigKARQgHALgFANQAOghAQgYQAGgKAGgIgAgqAzQAWgjAZgmQA8haATglQgGAQgKASQgFAIgEAIQgZAjgYAjQg0BNgCAQQABgHABgGQAAgBAAgCQgJAPgGAMQAHgMAIgMgABog7IgHAOAAxAiQAQggAOgVQAAAEAAAEQAAABAAABQgMAVgMAaQgCADgDAFQgCAFgDAFAALA9QANgVAKgUIAFgPQgKASgLAUQgMAUgGAUQABgFADgEIACgDQACgDABgCIACgFQAKgPANgUQAHgKAHgJQABgEAAgDQAAACAAADQAQgWAMgPQANgSAJgJQgJATghA2QgFALgDAJAAyAuQAFgOAGgMQADgFAPgaQAHgPALgTQgJARgJATQgEAZgVAuQgcA9gCAHQAMgxAOgjgAg9A+IABgBQAAAAAAAAAg3AxIAGgLAgJBrQgBgEgBgCQAEgGADgGQACgDACgDQAAACgBACQABgGAEgHAgJBrQgDAGgCAHAhFBTQgCACgBADQgEALgEAMQABgBAAgBQAEgGAEgHQACgJADgJQgBADgCACQADgHADgHQABgEABgDQgGANgFANQgVAlgKAZQALgSAMgVQgCAEgBAFQACgGACgFQAFgOAFgMgAg5BLQgOAXgBAFQAAgDABgEQAHgKAHgLgAgJBrQACAGADAHQAKgNAMgNQACgDADgDQAAgBAAAAQABgCABgCQAAABgBABIgBACAgBBXQgEAKgEAK");
	this.shape_34.setTransform(31,6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#333333").ss(1,1,1).p("AALhRQATgmAPgPQgpBcgVA0QgmBWgHAbQAIgYAyheQAig2AUgoQgMAsghA7QgZAxgJA+IgFAKAgkgGQAIgSAJgSQAYgvAKgKQgCAJgCAJAgdAKQAEgJAEgHQATgtANgeQgKAigaAxQgBAFgDADQgfA7gEAkQAPgsAUgzgAgOhPQgBAMgTA2QgBAEgBADQgSAvgKATAgdB9QAOgbAgg9QAig6AOgmQgEASgsBSQgpBSAAAHAg+B7QgBAEgBAD");
	this.shape_35.setTransform(45.4,4.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(1,1,1).p("AgMgMQgBABAAABAghAoQAGgQAFgPQAEgJAFgKQAAABgBAAQgKAagJAXIgDAKQgVA2gHAVAAahoQgjA+gUAtQgIASgqByIgFAKQAAgTAPgrQAPgrAZg2QASgmAbgyQAXgoAAgCQAAAIgKAbQgCACgBADQgBAEgCADQgXAzgMAiQARgoAig0QgRBGgpA8QgjAxAAAtQARgmAgg3QAQgdAhg5QgWApgNAZQgUAugNA0QAVggAkhDQAig5ADgDQgFAOgGAQQgNAdgSAlQgOAcgOAeQALggAgg+QAIgPAIgPQARgkAJgYQgLApggBHQggBKgKAm");
	this.shape_36.setTransform(57.4,-2.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#333333").ss(1,1,1).p("AgyhTQgPAegYAwQgWAugFALQAAgTA0hcQAHgNAHgLQArhJAOAAQgaA+gsBZQggA/gVA2QApheAIgQQAyhhAsguQgJAhgqBiQgtBmgCAFQAdg6AWgnQAZgtAlg4QAAAlgrBCQgtBEAAAlQALgNA8hpQBBhxAbglQhQChgPBNQgPBLgIAKIAAge");
	this.shape_37.setTransform(75.2,-5.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(1,1,1).p("AAwiQIgBADAgcBwQARgpAuhUQAjg/AAgHQAAAoghAyQggA0AAAuQAHgPANgSQAMgTAIgIQAAAKgFA8AgLAHQAAAAgBABQgsBygIAXQAQg9AlhNQACgEABgDQAhhEAegoQgEATgUAuQgaA6gOAjIgTA+IgLAhAg9BhIgDAIQgCAHgDAIAAUh2QgPANggBgQgRAvgRA7QAUg+AkhFQAqhVAKgWQgRAogpBs");
	this.shape_38.setTransform(88.9,-14.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(1,1,1).p("AgWAcQgTArgKAfQAAgKACgJQAKgXANgaQgHAPgCAGIANgbIAdg9QAIgMAqgqQAAAggWA8QgUA5gQAeQgQAZgBANQgBAHADAFAAbiEQgnA2gSAxQgLAbgUBUIAAAeQAFgOAHgPQAGgjAVgpQAhhCAGgSIAFgKQAAAHghBOQgJAWgGAOQASglAVgqQgJASgFANQgMAVgJAVAAbhJIgOAcAAbhJQADgEACgFQAcgzACgIQgUAngPAdg");
	this.shape_39.setTransform(101.7,-14.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(1,1,1).p("AABABQAggpAlgkQAAADgTApQgbA9gJAXQgTA3gFAZQAFgFBPh9IAPgSQgWAdgVAiQgqBDgJAhAghATQAHgLAHgKQA+hmAvgvQg0BXgiA/QgCABgBABQg9B1gEAiQgLghA1hRQAMgTALgSAghATQgFAKgGALQghA9gMAkQAGgiAyhUgAgYgQQgdAbgFAJQAFgLAVgdQANgUAYgkIAKgKQgSAxgeA4");
	this.shape_40.setTransform(111.9,-16.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("AgKg5QAJgIALgLQAVgTALgQQgFAMgbA0QgkBGgZAxQgUAoAAAKQARgZAthWQAwhTA6g7QgfA8geA7Qg5B1AAARQAIgoAvhFQAYghAdgkQAAApgiBQQgaA8gPAWAg7AUQAFgkAggeQADgDAFgEQAEgHAEgGQgBAEgDAFQgHANgPAZQgUAcgJAcQAAgIACgJQADgGAEgIQAUghASgaQACgCACgCAAgiSQgsAqgtBaQgoBMABAUQAHgKAeg0");
	this.shape_41.setTransform(128.6,-13.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(1,1,1).p("AgSAoQACgxAQggQACgIAFgLQAJgRAOgYIAFgKQgkAegaAsQgbArAAAkQAIgTAUggQARgaAQgZQAHgIAGgIIAMgPQAOgPAEAAQgNAmgqBSQgIAOgFAMQgVAtAAAbQAAgFAnhVIAFgJQgDAIgCALIAJgNQALgQAKgOIAKgKQAAAlgNApQgKAggHAIAAUgeQgNAXgKAcQgOAjgCABQAAgJABgIAAbgqQgBACgBABQgDAEgCAFQgIAPgHAcIAyheQgRAWgIANIgDAEQgDAFgEAH");
	this.shape_42.setTransform(140.9,-12.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(1,1,1).p("AAth5IgJALQgjAxgYApQgBACgBADQANgVAMgTQAVgcAYgXQAAAGgcAyQgKASgHAPQAng7AfgUQgXA4gqBKQgYAwgMAbQgFALgDAHAgfBtQAFgKAIgPQAZgwArg5IAjgjQgIAVguBMQgjA/AAArQgKAAgKAFAAjicQgMAPgaBHQgLAcgJAWQg4BZgFA1QAIg7AwhJQABgDACgCQgFAMgEAIQALgTAUghQADgEAAgEQAWgiAOgVAAAgRQgiA8gFAJQgeBBgPAoQAAgsA8heQAMgTAMgRgAgiAFQgKAWgFAK");
	this.shape_43.setTransform(150.4,-13.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(1,1,1).p("AAOg+QALgSAPgYQgJAPgIAQQADgFAEgFQgJAQgLATQg4BjgUAkQAGgXANghQAUgsAagsQAegzAagjQAOgTADgEQgDAHgEAGQgIAQgIAQQg6BRgUAzQASgfALgWQAGgIAIgMQAEgFAFgGQgMAUgLAVQgoBEgVApQAKgWAKgTIAFgKQAPgaAVgnQAGgKAIgNgAAohoQADgGAEgHQAGgIAEgGQAKgRgCgFAAxh5QgFAIgEAJAAehTQAMgPAPgTQgFALgZA2QgZA2gSAnQg2BvgBAPQAAgJAHgUQAGgWAHgOAA5iDQgLATgQAdAgdALQgBADgBACIgFAKAgpAkQAGgNAGgM");
	this.shape_44.setTransform(156.6,-1.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("ABSh5QgIAHgKAOQgcAigtBHQhBBkgHAbQAHgpBJhmQAQgZAuhEQASgbADAAQgHAMgLATQgYAogmBCQgfA7gRAgQgCADgBADQgJARgDAHAAegTIAMgRAAegTQgOATgQAhQgdA1gRApQAMgSAPgWQAPgWAGgIAguBhQABgCABgBQATggAYgjIAfgu");
	this.shape_45.setTransform(159.2,0.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("ABfifQg3BBgPAZQgPAahCCCQARgeAZgqQAGgKAeg0QAOgYAEgDQgOAUggBBQgoBOgNApIAFgJQAHgPASgfIA2hPIAKgKQAAACgRAVQgTAdgNAbQgPAggHAUIgDAIAg4BXQgRAhgVAo");
	this.shape_46.setTransform(164.9,1.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("AA3hCIgDAFQgCACAAADQgOAXgVAhQgWAkgSAiAgcBMIABgCQAAgBABAAQAAgCABgBQACgDAEgFQgKAeAAgPIABAAgAgaBJQgBABgBACAhUCPQgDAEgCAFABaiXQhEBBguBbQgHAOg1B8QANgbAzhNQA8hbAKgE");
	this.shape_47.setTransform(169.4,2.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(1,1,1).p("AggAzQAJgNAJgOQAhgxAcgiIAKgKQgKAVgfAwQgRAgAAANQAegzASgNQgDAPgZAhQgTAegLALABDhtQgZAcgUAiQgiA+gUAkQgXAqgBACIgKAPQAMgYAWgj");
	this.shape_48.setTransform(171.7,4.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(1,1,1).p("AA5hyQgPASgVA4QgXBCgxBPIgFAKQAFgFAlg8QAig4ARgNQgLALgQAgQgQAjgPApQANgHAKgX");
	this.shape_49.setTransform(177.2,1.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(1,1,1).p("AA0hlQgVARgmA9QgsBBAAAZQAAgHAMgVQAIgNAUggIALgKQAOgKADAAQgOAbgKAYQgFANgFAKQAGgKAHgKQAMgVAEAAQAAAagRAZQgOASgCANQgBAEABAEIgKAFQAAgFACgCQACgDAGgDAgRAwQgFALgEAI");
	this.shape_50.setTransform(181.7,2.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(1,1,1).p("AAoh0QggAugKAhQgUAxgMAZIgFAPQAFgHAMgQQAOgRANgNIAKgKQgPAlgIAQQAOgcAJgPQAAADgNAZQgFAPgGAMAgIAqQgEAJADADQgJATgGAOQgKAZgFAF");
	this.shape_51.setTransform(186.4,3.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#333333").ss(1,1,1).p("AAqhyQgqBOgCAIQgaA2gNBAQAYg8AigiQAAAjgPAeQgLAbgbAb");
	this.shape_52.setTransform(189.2,6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#333333").ss(1,1,1).p("AgGgYIgXAXQAGgbArhOIAFgKQgHAhgYA7QgRAkgaAyQAohEAdgtIAKgKQAAAKgKA1QAGgaAYgvQAAAPgVAqQgYAxgQAuIgGARAgTBqIACgIQgBACgBACgAgYB1IAFgL");
	this.shape_53.setTransform(192.9,9.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(1,1,1).p("AAKgrQAKgNAKgNQAAAdgXAiQgVAgAAAdQASgmABgCQAEgFAagdQgBAIgSAjQgQAiAAAMAgLgJQAIgTAXgpQgFAPgFALAgLgJQABgDABgCIgFAKQABgCACgDgAgJgOQABgBABgCQAHgKAGgLQACgDACgCQgGAPgFAIQgRAUgQAeQADgMAUgb");
	this.shape_54.setTransform(198.4,10.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(1,1,1).p("AACglQgCALgEAHIgFATQATgnAAgPQgEAIgEAJQgLAcgPAsIgFAUQAFgHA2hwQgFAUgOAsQgIAZgDAVQgCAHgCAHIAGgYQgCAFAAAFQgGAMgIAMAAKhFQgEATgEANAACAkIADgGIAFgKQgEAIgEAIg");
	this.shape_55.setTransform(202.9,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.3,-46,29.6,64.4);


// stage content:



(lib.timelineanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.main = new lib.mainmc();
	this.main.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(355.7,354,29.6,63.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;