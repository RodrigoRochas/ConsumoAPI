(function(){

    const pesquisar = document.querySelector('#pesquisar');
    const perfil = document.querySelector('#perfil');

    const ID = "0ed3d274348f68113d3d";
    const SECRET = "877f206a5f30b70aef0ee0ed38410d3cd63068f2";
    const NumRepo = 7;
    const dataOrdena = "created: asc;"

    const url = `https://api.github.com/users`;

    async function pegarUsuario(usuario) {
        const respostaPerfil = await fetch (`${url}/${usuario}?client_id=${ID}
                                        &client_secret=${SECRET}`);

        
        const respostaRepo = await fetch (`${url}/${usuario}/repos?
                                            per_page=${NumRepo}&
                                            sort=${dataOrdena}&
                                            client_id=${ID}&
                                            client_secret=${SECRET}`);

            const perfil = await respostaPerfil.json();
            const repos = await respostaRepo.json();

            return {perfil, repos};
    };

    function verPerfil(usuario) {
        console.log(usuario);
        perfil.innerHTML = `
        <div class="row  mt-3">
            <div class="col-md-4">
                <div class="card" style="width: 18em;">
                    <img class="card-img-top" src="${usuario.avatar_url}">
                        <ul class="list-group-flush">
                            <li class="list-group-item">Repositórios: <span class=" badge-sucess">${usuario.public_repos}</span></li>
                            <li class="list-group-item">Seguidores: <span class=" badge-primary">${usuario.followers}</span></li>
                            <li class="list-group-item">Seguindo: <span class=" badge-info">${usuario.following}</span></li>
                        </ul>

                        <div class="card-body">
                            <a href="${usuario.html_url}" target="_blank" class="btn btn-warning btn-block">Ver perfil</a>
                        </div>
                </div>
            </div>

            <div class="col-md-8">
                <div id="repos">
                </div>
            </div>
        </div>`;
    }

    function verRepositorios(repos) {
        let output = "";

        repos.forEach(repo => {
            output += 
            `<div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                
                    <div class="col-md-6"></div>
                    <span class="badge badge-primary"> Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-success"> Watch: ${repo.watchers_count}</span>
                    <span class="badge badge-warning">Forks: ${repo.forks_count}</span>
                </div>
            </div>
        </div>`
        });

        document.getElementById("repos").innerHTML = output; 
    }

    pesquisar.addEventListener('keyup', (e) => {
        const usuario = e.target.value;

        if(usuario.length > 0) {
            pegarUsuario(usuario).then(resposta => {
                verPerfil(resposta.perfil)
                verRepositorios(resposta.repos)
            });
        }
    });
     
})();

