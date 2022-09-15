function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.userimg} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}

export default function Stories() {

    const storiesList = [
        { userimg: "img/9gag.svg", user: "9gag" },
        { userimg: "img/meowed.svg", user: "meowed" },
        { userimg: "img/barked.svg", user: "barked" },
        { userimg: "img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
        { userimg: "img/wawawicomics.svg", user: "wawawicomics" },
        { userimg: "img/respondeai.svg", user: "respondeai" },
        { userimg: "img/filomoderna.svg", user: "filomoderna" },
        { userimg: "img/memeriagourmet.svg", user: "memeriagourmet" }
    ]

    return (
        <div class="stories">
            {storiesList.map((s) => <Story userimg={s.userimg} user={s.user}/>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}