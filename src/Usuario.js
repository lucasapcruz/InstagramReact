import { useState } from "react"

export default function Usuario(){

    const [userName, setUserName] = useState("Catana")

    return(
        <div class="usuario">
          <img src="img/catanacomics.svg" />
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