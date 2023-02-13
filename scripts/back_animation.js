let camera;
let scene;
let renderer;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        50,
        WINDOW_WIDTH / WINDOW_HEIGHT,
        1,
        1000
    );

    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(WINDOW_WIDTH, WINDOW_HEIGHT);
    renderer.setClearAlpha(0);

    const sphereGeometry = new THREE.SphereGeometry(10, 20, 20);
    const sphereMaterial = new THREE.MeshBasicMaterial({color: new THREE.Color(`hsl(${Math.floor(Math.random() * 12) * 30}, 100%, 50%)`), wireframe: true});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;
    scene.add(sphere);

    camera.position.z = 0;

    document.getElementsByClassName("js_animationContainer")[0].appendChild(renderer.domElement);

    window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
    camera.aspect = WINDOW_WIDTH / WINDOW_HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize( WINDOW_WIDTH, WINDOW_HEIGHT );
}

function animate() {
    requestAnimationFrame( animate );
    render();
}

function render() {
    camera.position.x += ( MOUSE_X - camera.position.x * 2.5 ) * .025;
    camera.position.y += ( - MOUSE_Y - camera.position.y * 2.5 ) * .025;
    camera.lookAt( scene.position );

    renderer.render( scene, camera );
}

init();
animate();