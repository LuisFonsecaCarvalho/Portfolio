import '../style.css'
import './skills.js'
import './contacts.js'
import './trophy.js'
import './home.js'

import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
// import Swiper from 'swiper'; // Import Swiper library
import 'swiper/swiper-bundle.css'; // Import Swiper styles
// import 'js/swiper.js';



// Create a scene, container that olds all my objects and lights(#config)
const scene = new THREE.Scene();

// Camera (perspective camera-mimics which humans eye balls will see) (#config)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/innerHeight, 0.1, 1000);

// Render the graphics to the scene (#config)
let renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, innerHeight);
camera.position.setZ(800); // Move the camera along the Z axis
camera.position.setY(5);  // Move the camera along the Y axis

// Keep canvas and camera in sync with the window (instead of resizing every frame)
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});



/* --------------------------------------Light--------------------------------------------------------- */

// Define Ambient Light
const ambientLight = new THREE.AmbientLight(0xffffff);

// Define a grid helper
const gridHelper = new THREE.GridHelper(2000, 800);

// Define the orbit control to make the scene move with the mause
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.noZoom = true;
controls.enabled = false;

/* --------------------------------------Add scene--------------------------------------------------------- */

// Add Objects to the scene
scene.add(ambientLight);
scene.add( gridHelper);

/* --------------------------------------Camera Movement On Scroll--------------------------------------------------------- */

// Set up variables for camera animation
let targetPosition = new THREE.Vector3(5,800,0); // Target position for the camera
const animationDuration = 4500; // Duration of the animation in milliseconds
let animationStartTime = null; // Start time of the animation

// Select elements on page that we will need
const slideNumber = document.querySelector(".swiper-slide-num");
const headings = document.querySelectorAll(".heading");

// Store speed in a variable since we'll want to use it for animations too.
const speed_an = 1500;

var z_fianlPosition=800;
var flag_animate=null;

// Define Swiper (vertical Scroll bar) instance
const swiper = new Swiper(".swiper", {
  // optional parameters
  direction: "vertical",
  loop: true,
  speed: speed_an,
  mousewheel: false,
  keyboard: {
    enabled: true
  },
  pagination: {
    el: ".swiper-pagination-custom",
    loop: true,
    bulletClass: "swiper-bullet-custom",
    bulletActiveClass: "is-active",
    bulletElement: "button",
    clickable: true
  }
});

// Tell other modules (e.g. the skills chart) which slide is showing
swiper.on("slideChange", () => {
  document.dispatchEvent(new CustomEvent("portfolio:slide", { detail: swiper.realIndex }));
});

const Swiper_Portfolio = new Swiper(".Swiper_Portfolio", {
  direction: "horizontal",
  allowTouchMove:true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: speed_an,
  mousewheel: false,
  pagination: {
    el: ".swiper-pagination_2",
    clickable: true,
  },
});

// index of the empty closing slide of the project carousel (grows with the number of projects)
const PORT_LAST = Swiper_Portfolio.slides.length - 1;

document.body.addEventListener('wheel', (event) => {

  event.preventDefault();

  const scrollingDown = event.deltaY > 0;

  if( swiper.realIndex==3){
    if((Swiper_Portfolio.realIndex==PORT_LAST && scrollingDown) ||(Swiper_Portfolio.realIndex==0 && !scrollingDown)){
      scrollingDown ? swiper.slideNext() : swiper.slidePrev();
    }
    else{scrollingDown ? Swiper_Portfolio.slideNext() : Swiper_Portfolio.slidePrev();}
  }
  else{ scrollingDown ? swiper.slideNext() : swiper.slidePrev();}
  if(Swiper_Portfolio.realIndex==0){
    swiper.slidePrev();
    Swiper_Portfolio.slideNext();
  }
  if(Swiper_Portfolio.realIndex==PORT_LAST){
    swiper.slideNext();
    Swiper_Portfolio.slidePrev();
  }

  if( swiper.realIndex==3){
    if(Swiper_Portfolio.realIndex==2 || Swiper_Portfolio.realIndex==4){scene.background = new THREE.Color(0xffffff);}
    if( Swiper_Portfolio.realIndex==1 || Swiper_Portfolio.realIndex==3 ){scene.background = new THREE.Color(0x000000);}
  }
  else{
    scene.background = new THREE.Color(0x000000);
  }
}, { passive: false });

