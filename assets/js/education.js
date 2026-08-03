async function loadEducation() {

    try {

        const response = await fetch("assets/data/education.json");

        const education = await response.json();

        const container = document.getElementById("educationContainer");

        container.innerHTML = "";

        education.forEach(item => {

            container.innerHTML += `

            <div class="education-card">

                <span class="education-duration">

                    ${item.duration}

                </span>

                <h3>

                    ${item.degree}

                </h3>

                <h4>

                    ${item.institution}

                </h4>

                <small>

                    ${item.location}

                </small>

                <p>

                    ${item.description}

                </p>

            </div>

            `;

        });

    } catch (error) {

        console.error("Unable to load education:", error);

    }

}

loadEducation();