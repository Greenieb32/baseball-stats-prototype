import style from "./PlayerHeader.module.css"

function PlayerHeader(props) {
    return (
      <div className={style.header}>
        <img
          src={props.games[0].playerImage}
          alt={props.games[0].fullName}
          className={style.img}
        />
        <h2 className={style.title}>
          {props.games[0].fullName} {props.pageTitle}
        </h2>
        <img
          src={props.games[0].teamImage}
          alt={props.games[0].fullName}
          className={style.img}
        />
      </div>
    );
}

export default PlayerHeader