// Event listner for mobile touch
let startY;
let startX;
let touchHandled = false;

document.body.addEventListener('touchstart', (event) => {
  startY = event.touches[0].clientY;
  startX = event.touches[0].clientX;
  touchHandled = false;
}, { passive: true });

document.body.addEventListener('touchmove', (event) => {
  if (touchHandled) return; // one navigation per swipe
  let moveY = event.touches[0].clientY;
  let deltaY = startY - moveY;
  let deltaX = startX - event.touches[0].clientX;

  // ignore taps/jitter and mostly-horizontal swipes (those belong to the project carousel)
  if (Math.abs(deltaY) < 30 || Math.abs(deltaY) < Math.abs(deltaX)) return;
  touchHandled = true;

  if (swiper.realIndex == 3) {
    if ((Swiper_Portfolio.realIndex == PORT_LAST && deltaY > 10) || (Swiper_Portfolio.realIndex == 0 && deltaY < -10)) {
      deltaY > 0 ? swiper.slideNext() : swiper.slidePrev();
    } else {
      deltaY > 0 ? Swiper_Portfolio.slideNext() : Swiper_Portfolio.slidePrev();
    }
  } else {
    deltaY > 0 ? swiper.slideNext() : swiper.slidePrev();
  }

  if (Swiper_Portfolio.realIndex == 0) {
    swiper.slidePrev();
    Swiper_Portfolio.slideNext();
  }
  if (Swiper_Portfolio.realIndex == PORT_LAST) {
    swiper.slideNext();
    Swiper_Portfolio.slidePrev();
  }

  if (Swiper_Portfolio.realIndex == 2) {
    scene.background = new THREE.Color(0xffffff);
  }
  if (Swiper_Portfolio.realIndex == 1 || Swiper_Portfolio.realIndex == 3 || Swiper_Portfolio.realIndex == 4) {
    scene.background = new THREE.Color(0x000000);
  }
}, { passive: true });

// event that fires when swiper goes to next slide
swiper.on("slideNextTransitionStart", () => {
  // console.log(swiper);
  // be careful which index you use! We want realIndex in this case
  let realIndex = swiper.realIndex;
  // change out slide number
  slideNumber.textContent = realIndex + 1;

  // animate the heading with CSS transitions.
  headings.forEach((heading) => heading.classList.remove("is-active"));
  headings[realIndex].classList.add("is-active");

  // z_fianlPosition= z_fianlPosition>100 ? z_fianlPosition-100 : z_fianlPosition;

  switch (realIndex) {
    case 0:
      targetPosition = new THREE.Vector3(0, 5, 800); 
      document.querySelector('.navbar').style.display = 'grid';
      break;

    case 1:
      targetPosition = new THREE.Vector3(0, 5, 400);
      document.querySelector('.navbar').style.display = 'none';
      break;

    case 2:
      targetPosition = new THREE.Vector3(-400, 5, 200); 
      document.querySelector('.navbar').style.display = 'none';
      break;

    case 3:
      targetPosition = new THREE.Vector3(0, 5, 100); 
      document.querySelector('.navbar').style.display = 'none';
      break;

    case 4:
      targetPosition = new THREE.Vector3(0, 100, 0); 
      document.querySelector('.navbar').style.display = 'none';
      break;

    default:
      targetPosition = new THREE.Vector3(0, 200, 200); 
      document.querySelector('.navbar').style.display = 'none';

      break;
  }

  animationStartTime = null; // Reset the animation start time
  flag_animate=targetPosition; // Start the camera animation to move to the target position

  gsap
    .timeline({ defaults: { duration: speed / 5000 } })
    .to(".front", { translateY: "100%" })
    .set(".front", { translateY: "-100%" })
    .to(".front", { translateY: "0%" });
});

