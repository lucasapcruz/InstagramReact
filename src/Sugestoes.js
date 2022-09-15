function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}


export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao img="img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você"/>
            <Sugestao img="img/chibirdart.svg" nome="chibirdart" razao="Segue você"/>
            <Sugestao img="img/razoesparaacreditar.svg" nome="razoesparaacreditar" razao="Novo no Instagram"/>
            <Sugestao img="img/adorable_animals.svg" nome="adorable_animals" razao="Segue você"/>
            <Sugestao img="img/smallcutecats.svg" nome="smallcutecats" razao="Segue você"/>
        </div>
    )
}