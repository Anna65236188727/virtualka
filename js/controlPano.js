const Panorama1 = new PANOLENS.ImagePanorama('assets/Panorama_1.jpg');
const Panorama2 = new PANOLENS.ImagePanorama('assets/Panorama_2.jpg');
const Panorama3 = new PANOLENS.ImagePanorama('assets/Panorama_3.jpg');
const Panorama4 = new PANOLENS.ImagePanorama('assets/Panorama_4.jpg');
const Panorama5 = new PANOLENS.ImagePanorama('assets/Panorama_5.jpg');
const Panorama6 = new PANOLENS.ImagePanorama('assets/Panorama_6.jpg');
let imageContainer = document.querySelector('.panorama__container');

let SpotPositions = [
    // Панорама 1-2
    new THREE.Vector3(2100, 200, 0),
    // Панорама 2-1
    new THREE.Vector3(-2100, -550, 150),

    // Панорама 2-3
    new THREE.Vector3(3100, 0, 500),
    // Панорама 3-2
    new THREE.Vector3(-1000, -600, 1200),

    // Панорама 3-4
    new THREE.Vector3(1000, 0, -100),
    // Панорама 4-3
    new THREE.Vector3(-700, -700, -3100),

    // Панорама 4-5
    new THREE.Vector3(-2100, 0, 2000),
    // Панорама 5-4
    new THREE.Vector3(1900, -200, -1950),
    
    // Панорама 4-6
    new THREE.Vector3(2100, -300, -700),
    // Панорама 6-4
    new THREE.Vector3(-100, -200, -2200),
]

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
    autoRotate: true,
    autoRotateSpeed: 0.4,
    cameraFov: 100
});


Panorama1.link(Panorama2, SpotPositions[0]);
Panorama2.link(Panorama1, SpotPositions[1]);

Panorama2.link(Panorama3, SpotPositions[2]);
Panorama3.link(Panorama2, SpotPositions[3]);


Panorama3.link(Panorama4, SpotPositions[4]);
Panorama4.link(Panorama3, SpotPositions[5]);

Panorama4.link(Panorama5, SpotPositions[6]);
Panorama5.link(Panorama4, SpotPositions[7]);

Panorama4.link(Panorama6, SpotPositions[8]);
Panorama6.link(Panorama4, SpotPositions[9]);


viewer.add(Panorama1, Panorama2, Panorama3, Panorama4, Panorama5, Panorama6);
