

document.body.classList.add('dark-mode');




     function reveal() {
         const reveals = document.querySelectorAll('.reveal');
         
         for (let i = 0; i < reveals.length; i++) {
             const windowHeight = window.innerHeight;
             const elementTop = reveals[i].getBoundingClientRect().top;
             const elementVisible = 150;
             
             if (elementTop < windowHeight - elementVisible) {
                 reveals[i].classList.add('active');
             }
         }
     }

     window.addEventListener('scroll', reveal);
     reveal(); 


      
 const scrollToTopBtn = document.getElementById('scrollToTop');
 

 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
         scrollToTopBtn.classList.add('visible');
     } else {
         scrollToTopBtn.classList.remove('visible');
     }
 });
 
 
 scrollToTopBtn.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });






  const body = document.body;
     const modeToggle = document.querySelector('.mode-toggle');
     const modeIcon = modeToggle.querySelector('i');
     
     modeToggle.addEventListener('click', () => {
         body.classList.toggle('dark-mode');
         if (body.classList.contains('dark-mode')) {
             modeIcon.className = 'fas fa-sun';
         } else {
             modeIcon.className = 'fas fa-moon';
         }
         localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
     });
     
    
     document.addEventListener('DOMContentLoaded', () => {
     
         if (body.classList.contains('dark-mode')) {
             modeIcon.className = 'fas fa-sun';
         }
         
 
         const savedMode = localStorage.getItem('darkMode');
         if (savedMode !== null) {
             if (savedMode === 'true') {
                 body.classList.add('dark-mode');
                 modeIcon.className = 'fas fa-sun';
             } else {
                 body.classList.remove('dark-mode');
                 modeIcon.className = 'fas fa-moon';
             }
         }
     });
     
  
     const mobileToggle = document.querySelector('.mobile-toggle');
     const navLinks = document.querySelector('.nav-links');
     
     mobileToggle.addEventListener('click', () => {
         navLinks.classList.toggle('active');
         const toggleIcon = mobileToggle.querySelector('i');
         toggleIcon.classList.toggle('fa-bars');
         toggleIcon.classList.toggle('fa-times');
     });
     
   
     document.querySelectorAll('.nav-links a').forEach(link => {
         link.addEventListener('click', () => {
             navLinks.classList.remove('active');
             const toggleIcon = mobileToggle.querySelector('i');
             toggleIcon.className = 'fas fa-bars';
         });
     });
     
    
     const typedTextElement = document.querySelector('.typed-text');
     const texts = ["Data Analyst", "Frontend Developer", "Programmer"];
     let textIndex = 0;
     let charIndex = 0;
     let isDeleting = false;
     let typingDelay = 100;
     let erasingDelay = 50;
     let newTextDelay = 2000;

     function typeEffect() {
         const currentText = texts[textIndex];
         
         if (isDeleting) {
             typedTextElement.textContent = currentText.substring(0, charIndex - 1);
             charIndex--;
             typingDelay = erasingDelay;
         } else {
             typedTextElement.textContent = currentText.substring(0, charIndex + 1);
             charIndex++;
             typingDelay = 100;
         }
         
         if (!isDeleting && charIndex === currentText.length) {
            
             isDeleting = true;
             typingDelay = newTextDelay;
         } else if (isDeleting && charIndex === 0) {
             isDeleting = false;
            
             textIndex = (textIndex + 1) % texts.length;
             
             typingDelay = 500;
         }
         
         setTimeout(typeEffect, typingDelay);
     }
     

     function createGlowEffects() {
         const container = document.getElementById('glow-effects');
         
       
         for (let i = 0; i < 3; i++) {
             const glow = document.createElement('div');
             glow.classList.add('glow');
             
          
             const size = Math.floor(Math.random() * 300) + 200;
             const top = Math.floor(Math.random() * 100);
             const left = Math.floor(Math.random() * 100);
             const delay = Math.random() * 5;
             
             glow.style.width = `${size}px`;
             glow.style.height = `${size}px`;
             glow.style.top = `${top}%`;
             glow.style.left = `${left}%`;
             glow.style.animationDelay = `${delay}s`;
             
             container.appendChild(glow);
         }
     }
     
     function createGeometricShapes() {
         const container = document.getElementById('geometric-shapes');
         const shapes = ['shape-circle', 'shape-square', 'shape-hex','shape-star'];
         const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
         
      
         for (let i = 0; i < 20; i++) {
             const shape = document.createElement('div');
             shape.classList.add('shape');
             
          
             const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
             shape.classList.add(shapeType);
             
           
             const size = Math.floor(Math.random() * 80) + 20;
             const top = Math.floor(Math.random() * 100);
             const left = Math.floor(Math.random() * 100);
             const color = colors[Math.floor(Math.random() * colors.length)];
             const floatX = (Math.random() - 0.5) * 100;
             const floatY = (Math.random() - 0.5) * 100;
             const rotateDeg = Math.floor(Math.random() * 360);
             
           
             shape.style.width = `${size}px`;
             shape.style.height = `${size}px`;
             shape.style.top = `${top}%`;
             shape.style.left = `${left}%`;
             shape.style.background = color;
             shape.style.setProperty('--float-x', `${floatX}px`);
             shape.style.setProperty('--float-y', `${floatY}px`);
             shape.style.setProperty('--rotate-deg', `${rotateDeg}deg`);
             
             
             if (shapeType === 'shape-hex') {
                 shape.style.borderBottomColor = color;
             }
             
             container.appendChild(shape);
         }
     }
     
     function createParticles() {
         const container = document.getElementById('particle-field');
         const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
         
         
         for (let i = 0; i < 50; i++) {
             const particle = document.createElement('div');
             particle.classList.add('particle');
             
            
             const size = Math.random() * 3 + 1;
             const top = Math.random() * 100;
             const left = Math.random() * 100;
             const color = colors[Math.floor(Math.random() * colors.length)];
             const floatX = (Math.random() - 0.5) * 80;
             const floatY = (Math.random() - 0.5) * 80;
             const opacity_base = Math.random() * 0.3 + 0.1; 
const opacity_peak = opacity_base + 0.2; 


particle.style.width = `${size}px`;
particle.style.height = `${size}px`;
particle.style.top = `${top}%`;
particle.style.left = `${left}%`;
particle.style.backgroundColor = color;
particle.style.setProperty('--float-x', `${floatX}px`);
particle.style.setProperty('--float-y', `${floatY}px`);
particle.style.setProperty('--opacity-base', opacity_base);
particle.style.setProperty('--opacity-peak', opacity_peak);
particle.style.opacity = opacity_base;

const animDelay = Math.random() * 10;
             particle.style.animationDelay = `${animDelay}s`;
             
             container.appendChild(particle);
         }
     }
     

     function revealOnScroll() {
         const reveals = document.querySelectorAll('.reveal');
         
         reveals.forEach(element => {
             const windowHeight = window.innerHeight;
             const elementTop = element.getBoundingClientRect().top;
             const elementVisible = 150;
             
             if (elementTop < windowHeight - elementVisible) {
                 element.classList.add('active');
             } else {
                 element.classList.remove('active');
             }
         });
     }
     
  
     document.addEventListener('DOMContentLoaded', () => {
         createGlowEffects();
         createGeometricShapes();
         createParticles();
         typeEffect();
         
         revealOnScroll();

         window.addEventListener('scroll', revealOnScroll);
     });
     

 














    
