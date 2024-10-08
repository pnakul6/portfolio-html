// Function to open the modal
function openModal(projectId) {
    const modal = document.getElementById(projectId + '-modal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal(projectId) {
    const modal = document.getElementById(projectId + '-modal');
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
};



const dynamicProjectsSection = document.getElementById('dynamic-projects-section');
const fetchProjectsButton = document.getElementById('fetch-projects-button');


let clickCount = 0;

fetchProjectsButton.addEventListener('click', fetchProjects);

// Function to fetch projects dynamically from an external API
async function fetchProjects() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // Placeholder API for demo

    
    clickCount++;

  
    if (clickCount === 1) {
        try {
            const response = await fetch(apiUrl);

           
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }

            const projects = await response.json();

           
            renderProjects(projects.slice(0, 3)); 
        } catch (error) {
            console.error("Error fetching projects:", error.message);
        }
    } else {
       
        alert("No more projects found!");
        fetchProjectsButton.disabled = true;
        fetchProjectsButton.textContent = "No More Projects";
    }
}

// Function to dynamically render fetched projects
function renderProjects(projects) {
    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="https://th.bing.com/th/id/OIP.OT_ie6721ArOvHdnZVSP4gHaE9?rs=1&pid=ImgDetMain" alt="Project Image"> <!-- Placeholder image -->
            <h2>${project.title.substring(0, 5)}</h2>
            <p>${project.body.substring(0, 50)}...</p>
            <button onclick="showProjectDetails('${project.title}', '${project.body}')">Show More</button>
        `;

        dynamicProjectsSection.appendChild(projectCard);
    });
}

// Function to show project details in a modal using alert 
function showProjectDetails(title, description) {
    alert(`Project: ${title}\n\nDescription: ${description}`);
}
