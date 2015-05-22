// class Engine
function Engine(){
	this.lastTimeMsec=0;
}
/**
 * Initialize the Engine
 * @param  {object} renderer     renderer THREEJS
 * @param  {object} scene        scene THREEJS
 * @param  {object} camera       camera THREEJS
 * @param  {array} sceneContent array of object in the scene
 */
Engine.prototype.init = function(renderer,scene,camera,sceneContent){
	var _this = this;

	/**
	 * animation/update loop
	 * @param  {number} nowMsec present time in seconds
	 */
	function animationLoop(nowMsec){
		requestAnimationFrame(animationLoop);
		
		// get delta from nowMsec
		var myDelta = _this.getDelta(nowMsec);

		// call general update function 
		_this.update(myDelta/1000,nowMsec/1000,sceneContent);

		// render scene
		renderer.render(scene,camera);
	};

	// call function
	animationLoop(Date.now());
}
/**
 * General update
 * @param  {number} delta        seconds between 2 iterations
 * @param  {number} now          present time in seconds
 * @param  {array} sceneContent array of objects in the scene
 */
Engine.prototype.update = function(delta,now,sceneContent){
	// control camera deviceOrientation
	APP.controls.update();
	// For each object in array, call update if it exists
	sceneContent.forEach(function(object3D){
		if(object3D.update)object3D.update(delta,now);
	});
}

/**
 * Delta Calculation
 * @param  {number} nowMsec present time in seconds
 */
Engine.prototype.getDelta = function(nowMsec){
	// get time of the last call
	this.lastTimeMsec	= this.lastTimeMsec || nowMsec-1000/60
	// get delta between now and last call
	var deltaMsec	= Math.min(200, nowMsec - this.lastTimeMsec)
	// set last time as now
	this.lastTimeMsec	= nowMsec

	return deltaMsec;
}
