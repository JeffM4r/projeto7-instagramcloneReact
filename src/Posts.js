function Post() {
    const postContents = [{ nome: "meowed", foto: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtidaPor: "respondeai", curtidaPorFoto: "assets/img/respondeai.svg", curtidaNumero: "101.523" },
    { nome: "barked", foto: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtidaPor: "adorable_animals", curtidaPorFoto: "assets/img/adorable_animals.svg", curtidaNumero: "99.159" }]


    return (
        postContents.map(postContent =>
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={postContent.foto} />
                        {postContent.nome}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={postContent.conteudo} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={postContent.curtidaPorFoto} />
                        <div class="texto">
                            Curtido por <strong>{postContent.curtidaPor}</strong> e <strong>outras {postContent.curtidaNumero} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

function Posts() {
    return (
        <div class="posts">

            <Post />
            
        </div>
    )
}

export default Posts;