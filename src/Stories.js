function Story() {
    const perfis = [{user:"9gag", img:"assets/img/9gag.svg"},{user:"meowed", img:"assets/img/meowed.svg"},
    {user:"barked", img:"assets/img/barked.svg"},{user:"nathanwpylestrangeplanet", img:"assets/img/nathanwpylestrangeplanet.svg"},
    {user:"wawawicomics", img:"assets/img/wawawicomics.svg"},{user:"respondeai", img:"assets/img/respondeai.svg"},
    {user:"filomoderna", img:"assets/img/filomoderna.svg"}, {user:"memeriagourmet", img:"assets/img/memeriagourmet.svg"}]

 

    return (
        perfis.map (perfil =>
            <div class="story">
                <div class="imagem">
                    <img src={perfil.img} />
                </div>
                <div class="usuario">
                    {perfil.user}
                </div>
            </div>)
    )
}

function Stories() {
    return (
        <div class="stories">

            <Story/>            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            
        </div>
    )
}

export default Stories;