// event that fires when swiper goes to previous slide
swiper.on("slidePrevTransitionStart", () => {
  // be careful which index you use! We want realIndex in this case
  let realIndex = swiper.realIndex;
  // change out slide number
  slideNumber.textContent = realIndex + 1;

  // animate the heading with CSS transitions.
  headings.forEach((heading) => heading.classList.remove("is-active"));
  headings[realIndex].classList.add("is-active");

  // z_fianlPosition= z_fianlPosition<500 ? z_fianlPosition+100 : z_fianlPosition;

  switch (realIndex) {
    case 0:
      targetPosition = new THREE.Vector3(0, 5, 800); 
      document.querySelector('.navbar').style.display = 'grid';
      break;
    case 1:
      targetPosition = new THREE.Vector3(0, 5, 400); 
      document.querySelector('.navbar').style.display = 'none';
      break;
    case 2:
      targetPosition = new THREE.Vector3(-400, 5, 200); 
      document.querySelector('.navbar').style.display = 'none'; 
      break;
    case 3:
      targetPosition = new THREE.Vector3(0, 5, 100); 
      document.querySelector('.navbar').style.display = 'none';
      break;
    case 4:
      targetPosition = new THREE.Vector3(0, 100, 0); 
      document.querySelector('.navbar').style.display = 'none';
      
      break;
    default:
      targetPosition = new THREE.Vector3(0, 5, 800); 
      document.querySelector('.navbar').style.display = 'none';

      break;
  }

  // const targetPosition = new THREE.Vector3(0, 5, z_fianlPosition); 

  animationStartTime = null; // Reset the animation start time

  flag_animate=targetPosition; 
  // startCameraAnimation(targetPosition); // Start the camera animation to move to the target position
  gsap
    .timeline({ defaults: { duration: speed / 2000 } })
    .to(".front", { translateY: "-100%" })
    .set(".front", { translateY: "100%" })
    .to(".front", { translateY: "0%" });
});

document.getElementById('go_To_Contacts').addEventListener('click', function() {
  swiper.slideTo(4); // Swiper uses zero-based indexing, so slide 5 is index 4
});

document.getElementById('w-node-_475191de-f6e8-9024-5d0a-bd63c5d18fb7-67f9e306').addEventListener('click', function(event) {
  event.preventDefault(); // the inner link is href="#"
  swiper.slideTo(1); // Swiper uses zero-based indexing, so slide 2 is index 1
});

/* --------------------------------------Event to minimize window description--------------------------------------------------------- */

const tool_buttons = document.querySelectorAll(".tool_button");
const grid = document.querySelector(".div-block");
const tool_image = document.querySelector(".image");
const tool_paragraph = document.querySelector(".paragraph");
const tool_skills_hud = document.querySelector(".skills-hud");
const tool_score_iddel = document.querySelector(".score_iddel");



tool_buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        // Toggle minimized state
        grid.classList.toggle("minimized");
        tool_image.classList.toggle("minimized");
        tool_paragraph.classList.toggle("minimized");
        tool_skills_hud.classList.toggle("minimized");
        tool_score_iddel.classList.toggle("minimized");

    });
});


/* --------------------------------------Animation Function--------------------------------------------------------- */

// Define variables for position variation
const minHeight = [];
const maxHeight = [];
const speed = 0.030;
let time = 0;

// recursive function to reanimate 
function animate(timestamp){
  // call back the animate function every time the browser repaints the screen
  requestAnimationFrame(animate);

  // Scroll Animation
  if(flag_animate!=null){
      if (!animationStartTime) {
      animationStartTime = timestamp; // Set the animation start time
    }
    
    const progress = timestamp - animationStartTime; // Calculate the animation progress

    if (progress >= animationDuration) {
      // Animation is complete
      camera.position.copy(flag_animate); // Set the camera position to the target position
      flag_animate = null;
    } else {
      // Animation is still in progress
      const t = progress / animationDuration; // Calculate the animation time progress (0 to 1)
      camera.position.lerp(flag_animate, t); // Interpolate the camera position towards the target position
    }
  }

  /*Square Animation */
  // Update the rotation
  squares.forEach((squares, index) => {
    squares.rotation.x +=squaresSpeed[index][0];
    squares.rotation.y += squaresSpeed[index][1];
  })
  

  /* Villan Animation */
  // Update the time variable
  time += speed;
  // Update the cube's position
  
    for (let index = 0; index < villain.length; index++) {

      // Calculate the new position based on time
      let newPositionY = minHeight[index] + (maxHeight[index] - minHeight[index]) * Math.sin(time);
      let newPositionX = index%2==0 ? minHeight[index] + (maxHeight[index] - minHeight[index]) * Math.sin(time) : minHeight[index] + (maxHeight[index] -  minHeight[index]) * Math.sin(time);;


      villain[index].position.y = newPositionY;
      // villain[index].position.x = newPositionX;
    }
  //Update the control animation
  controls.update();

  // Rotate the globe from the single main loop
  if (world) world.rotation.y += 0.01;

  //renders the scene and the camera
  renderer.render(scene, camera); 

}

