// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1200,
});

// Initialize Typed.js for animated text
var typed = new Typed('#typed-name', {
  strings: ['Ashwin Mam'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// Contact Form Submission Handling (Optional - requires backend setup)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
});

// Fetch and display GitHub repositories
fetch('https://api.github.com/users/ashwinmam/repos')
  .then(response => response.json())
  .then(data => {
    const projectGallery = document.getElementById('project-gallery');
    data.forEach(repo => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.setAttribute('data-aos', 'fade-up');
      projectCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description available.'}</p>
        <a href="${repo.html_url}" target="_blank">View Repository</a>
      `;
      projectGallery.appendChild(projectCard);
    });
  })
  .catch(error => console.error('Error fetching repositories:', error));

  var ctx = document.getElementById('myChart').getContext('2d');
  var gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, 'rgba(58,123,213,1)');
  gradient.addColorStop(1, 'rgba(0,210,255,0.3)');
  
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Project A', 'Project B', 'Project C'],
      datasets: [{
        label: 'Analysis Score',
        data: [85, 90, 75],
        backgroundColor: gradient,
        borderColor: '#fff',
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
    }
  });

  // Create a 3D scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
var torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 50;

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
