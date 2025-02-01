const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
const cubeRotationSpeed = 280;

const handleMouseMove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    rotateX = -(mouseY / window.innerHeight -0.5) * cubeRotationSpeed;
    rotateY = -(mouseX / window.innerWidth -0.5) * cubeRotationSpeed;
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
};

window.addEventListener("mousemove", handleMouseMove);