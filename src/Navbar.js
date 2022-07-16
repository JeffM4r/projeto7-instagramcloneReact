function Icons(props) {
    return (
        <ion-icon name={props.nome}></ion-icon>
    )
}

function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <Icons nome="logo-instagram" />
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div class="logo-mobile">
                    <Icons nome="logo-instagram" />
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <Icons nome="paper-plane-outline" />
                    <Icons nome="compass-outline" />
                    <Icons nome="heart-outline" />
                    <Icons nome="person-outline" />
                </div>

                <div class="icones-mobile">
                    <Icons nome="paper-plane-outline" />
                </div>
            </div>
        </div>
    )
}
export default Navbar;