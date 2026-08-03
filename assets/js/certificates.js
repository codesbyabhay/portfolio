async function loadCertificates() {

    try {

        const response = await fetch("assets/data/certificates.json");

        const certificates = await response.json();

        const container = document.getElementById("certificatesContainer");

        container.innerHTML = "";

        certificates.forEach(item => {

            container.innerHTML += `

                <div class="certificate-card">

                    <img
                        src="${item.image}"
                        alt="${item.title}">

                    <div class="certificate-content">

                        <span class="certificate-date">

                            ${item.date}

                        </span>

                        <h3>

                            ${item.title}

                        </h3>

                        <p>

                            ${item.issuer}

                        </p>

                        <a
                            href="${item.credential}"
                            target="_blank"
                            class="btn btn-outline">

                            View Credential

                        </a>

                    </div>

                </div>

            `;

        });

    } catch (error) {

        console.error("Unable to load certificates:", error);

    }

}

loadCertificates();