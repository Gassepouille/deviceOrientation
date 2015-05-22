// Class Compass
function Compass (){
	// Initialize Compass
	this.object3d = new THREE.Object3D();
	this.object3d.position.set(0,0,0);

	// Circle
	var material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
	var geometry = new THREE.TorusGeometry( 10, 1, 4, 10 );				
	var torus= new THREE.Mesh( geometry, material );
	this.object3d.add(torus)

	// North - South hand
	var geometry = new THREE.CylinderGeometry( 0.1, 1, 24, 4 );
	var material = new THREE.MeshLambertMaterial( {color: 0x0000ff} );
	var cylinder = new THREE.Mesh( geometry, material );
	cylinder.position.set(0,0,3);
	this.object3d.add(cylinder)

	// East - West hand
	var geometry = new THREE.CylinderGeometry( 1, 1, 20, 4 );
	var material = new THREE.MeshLambertMaterial( {color: 0xff0000} );
	var cylinder2 = new THREE.Mesh( geometry, material );
	cylinder2.rotation.set(0,0,Math.PI*0.5);
	this.object3d.add(cylinder2)

	var geometry = new THREE.TorusKnotGeometry( 8, 1, 50, 16 );
	var material = new THREE.MeshNormalMaterial();
	var mesh = new THREE.Mesh( geometry, material );
	// this.object3d = mesh;

	// Device orientation listener to display value in html
	window.addEventListener( 'deviceorientation', function(event){
		var alpha = Math.round(event.alpha)
		var beta = Math.round(event.beta)
		var gamma = Math.round(event.gamma)

		document.querySelector("#orientation").innerHTML = "Orientation  =  "+window.orientation;
		document.querySelector("#alpha").innerHTML = "Alpha =  "+alpha;
		document.querySelector("#beta").innerHTML = "Beta =  "+beta;
		document.querySelector("#gamma").innerHTML = "Gamma =  "+gamma;
		
	}, false );
}