// Create a Raycaster object
const raycaster = new THREE.Raycaster();

// Add a mousemove event listener to the renderer
renderer.domElement.addEventListener('mousemove', onMouseMove);

let hoverid;
// Define the onMouseMove function
function onMouseMove(event) {
  // Calculate the mouse position in normalized device coordinates
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Cast a ray from the camera to the mouse position
  raycaster.setFromCamera(mouse, camera);

  // Find the first intersected object
  const intersects = raycaster.intersectObjects(scene.children, true);
  // console.log(intersects[0].object.name);
  if (intersects.length > 0) {
    // Change the color of the intersected object
      if(intersects[0].object.name=="Space_Invader"){
        intersects[0].object.material.color.set(0x21EE0A);
      }
      else if(intersects[0].object.name=="Moon"){
        // intersects[0].object.material.color.set(0xfffffff);
      }
      else if(intersects[0].object.name=="Space_Invader_kill"){
        // intersects[0].object.material.color.set(0x3A8FA3);
      }
      else if(intersects[0].object.name.indexOf("Сфера")==0){
        intersects[0].object.material.color.set(0xffffff);
      }
      else if(intersects[0].object.name.indexOf("Object")==0){
        // intersects[0].object.material.color.set(0xfffffff);
        // document.getElementById("bg").style.cursor = "pointer"; 
      }
      else if(intersects[0].object.type!="GridHelper"){
        intersects[0].object.material.color.set(0xff0000);
        document.getElementById("bg").style.cursor = "default"; 
      }
      try {
        if(hoverid.object.id!=intersects[0].object.id){
          if(hoverid.object.name=="Space_Invader"){
            // console.log(hoverid);
            hoverid.object.material.color.set(0xFFFFFF);
          }
        }    
      } catch (error) {
        hoverid=intersects[0];
      }
      if(intersects[0].object.name!="world"){
         try {
            scene.getObjectByName('world').material.color.set(0x010101);
          }catch (error) {
            hoverid=intersects[0];
          }
      }
      hoverid=intersects[0];
      if(intersects[0].object.name.indexOf("Object")==0){
        // intersects[0].object.material.color.set(0xfffffff);
        document.getElementById("bg").style.cursor = "pointer"; 
      }
      else{document.getElementById("bg").style.cursor = "default"; }
  }
  else{document.getElementById("bg").style.cursor = "default"; }
}
renderer.domElement.addEventListener('click', onMouseClick);
// Define the onMouseClick function
function onMouseClick(event) {
  // Calculate the mouse position in normalized device coordinates
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Cast a ray from the camera to the mouse position
  raycaster.setFromCamera(mouse, camera);

  // Find the first intersected object
  const intersects = raycaster.intersectObjects(scene.children, true);
  if (intersects.length > 0) {
    // Change the color of the intersected object
      if(intersects[0].object.name=="Space_Invader"){
        intersects[0].object.name="Space_Invader_kill";
        intersects[0].object.material.color.set(0xFF0000);
        announceInvaders();
      }
  }
}

/* --------------------------------------Stars Populate Function--------------------------------------------------------- */

// Populate a large number of objects in the scene
function addStar(){

  const geometry = new THREE.SphereGeometry( 1, 32, 16 );
  const material = new THREE.MeshBasicMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry, material);

  // const [x, y, z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(800));
  const x = THREE.MathUtils.randFloatSpread(800);
  const y = THREE.MathUtils.randFloat(0, 800);
  const z = THREE.MathUtils.randFloatSpread(800);

  star.position.set(x, y, z);

  scene.add(star);

}

// Add 200 start to the scene
Array(1000).fill().forEach(addStar);


/* --------------------------------------Add floor----------------------------------------------------------------------- */


const geometry = new THREE.PlaneGeometry( 150, 80 );
const material = new THREE.MeshBasicMaterial( {color: 0x00000, side: THREE.DoubleSide} );
// const material = new THREE.MeshBasicMaterial( {color: 0xfff00, side: THREE.DoubleSide} );

const plane = new THREE.Mesh( geometry, material );
plane.rotation.x = 90 * Math.PI / 180;
plane.position.set(0, -1, 350);
scene.add( plane );


/* --------------------------------------Square Populate Function--------------------------------------------------------- */

const squares=[];
const squaresSpeed=[];

