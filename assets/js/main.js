/**
 * Main Application Script
 * Dynamically builds project cards and handles navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderProjects(academicProjects, 'academic-projects-container');
  renderProjects(freelanceProjects, 'freelance-projects-container');
  initCarousels();
  initMobileMenu();
});

function renderProjects(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = projects.map(proj => {
    return `
      <div class="project-card" id="${proj.id}">
        ${renderVisualHeader(proj)}
        <div class="project-body">
          <span class="project-tag">${proj.tag}</span>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          <div class="project-tools">
            ${proj.tools.map(tool => `<span class="tool-badge">${tool}</span>`).join('')}
          </div>
          <div class="project-links">
            ${proj.links.map(link => `<a href="${link.url}" target="_blank" class="project-link">${link.name}</a>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderVisualHeader(proj) {
  // Option A: 3D Canvas Placeholder
  if (proj.has3dViewer) {
    return `
      <div class="viewer-3d-placeholder" id="canvas-container-${proj.id}">
        <i class="fa-solid fa-cube"></i>
        <p><strong>Interactive 3D View Placeholder</strong></p>
        <span style="font-size:0.75rem; color:#6B7280;">(Ready for Three.js / WebGL / Sketchfab embed)</span>
      </div>
    `;
  }
  
  // Option B: Image Carousel
  if (proj.images && proj.images.length > 0) {
    return `
      <div class="carousel-container">
        ${proj.images.map((img, idx) => `
          <img src="${img}" class="carousel-slide ${idx === 0 ? 'active' : ''}" alt="${proj.title}">
        `).join('')}
        <button class="carousel-btn prev" aria-label="Previous Image"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="carousel-btn next" aria-label="Next Image"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    `;
  }
  
  // Option C: Fallback Default Image
  return `
    <div class="carousel-container">
      <img src="https://via.placeholder.com/600x300?text=CAD+Mechanical+Design" class="carousel-slide active" alt="Placeholder">
    </div>
  `;
}

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}
