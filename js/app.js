var APP = {
	/**
	 * Initialize application
	 */
	init:function(){
		// array of objects in the scene
		var sceneContent = [];
		// setScene
		var scene = new THREE.Scene();
		// setRenderer
		var renderer = new Renderer();
		// setCamera
		var camera = new Camera();
		sceneContent.push(camera);
		// setLight
		var light = new Light();
		sceneContent.push(light);
		// setCompass
		var compass = new Compass();
		sceneContent.push(compass);

		var radius = 20;

		APP.controls = new THREE.DeviceOrientationControls2( compass.object3d, camera.object3d );

		// set the focus of the camera toward the center of the scene
		camera.object3d.lookAt(scene.position);

		// add all objects stocked in the array to the scene
		sceneContent.forEach(function(objects){
			scene.add(objects.object3d);
		});

		// cube test
		var geometry = new THREE.TorusKnotGeometry( 3, 0.5, 50, 16 );
		var material = new THREE.MeshNormalMaterial();
		var mesh = new THREE.Mesh( geometry, material );
		scene.add(mesh)


		//setEngine and initialize
		var engine = new Engine();
		engine.init(renderer,scene,camera.object3d,sceneContent);
	}
};