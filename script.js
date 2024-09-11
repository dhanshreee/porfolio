// JavaScript to make the site dynamic

// Change Theme Functionality
const changeColorBtn = document.getElementById('changeColorBtn');
const body = document.body;

changeColorBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        changeColorBtn.textContent = "Light Theme";
    } else {
        changeColorBtn.textContent = "Dark Theme";
    }
});

// Dynamically Load Projects
const projects = [
    {
        title: 'Real-Time Disaster Information Aggregation System',
        description: 'A project developed for the Smart India Hackathon. It aggregates real-time disaster information from various sources.',
        link: '#'
    },
    {
        title: 'Online English Tutor System',
        description: 'An AI-based system for personalized English tutoring.',
        link: '#'
    }
];

const projectsList = document.getElementById('projectsList');

projects.forEach((project) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectsList.appendChild(projectDiv);
});
