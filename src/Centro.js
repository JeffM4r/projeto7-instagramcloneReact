import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";

function Centro() {
    const postContents = [{ nome: "meowed", foto: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", curtidaPor: "respondeai", curtidaPorFoto: "assets/img/respondeai.svg", curtidaNumero: "101.523" },
    { nome: "barked", foto: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", curtidaPor: "adorable_animals", curtidaPorFoto: "assets/img/adorable_animals.svg", curtidaNumero: "99.159" }]
   
    const [isActive, setIsActive] = React.useState(false);
    const [isShown, setIsShown] = React.useState(true);
    return (
        <div class="esquerda">
            <Stories />
            <div class="posts">
                { postContents.map(post => <Posts nome={post.nome} foto={post.foto} conteudo={post.conteudo} curtidaPor={post.curtidaPor} curtidaPorFoto={post.curtidaPorFoto} curtidaNumero={post.curtidaNumero}/>)}
            </div>
        </div>
    )
}

export default Centro;