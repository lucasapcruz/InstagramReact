import { useState } from "react"

export default function Usuario(){

    const [userName, setUserName] = useState("Catana")

    const [userImg, setUserImg] = useState("img/catanacomics.svg")

    return(
        <div class="usuario">
          <img src={userImg} onClick={() => setUserImg(prompt("Insira o link para uma imagem:"))}/>
          <div class="texto">
            <strong>catanacomics</strong>
            <span>
              {userName}
              <ion-icon name="pencil" onClick={() => setUserName(prompt("Digite um nome de usuário:"))}></ion-icon>
            </span>
          </div>
        </div>
    )
}