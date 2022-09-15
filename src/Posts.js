function Post(props) {
    return (
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.userimg} />
                        {props.username}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.postimg} />
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
                        <img src={props.likesimg} />
                        <div class="texto">
                            Curtido por <strong>{props.likesHighlight}</strong> e <strong>outras {props.likesCount} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default function Posts() {

    const postsList = [
        {userimg : "img/meowed.svg", username:"meowed", postimg:"img/gato-telefone.svg", likesimg:"img/respondeai.svg", likesHighlight:"respondeai", likesCount:"101.523"},
        {userimg:"img/barked.svg", username:"barked", postimg:"img/dog.svg", likesimg:"img/adorable_animals.svg", likesHighlight:"adorable_animals", likesCount:"99.159"}
    ]

    return (
        <div class="posts">
            {postsList.map((p) => <Post userimg={p.userimg} username={p.username} postimg={p.postimg} likesimg={p.likesimg} likesHighlight={p.likesHighlight} likesCount={p.likesCount}/>)}
        </div>
    )
}