import uuid from 'react-uuid';

import style from "./GameLog.module.css";

function GameLog(props) {
  let gamesLogArray = [];

  function createGameLogArray(gamesArray) {
    let totalAB = 0;
    let totalHits = 0;
    let totalBB = 0;
    let totalSF = 0;
    let totalHBP = 0;
    let totalTB = 0;
    let totalGames = 0;
    let onBase = 0.0;
    let slugging = 0.0;
    let ops = 0.0;
    let avg = 0.0;
    let gameAvg = 0.0;
    let gameObp = 0.0;
    let gameSlg = 0.0;
    let gameOps = 0.0;
    let opp = "";
    let date = "";

    gamesArray.forEach((element) => {
      totalGames = totalGames + 1;
      date = element.gameDate.split(" ")[0];
      opp = element.opponent;

      totalAB = element.AB + totalAB;
      totalHits = element.H + totalHits;
      totalBB = element.BB + totalBB;
      totalSF = element.SF + totalSF;
      totalHBP = element.HBP + totalHBP;
      totalTB = element.TB + totalTB;

      if (element.AB === 0) {
        gameAvg = 0.0;
      } else {
        gameAvg = element.H / element.AB;
      }

      if (element.AB === 0) {
        gameSlg = 0.0;
      } else {
        gameSlg = element.TB / element.AB;
      }

      gameObp =
        (element.H + element.BB + element.HBP) /
        (element.AB + element.SF + element.BB + element.HBP);
      gameOps = gameObp + gameSlg;

      avg = totalHits / totalAB;
      slugging = totalTB / totalAB;
      onBase =
        (totalHits + totalBB + totalHBP) /
        (totalAB + totalSF + totalBB + totalHBP);
      ops = onBase + slugging;

      gamesLogArray.push({
        gameNum: totalGames,
        date: date,
        opponent: opp,
        PA: element.PA,
        AB: element.AB,
        H: element.H,
        HR: element.HR,
        BB: element.BB,
        K: element.K,
        HBP: element.HBP,
        SF: element.SF,
        TB: element.TB,
        RBI: element.RBI,
        gAvg: gameAvg.toFixed(3),
        gObp: gameObp.toFixed(3),
        gSlg: gameSlg.toFixed(3),
        gOps: gameOps.toFixed(3),
        sAvg: avg.toFixed(3),
        sObp: onBase.toFixed(3),
        sSlg: slugging.toFixed(3),
        sOps: ops.toFixed(3),
      });
    });
  }

  createGameLogArray(props.games);

  return (
    <div className={style.container}>
      <table className={style.gameLog}>
        <thead>
          <tr>
            <th>Game Num:</th>
            <th>Date:</th>
            <th>Opp:</th>
            <th>PA</th>
            <th>AB</th>
            <th>H</th>
            <th>HR</th>
            <th>BB</th>
            <th>K</th>
            <th>HBP</th>
            <th>SF</th>
            <th>TB</th>
            <th>RBI</th>
            <th>Game BA</th>
            <th>Game OBP</th>
            <th>Game SLG</th>
            <th>Game OPS</th>
            <th>Season BA</th>
            <th>Season OBP</th>
            <th>Season SLG</th>
            <th>Season OPS</th>
          </tr>
        </thead>
        <tbody>
          {gamesLogArray.map((game) => (
            <tr key={game.gameNum}>
              {Object.values(game).map((val) => (
                <td key={uuid()}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GameLog;
