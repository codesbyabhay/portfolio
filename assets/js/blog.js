async function loadBlogs(){

    try{

        const response = await fetch("assets/data/blogs.json");

        const blogs = await response.json();

        const container = document.getElementById("blogContainer");

        container.innerHTML="";

        blogs.forEach(blog=>{

            container.innerHTML+=`

            <article class="blog-card">

                <img
                    src="${blog.image}"
                    alt="${blog.title}">

                <div class="blog-content">

                    <span class="blog-category">

                        ${blog.category}

                    </span>

                    <h3>

                        ${blog.title}

                    </h3>

                    <p>

                        ${blog.description}

                    </p>

                    <small>

                        ${blog.date}

                    </small>

                    <br><br>

                    <a
                        href="${blog.url}"
                        class="btn btn-outline">

                        Read More

                    </a>

                </div>

            </article>

            `;

        });

    }

    catch(error){

        console.error(error);

    }

}

loadBlogs();