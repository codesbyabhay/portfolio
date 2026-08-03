async function loadSkills() {

    const response = await fetch("assets/data/skills.json");

    const categories = await response.json();

    const container = document.getElementById("skillsContainer");

    container.innerHTML = "";

    categories.forEach(category => {

        const card = document.createElement("div");

        card.className = "skill-card";

        card.innerHTML = `

            <h3>

                <i class="${category.icon}"></i>

                ${category.category}

            </h3>

            <div class="skill-tags">

                ${category.skills
                    .map(skill => `<span>${skill}</span>`)
                    .join("")}

            </div>

        `;

        container.appendChild(card);

    });

}

loadSkills();