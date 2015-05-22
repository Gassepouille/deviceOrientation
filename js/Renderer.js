// class Renderer
function Renderer(){
	// initialize renderer
	this.renderer = {};
	this.renderer = new THREE.WebGLRenderer({antialias:true});
	this.renderer.setClearColor(0xffffff);
	this.renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(this.renderer.domElement);

	// On window resize, resize renderer 
	window.addEventListener("resize", function(event){
		this.renderer.setSize(window.innerWidth,window.innerHeight);
	}.bind(this));

	return this.renderer;
}