function addBox(){

  // Define Squares
  const geometry_LINE = new THREE.BoxGeometry( 20, 20, 20 ); 
  const edges_LINE = new THREE.EdgesGeometry( geometry_LINE ); 
  const material = new THREE.LineBasicMaterial( { color: 0xffffff } );
  material.linewidth = 5;
  const line = new THREE.LineSegments(edges_LINE, material ); 

  // Define Meteor
  const radius = THREE.MathUtils.randFloat(2, 10);
  const height = THREE.MathUtils.randFloat(0, 10);
  const radialSegments = THREE.MathUtils.randFloat(3, 7);
  const heightSegments = 1;
  const openEnded = false;
  const thetaStart = 0;
  const thetaLength = THREE.MathUtils.randFloat(3.8786724068467, 6.283185307179586);
  


  const geometry_meteor = new THREE.ConeGeometry( radius, height, radialSegments,  heightSegments, openEnded, thetaStart, thetaLength); 
  const material_meteor = new THREE.MeshBasicMaterial( {color: 0xffffff} );
  const meteor = new THREE.Mesh(geometry_meteor, material_meteor ); 

  // Create an edges geometry from the cone geometry
  const edgesGeometry = new THREE.EdgesGeometry(geometry_meteor);

  // Create a line material with the desired color
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });

  // Create a line segments object using the edges geometry and line material
  const meteorline = new THREE.LineSegments(edgesGeometry, lineMaterial);

 
  // Random generate a location to position the boject
  // const [x, y, z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(1000));
  const x = THREE.MathUtils.randFloatSpread(1000);
  const y = THREE.MathUtils.randFloat(0, 1000);
  const z = THREE.MathUtils.randFloatSpread(1000);


  let X = THREE.MathUtils.randFloat(0, 0.010);
  let Y = THREE.MathUtils.randFloat(0, 0.010);

  line.position.set(x, y, z);
  meteor.position.set(x, y, z);
  meteorline.position.set(x, y, z);

  squaresSpeed.push([X,Y]); 
  squares.push(line);
  
  scene.add( line );
  scene.add( meteor );
  scene.add( meteorline );


}
// Add 200 Boxes to the scene
Array(1050).fill().forEach(addBox);


/* --------------------------------------Load glf--------------------------------------------------------- */

const loader = new GLTFLoader();

// #####  Villains
var villain=[];
var objHidden = true;

// Load the space_invade
loader.load("imgs/3d_space_invader.glb", function (gltf) {  
  let x=-60;
  let y=0;
  for (let row = 0; row < 40; row+=10) {
    for (let column = 10; column < 120; column+=10) {
      
      column=column%50===0 ? column+31 : column;
     
      villain[villain.length] = clone(gltf.scene);
      minHeight[minHeight.length]=row-5;
      maxHeight[maxHeight.length]=row+5;
      addvillain(villain[villain.length-1], x+column, y+row, 350);

    }
  }
  announceInvaders();
  //start animation after all is loaded
  animate(); 
});

// Load the crown
// loader.load("imgs/fall_guys_crown.glb", function (gltf) {  
//   var object = clone(gltf.scene);
//   // Set the desired size of the object
//   const desiredSize = 10;
//   const currentSize = calculateSize(object); // Calculate the current size of the object

//   // Scale the object to achieve the desired size
//   object.scale.set(desiredSize / currentSize, desiredSize / currentSize, desiredSize / currentSize);
  
//   // Position, scale, and rotate the object as desired
//   const desiredPosition = new THREE.Vector3(0 , 70, 0);
//   object.position.copy(desiredPosition);
//   object.rotation.x = 90;
//   object.rotation.z = 0.01; // Rotate around Y-axis
//   object.rotation.y = 0.01; // Rotate around Y-axis

    
//   scene.add(object);
//   function animate() {
//     requestAnimationFrame(animate);
//     object.rotation.y +=0.05;
//     object.rotation.z += 0.01; // Rotate around Y-axis
//     renderer.render(scene, camera);
//   }
//   animate()

//   object.visible = false;
//   // Show Crown in the 4 slide only
//   swiper.on("activeIndexChange", () => {
//     if(swiper.realIndex==4) {
//       objHidden = false;
//       object.visible = true;
//     } else {
//       objHidden = true;				
//       object.visible = false;
//     }
//   });
// });
// // Load the github
// loader.load("imgs/logo_github.glb", function (gltf) {  
//   var object = clone(gltf.scene);
//   // Set the desired size of the object
//   const desiredSize = 7;
//   const currentSize = calculateSize(object); // Calculate the current size of the object

