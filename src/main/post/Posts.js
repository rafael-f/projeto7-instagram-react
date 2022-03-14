export default function Posts(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.profileImg} alt="Profile Imagem" />
          {props.profileName}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.post} alt="imgem" />
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
          <img src={props.lastLikeImg} alt="imgem" />
          <div class="texto">
            Curtido por <strong>{props.lasLikeProfile}</strong> e
            <strong>outras {props.likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}