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
    return (
        <div class="stories">
            <Story userimg="img/9gag.svg" user="9gag"/>
            <Story userimg="img/meowed.svg" user="meowed"/>
            <Story userimg="img/barked.svg" user="barked"/>
            <Story userimg="img/nathanwpylestrangeplanet.svg" user="nathanwpylestrangeplanet"/>
            <Story userimg="img/wawawicomics.svg" user="wawawicomics"/>
            <Story userimg="img/respondeai.svg" user="respondeai"/>
            <Story userimg="img/filomoderna.svg" user="filomoderna"/>
            <Story userimg="img/memeriagourmet.svg" user="memeriagourmet"/>

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}