//   // Scale the object to achieve the desired size
//   object.scale.set(desiredSize / currentSize, desiredSize / currentSize, desiredSize / currentSize);
  
//   // Position, scale, and rotate the object as desired
//   const desiredPosition = new THREE.Vector3(-10 , 70, 15);
//   object.position.copy(desiredPosition);
//   object.rotation.x = -1.7;
//   object.rotation.y = 0.13;
//   // object.rotation.z = 0.01; // Rotate around Y-axis
//   // object.rotation.y = 0.01; // Rotate around Y-axis
//   let currentNumber = 0;
//   let increment = 0.01;
//   let end = 0.2
//   let start = -0.2
    
//   scene.add(object);
//   function animate() {
//     requestAnimationFrame(animate);

//       const result = currentNumber;
//       currentNumber += increment;
      
//       if(result)
  
//       if (currentNumber >= end || currentNumber <= start) {
//         // Reverse the direction when reaching the end or start
//         increment *= -1;
//       }
//       object.rotation.z =Math.round(result * 100) / 100;
//       // object.rotation.y += 0.01; // Rotate around Y-axis
//     renderer.render(scene, camera);
//   }
//   animate()

//   object.visible = false;
//   // Show Crown in the 4 slide only
//   swiper.on("activeIndexChange", () => {
//     if(swiper.realIndex==4) {
//       objHidden = false;
//       object.visible = true;
//     } else {
//       objHidden = true;				
//       object.visible = false;
//     }
//   });
// });
// // Load the linkdin
// loader.load("imgs/logo_linkdin.glb", function (gltf) {  
//   var object = clone(gltf.scene);
//   // Set the desired size of the object
//   const desiredSize = 7;
//   const currentSize = calculateSize(object); // Calculate the current size of the object

//   // Scale the object to achieve the desired size
//   object.scale.set(desiredSize / currentSize, desiredSize / currentSize, desiredSize / currentSize);
  
//   // Position, scale, and rotate the object as desired
//   const desiredPosition = new THREE.Vector3(0 , 70, 15);
//   object.position.copy(desiredPosition);
//   object.rotation.x = -1.7;
//   object.rotation.y = 0.13;
//   // object.rotation.z = 0.01; // Rotate around Y-axis
//   // object.rotation.y = 0.01; // Rotate around Y-axis
//   let currentNumber = 0;
//   let increment = 0.01;
//   let end = 0.2
//   let start = -0.2
    
//   scene.add(object);
//   function animate() {
//     requestAnimationFrame(animate);

//       const result = currentNumber;
//       currentNumber += increment;
      
//       if(result)
  
//       if (currentNumber >= end || currentNumber <= start) {
//         // Reverse the direction when reaching the end or start
//         increment *= -1;
//       }
//       object.rotation.z =Math.round(result * 100) / 100;
//     // object.rotation.y += 0.01; // Rotate around Y-axis
//     renderer.render(scene, camera);
//   }
//   animate()

//   object.visible = false;
//   // Show Crown in the 4 slide only
//   swiper.on("activeIndexChange", () => {
//     if(swiper.realIndex==4) {
//       objHidden = false;
//       object.visible = true;
//     } else {
//       objHidden = true;				
//       object.visible = false;
//     }
//   });
// });
// // Load the email
// loader.load("imgs/logo_email.glb", function (gltf) {  
//   var object = clone(gltf.scene);
//   // Set the desired size of the object
//   const desiredSize = 7;
//   const currentSize = calculateSize(object); // Calculate the current size of the object

//   // Scale the object to achieve the desired size
//   object.scale.set(desiredSize / currentSize, desiredSize / currentSize, desiredSize / currentSize);
  
//   // Position, scale, and rotate the object as desired
//   const desiredPosition = new THREE.Vector3(10 , 70, 15);
//   object.position.copy(desiredPosition);
//   object.rotation.x = -1.7;
//   object.rotation.y = 0.13;
//   // object.rotation.z = 0.01; // Rotate around Y-axis
//   // object.rotation.y = 0.01; // Rotate around Y-axis
//   let currentNumber = 0;
//   let increment = 0.01;
//   let end = 0.2
//   let start = -0.2
    
//   scene.add(object);
//   function animate() {
//     requestAnimationFrame(animate);

