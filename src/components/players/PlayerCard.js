import { Link } from "react-router-dom";

function PlayerCard(props) {

  return (
    <div className="player">
      <img src={props.playerImage} alt={props.fullName} />
      <div>
        <h4>{props.fullName}</h4>
      </div>
      <div>
        <Link
          to={`/player/${props.playerId}`}
          className="btn"
          >
          See Player's Stats
        </Link>
      </div>
    </div>
  );
}

export default PlayerCard;
