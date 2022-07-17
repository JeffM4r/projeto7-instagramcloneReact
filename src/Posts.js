import React from 'react';

function Post(props) {

    const [isActive, setIsActive] = React.useState(false);
    const [isShown, setIsShown] = React.useState(true);

    const {nome, foto, conteudo, curtidaPor, curtidaPorFoto, curtidaNumero} = props

    function clickIcon(){
        setIsShown(false);
    }
    function clickIcon2(){
        setIsShown(true);
        setIsActive(false);
    }
    function clickImage(){
        if(isShown){
            setIsShown(false);
            setIsActive(true);
        };
    }


    return (
            <div class={isActive ? "post liked" : "post"} >
                <div class="topo">
                    <div class="usuario">
                        <img src={foto} />
                        {nome}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo" onClick={()=>{clickImage()}}>
                    <img src={conteudo} />
                    <div class="instagram-heart">
                    </div>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div class="icones">
                            <ion-icon class="heart" style={{display: isShown ? 'flex' : 'none'}} onClick={()=>clickIcon()} name="heart-outline"></ion-icon>
                            <ion-icon class="heartfilled" style={{display: isShown ? 'none' : 'flex'}} onClick={()=>clickIcon2()} name="heart"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={curtidaPorFoto} />
                        <div class="texto">
                            Curtido por <strong>{curtidaPor}</strong> e <strong>outras {curtidaNumero} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
}


export default Post;