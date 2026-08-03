async function loadTestimonials() {

    try {

        const response = await fetch("assets/data/testimonials.json");

        const testimonials = await response.json();

        const container = document.getElementById("testimonialsContainer");

        container.innerHTML = "";

        testimonials.forEach(item => {

            const stars = "★".repeat(item.rating);

            container.innerHTML += `

                <div class="testimonial-card">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        class="testimonial-image">

                    <div class="testimonial-rating">

                        ${stars}

                    </div>

                    <p class="testimonial-message">

                        "${item.message}"

                    </p>

                    <h3>

                        ${item.name}

                    </h3>

                    <span>

                        ${item.role} • ${item.company}

                    </span>

                </div>

            `;

        });

    } catch (error) {

        console.error("Unable to load testimonials:", error);

    }

}

loadTestimonials();