//       const result = currentNumber;
//       currentNumber += increment;
      
//       if(result)
  
//       if (currentNumber >= end || currentNumber <= start) {
//         // Reverse the direction when reaching the end or start
//         increment *= -1;
//       }
//       object.rotation.z =Math.round(result * 100) / 100;
//     // object.rotation.y += 0.01; // Rotate around Y-axis
//     renderer.render(scene, camera);
//   }
//   animate()

//   object.visible = false;
//   // Show Crown in the 4 slide only
//   swiper.on("activeIndexChange", () => {
//     if(swiper.realIndex==4) {
//       objHidden = false;
//       object.visible = true;
//     } else {
//       objHidden = true;				
//       object.visible = false;
//     }
//   });
// });

const params = {
  color: 0xffffff,
  transmission: 1,
  opacity: 1,
  metalness: 0,
  roughness: 0.26,
  ior: 1.5,
  thickness: 3.59,
  specularIntensity: 0,
  specularColor: 0xffffff,
  envMapIntensity: 1,
  lightIntensity: 1,
  exposure: 1
};

function generateTexture() {

  const canvas = document.createElement( 'canvas' );
  canvas.width = 2;
  canvas.height = 2;

  const context = canvas.getContext( '2d' );
  context.fillStyle = 'white';
  context.fillRect( 0, 1, 2, 1 );

  return canvas;

}
// Add lighting to the scene (optional)
// Set the MeshBasicMaterial for the object
const texture = new THREE.CanvasTexture( generateTexture() );
      texture.magFilter = THREE.NearestFilter;
      texture.wrapT = THREE.RepeatWrapping;
      texture.wrapS = THREE.RepeatWrapping;
      texture.repeat.set( 1, 3.5 );
//function to add villains
function addvillain(villain, x, y, z){
  
  // Set the desired size of the object
  const desiredSize = 10;
  const currentSize = calculateSize(villain); // Calculate the current size of the object

  // Scale the object to achieve the desired size
  villain.scale.set(desiredSize / currentSize, desiredSize / currentSize, desiredSize / currentSize);
  
  // Position, scale, and rotate the object as desired
  const desiredPosition = new THREE.Vector3(x, y, z);
  villain.position.copy(desiredPosition);

  villain.traverse((node) => {
    if (node.isMesh) {
      // node.material = new THREE.MeshBasicMaterial({ color:  0xFFFFFF });
      node.material = new THREE.MeshBasicMaterial( {
        color: params.color,
        alphaMap: texture,
        opacity: params.opacity,
        side: THREE.DoubleSide,
        transparent: true
      } );
    }
  });
 

  


  // Add the object to the scene
  scene.add(villain);
}

// ----- invader mini-game: main.js owns the 3D objects, home.js owns score and HUD
function invaderMeshes() {
  const meshes = [];
  villain.forEach((v) => v.traverse((n) => {
    if (n.isMesh && n.name.indexOf("Space_Invader") === 0) meshes.push(n);
  }));
  return meshes;
}
function announceInvaders() {
  const meshes = invaderMeshes();
  const killed = meshes.filter((m) => m.name === "Space_Invader_kill").length;
  document.dispatchEvent(new CustomEvent("portfolio:invader", { detail: { killed, total: meshes.length } }));
}
document.addEventListener("portfolio:respawn", () => {
  invaderMeshes().forEach((m) => {
    m.name = "Space_Invader";
    m.material.color.set(params.color);
  });
  announceInvaders();
});

// function to re-size the glf objects @imput: Object
function calculateSize(object) {
  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  box.getSize(size);
  return size.length();
}

// #####  World
// Create a point light
const light = new THREE.PointLight(0xffffff, 1, 500);
// Set the position of the light
light.position.set(0, 35, 70);
// Add the light to the scene
scene.add(light);


let world = null;
loader.load('imgs/world.glb', function(gltf) {
    var object = clone(gltf.scene);
      // Set the desired size of the object
      const desiredSize = 120;
      const currentSize = calculateSize(object); // Calculate the current size of the object

      // Scale the object to achieve the desired size
      object.scale.set(desiredSize / currentSize, desiredSize / currentSize, desiredSize / currentSize);
      
      // Position, scale, and rotate the object as desired
      const desiredPosition = new THREE.Vector3(0 , 35, 0);
      object.position.copy(desiredPosition);

      object.rotation.y = 0.01; // Rotate around Y-axis
      
    scene.add(object);
    world = object; // rotated in the main animate() loop
});

