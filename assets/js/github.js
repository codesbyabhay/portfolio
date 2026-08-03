const username = "codesbyabhay";

async function loadGitHub() {

    try {

        /* Profile */

        const profileResponse = await fetch(

            `https://api.github.com/users/${username}`

        );

        const profile = await profileResponse.json();

        document.getElementById("githubProfile").innerHTML = `

            <img
                class="github-avatar"
                src="${profile.avatar_url}"
                alt="${profile.name}">

            <div class="github-info">

                <h3>${profile.name}</h3>

                <p>${profile.bio ?? ""}</p>

                <div class="github-stats">

                    <span><strong>${profile.public_repos}</strong> Repositories</span>

                    <span><strong>${profile.followers}</strong> Followers</span>

                    <span><strong>${profile.following}</strong> Following</span>

                </div>

            </div>

        `;

        /* Repositories */

        const repoResponse = await fetch(

            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`

        );

        const repositories = await repoResponse.json();

        const container = document.getElementById("githubRepositories");

        container.innerHTML = "";

        repositories.forEach(repo => {

            container.innerHTML += `

                <div class="github-card">

                    <h3>${repo.name}</h3>

                    <p>${repo.description ?? "No description available."}</p>

                    <br>

                    ⭐ ${repo.stargazers_count}

                    &nbsp;&nbsp;

                    🍴 ${repo.forks_count}

                    <br><br>

                    <a
                        href="${repo.html_url}"
                        target="_blank">

                        View Repository

                    </a>

                </div>

            `;

        });

    }

    catch(error){

        console.error(error);

    }

}

loadGitHub();