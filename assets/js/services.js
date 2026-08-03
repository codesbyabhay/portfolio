async function loadServices() {

    try {

        const response = await fetch("assets/data/services.json");

        const services = await response.json();

        const container = document.getElementById("servicesContainer");

        container.innerHTML = "";

        services.forEach(service => {

            container.innerHTML += `

                <div class="service-card">

                    <div class="service-icon">

                        <i class="${service.icon}"></i>

                    </div>

                    <h3>

                        ${service.title}

                    </h3>

                    <p>

                        ${service.description}

                    </p>

                </div>

            `;

        });

    } catch (error) {

        console.error("Unable to load services:", error);

    }

}

loadServices();