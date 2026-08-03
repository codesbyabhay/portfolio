async function loadExperience() {

    try {

        const response = await fetch("assets/data/experience.json");

        const experiences = await response.json();

        const container = document.getElementById("experienceContainer");

        container.innerHTML = "";

        experiences.forEach(exp => {

            container.innerHTML += `

            <div class="timeline-item">

                <div class="timeline-dot"></div>

                <div class="timeline-content">

                    <span class="timeline-duration">

                        ${exp.duration}

                    </span>

                    <h3>

                        ${exp.designation}

                    </h3>

                    <h4>

                        ${exp.company}

                    </h4>

                    <small>

                        ${exp.location}

                    </small>

                    <p>

                        ${exp.description}

                    </p>

                </div>

            </div>

            `;

        });

    } catch (error) {

        console.error("Unable to load experience:", error);

    }

}

loadExperience();