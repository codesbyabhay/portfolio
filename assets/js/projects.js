async function loadProjects() {

    const response = await fetch("assets/data/projects.json");

    const projects = await response.json();

    const container = document.getElementById("projectsContainer");

    container.innerHTML = "";

    projects.forEach(project => {

        const tech = project.technologies
            .map(item => `<span>${item}</span>`)
            .join("");

        container.innerHTML += `

        <div class="project-card">

            <img
                src="${project.image}"
                alt="${project.title}">

            <div class="project-content">

                <span class="project-category">

                    ${project.category}

                </span>

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <div class="project-tech">

                    ${tech}

                </div>

                <div class="project-links">

                    <a
                        href="${project.github}"
                        target="_blank">

                        <i class="fab fa-github"></i>

                        GitHub

                    </a>

                    <a
                        href="${project.live}"
                        target="_blank">

                        <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        Live

                    </a>

                </div>

            </div>

        </div>

        `;

    });

}

loadProjects();