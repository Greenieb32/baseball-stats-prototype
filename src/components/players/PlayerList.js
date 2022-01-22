import PlayerCard from './PlayerCard'

function PlayerList(props) {
    return (
      <section className="section">
        <h2 className="section-title">Players</h2>
        <div className="player-center">
          {props.players.map((player) => {
            return <PlayerCard key={player.playerId} {...player} />;
          })}
        </div>
      </section>
    );


}

export default PlayerList