document.addEventListener('DOMContentLoaded', function() {
 
    loadCommunityProjects();
    

    const fileInput = document.getElementById('projectImage');
    const fileNameDisplay = document.getElementById('file-name');
    
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                fileNameDisplay.textContent = this.files[0].name;
            } else {
                fileNameDisplay.textContent = 'Choose Project Image';
            }
        });
    }
    
   
    const uploadForm = document.getElementById('projectUploadForm');
    
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            const name = document.getElementById('projectName').value;
            const description = document.getElementById('projectDescription').value;
            const tech = document.getElementById('projectTech').value;
            const github = document.getElementById('projectGithub').value;
            const demo = document.getElementById('projectDemo').value;
            const imageFile = document.getElementById('projectImage').files[0];
            
          
            const project = {
                id: generateProjectId(),
                name: name,
                description: description,
                technologies: tech.split(',').map(t => t.trim()),
                github: github,
                demo: demo,
                image: null,
                timestamp: new Date().toISOString()
            };
            
        
            if (imageFile) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    project.image = e.target.result;
                    saveProject(project);
                };
                reader.readAsDataURL(imageFile);
            } else {
                saveProject(project);
            }
            
          
            uploadForm.reset();
            fileNameDisplay.textContent = 'Choose Project Image';
            
           
            
            showNotification('Project submitted successfully!');
        });
    }
});


