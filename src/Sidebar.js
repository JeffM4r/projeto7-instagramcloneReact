function Usuario(props) {
    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>{props.nome}</strong>
                {props.nick}
            </div>
        </div>
    )
}

function Sugestões() {
    const sugestoes = [{ nome: "bad.vibes.memes", foto: "assets/img/bad.vibes.memes.svg", razao: "Segue você" }, { nome: "chibirdart", foto: "assets/img/chibirdart.svg", razao: "Segue você" },
    { nome: "razoesparaacreditar", foto: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram" }, { nome: "adorable_animals", foto: "assets/img/adorable_animals.svg", razao: "Segue você" },
    { nome: "smallcutecats", foto: "assets/img/smallcutecats.svg", razao: "Segue você" }]


    return (
        sugestoes.map(sugestao =>
            <div class="sugestao">
                <div class="usuario">
                    <img src={sugestao.foto} />
                    <div class="texto">
                        <div class="nome">{sugestao.nome}</div>
                        <div class="razao">{sugestao.razao}</div>
                    </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>
        )
    )
}


function Sidebar() {
    return (
        <div class="sidebar">

            <Usuario nome="catanacomics" nick="Catana" img="assets/img/catanacomics.svg" />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Sugestões />

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

export default Sidebar;