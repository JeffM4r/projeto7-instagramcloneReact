function Icons(props){
    return(
        <ion-icon name={props.nome}></ion-icon>
    )
}

function FundoMobile() {
    return (
        <div class="fundo-mobile">

            <Icons nome = "home"/>
            <Icons nome = "search-outline"/>
            <Icons nome = "add-circle-outline"/>
            <Icons nome = "heart-outline"/>
            <Icons nome = "person-outline"/>
            
        </div>
    )
}

export default FundoMobile;