function generateProjectId() {
    return 'proj_' + Math.random().toString(36).substr(2, 9);
}


function saveProject(project) {

    let projects = JSON.parse(localStorage.getItem('communityProjects')) || [];
    
  
    projects.push(project);
    

    localStorage.setItem('communityProjects', JSON.stringify(projects));
    

    loadCommunityProjects();
}


function loadCommunityProjects() {
    const projectsContainer = document.getElementById('communityProjects');
    if (!projectsContainer) return;
    

    const projects = JSON.parse(localStorage.getItem('communityProjects')) || [];
    
   
    projects.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    projectsContainer.innerHTML = '';
    
    if (projects.length === 0) {
        projectsContainer.innerHTML = '<div class="no-projects"><p>No community projects yet. Be the first to share!</p></div>';
        return;
    }
    

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'community-project';
        
        let thumbnailHTML = '';
        if (project.image) {
            thumbnailHTML = `<img src="${project.image}" alt="${project.name}" />`;
        } else {
            thumbnailHTML = `<div class="fallback-icon"><i class="fas fa-code"></i></div>`;
        }
        
    
        let linksHTML = '';
        if (project.github) {
            linksHTML += `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>`;
        }
        if (project.demo) {
            linksHTML += `<a href="${project.demo}" target="_blank"><i class="far fa-eye"></i> Demo</a>`;
        }
        
       
        const tagsHTML = project.technologies.slice(0, 3).map(tech => 
            `<div class="community-project-tag">${tech}</div>`
        ).join('');
        
        projectElement.innerHTML = `
            <div class="project-thumbnail">
                ${thumbnailHTML}
            </div>
            <div class="community-project-info">
                <h4>${project.name}</h4>
                <p>${project.description}</p>
                <div class="community-project-tags">
                    ${tagsHTML}
                </div>
                <div class="community-project-links">
                    ${linksHTML}
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
    });
}


function showNotification(message) {
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Append to body
    document.body.appendChild(notification);
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    notification.style.zIndex = '1000';
    notification.style.transform = 'translateY(100px)';
    notification.style.opacity = '0';
    notification.style.transition = 'all 0.3s ease';
    
    // Animation
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}







function loadCommunityProjects() {
    const projectsContainer = document.getElementById('communityProjects');
    if (!projectsContainer) return;
    

    const projects = JSON.parse(localStorage.getItem('communityProjects')) || [];
    
 
    projects.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
   
    projectsContainer.innerHTML = '';
    
    if (projects.length === 0) {
        projectsContainer.innerHTML = '<div class="no-projects"><p>No community projects yet. Be the first to share!</p></div>';
        return;
    }
    

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'community-project';
        projectElement.dataset.projectId = project.id;
        
        let thumbnailHTML = '';
        if (project.image) {
            thumbnailHTML = `<img src="${project.image}" alt="${project.name}" />`;
        } else {
            thumbnailHTML = `<div class="fallback-icon"><i class="fas fa-code"></i></div>`;
        }
        

        let linksHTML = '';
        if (project.github) {
            linksHTML += `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>`;
        }
        if (project.demo) {
            linksHTML += `<a href="${project.demo}" target="_blank"><i class="far fa-eye"></i> Demo</a>`;
        }
        

        const tagsHTML = project.technologies.slice(0, 3).map(tech => 
            `<div class="community-project-tag">${tech}</div>`
        ).join('');
        
        projectElement.innerHTML = `
            <div class="project-thumbnail">
                ${thumbnailHTML}
            </div>
            <div class="community-project-info">
                <h4>${project.name}</h4>
                <p>${project.description}</p>
                <div class="community-project-tags">
                    ${tagsHTML}
                </div>
                <div class="community-project-links">
                    ${linksHTML}
                    <button class="delete-project-btn" data-id="${project.id}">
                        <i class="fas fa-trash-alt"></i> Remove
                    </button>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);
    });
    
 
    const deleteButtons = document.querySelectorAll('.delete-project-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.dataset.id;
            removeProject(projectId);
        });
    });
}


function removeProject(projectId) {
  
    if (confirm('Are you sure you want to remove this project?')) {
       
        let projects = JSON.parse(localStorage.getItem('communityProjects')) || [];
        
   
        projects = projects.filter(project => project.id !== projectId);
        
    
        localStorage.setItem('communityProjects', JSON.stringify(projects));
        
    
        loadCommunityProjects();
        
    
        showNotification('Project removed successfully!');
    }
}