// The globe sits right behind the Contacts content: hide it on that slide
// document.addEventListener('portfolio:slide', (event) => {
//   if (world) world.visible = event.detail !== 4;
// });


// #####  Asteroid
// Create a point light
const light_2 = new THREE.PointLight("#ffffff", 4, 500);
// Set the position of the light
light_2.position.set(0, 26, 780);
// Add the light to the scene
scene.add(light_2);
// Create a point light
const light_3 = new THREE.PointLight("#ffffff", 4, 500);
// Set the position of the light
light_3.position.set(0, 26, 580);
// Add the light to the scene
scene.add(light_3);
var asteroide=[];
loader.load('imgs/asteroide.glb', function(gltf) {

  let position=[[-15, 40, 720],[11, 35, 750],[15, 10, 800],[17, 9, 750],[15, 15, 500],[37, 12, 730],[24, 14, 630],[23, 10, 670],[30, 10, 520],[15, 5, 570],[20, 15, 450],[27, 25, 744],[23, 11, 666],[18, 17, 550],[32, 20, 654],[0, 30, 611],[-40, 10, 760],[-15, 5, 750],[-15, 15, 500],[-30, 12, 730],[-20, 18, 630],[-20, 10, 670],[-30, 7, 520],[-15, 5, 570],[-20, 15, 450],[-27, 25, 744],[-23, 11, 666],[-18, 17, 550],[-32, 20, 654],[-1, 20, 711]];

  position.forEach(element =>  {
      asteroide[asteroide.length] = clone(gltf.scene);
      addAsteroide(asteroide[asteroide.length-1], element[0], element[1], element[2]);        
  });
  var object = clone(gltf.scene);
  scene.add(object);
});

//function to add Asteroide
function addAsteroide(asteroide, x, y, z){

  // Set the desired size of the object
  const desiredSize = 40;
  const currentSize = calculateSize(asteroide); // Calculate the current size of the object

  // Scale the object to achieve the desired size
  asteroide.scale.set(desiredSize / currentSize, desiredSize / currentSize, desiredSize / currentSize);

  asteroide.traverse((node) => {
      if (!node.isMesh) return;
      node.material.color.set("#ffffff"); // Change the color of the wireframe

      // node.material = new THREE.MeshBasicMaterial({ color:  0xFFFFFF });
      node.material.wireframe = true;
  });

  // Position, scale, and rotate the object as desired
  const desiredPosition = new THREE.Vector3(x, y, z);
  asteroide.position.copy(desiredPosition);

  // Add the object to the scene
  scene.add(asteroide);
}





        // loader.load('imgs/nave.glb', function(gltf) {
          
        //   var object = clone(gltf.scene);
        //     // Set the desired size of the object
        //     const desiredSize = 15;
        //     const currentSize = calculateSize(object); // Calculate the current size of the object

        //     // Scale the object to achieve the desired size
        //     object.scale.set(desiredSize / currentSize, desiredSize / currentSize, desiredSize / currentSize);
            
        //     // Position, scale, and rotate the object as desired
        //     const desiredPosition = new THREE.Vector3(0 , 4.2, 804);
        //     object.position.copy(desiredPosition);
        //   object.traverse((node) => {
        //     if (!node.isMesh) return;
        //     node.material = new THREE.MeshBasicMaterial({ color:  0xFFFFFF });
        //     node.material.color.set(0xff0f0); // Change the color of the wireframe^
        //     node.material.wireframe = true;
        //     // node.position.set(0 , 5, 795); // Change the position of the wireframe
        //   });
        //   scene.add(object);
        // });


/* ----------------------------------------------------------------------------CV DOWNLOAD------------------------------------------*/

function downloadCV() {
  var link = document.createElement('a');
  link.href = encodeURI('imgs/Docs/CV-Luis Carvalho.pdf');
  link.download = 'CV-Luis Carvalho.pdf';
  document.body.appendChild(link); // required by some browsers (e.g. Firefox)
  link.click();
  document.body.removeChild(link);
}

// Legacy CV icon (replaced by the trophy link on the Contacts slide)
const cvButton = document.getElementById('downloadcv');
if (cvButton) {
  cvButton.addEventListener('click', downloadCV);
  cvButton.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      downloadCV();
    }
  });
}