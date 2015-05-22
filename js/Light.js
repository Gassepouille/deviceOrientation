// class Light
function Light(){
	// initialize light
	this.object3d={};
	this.object3d = new THREE.PointLight(0xffffff,1,105);
	this.object3d.position.set(10,10,10);
}