import styles from "./TotalsTable.module.css";

function TotalsTable(props) {
  const gamesArray = props.games;
  let totalsObj = {};

  function createTotalsObj(gamesArray) {
    let totalPA = 0;
    let totalAB = 0;
    let totalHits = 0;
    let totalHR = 0;
    let totalBB = 0;
    let totalK = 0;
    let totalSF = 0;
    let totalHBP = 0;
    let totalTB = 0;
    let totalRBI = 0;
    let totalGames = 0;
    let onBase = 0.0;
    let slugging = 0.0;
    let ops = 0.0;
    let avg = 0.0;

    gamesArray.forEach((element) => {
      totalGames = totalGames + 1;
      totalPA = element.PA + totalPA;
      totalAB = element.AB + totalAB;
      totalHits = element.H + totalHits;
      totalHR = element.HR + totalHR;
      totalBB = element.BB + totalBB;
      totalK = element.K + totalK;
      totalSF = element.SF + totalSF;
      totalHBP = element.HBP + totalHBP;
      totalTB = element.TB + totalTB;
      totalRBI = element.RBI + totalRBI;
    });
    avg = totalHits / totalAB;
    slugging = totalTB / totalAB;
    onBase =
      (totalHits + totalBB + totalHBP) /
      (totalAB + totalSF + totalBB + totalHBP);
    ops = onBase + slugging;
    totalsObj = {
      games: totalGames,
      pa: totalPA,
      ab: totalAB,
      hits: totalHits,
      hr: totalHR,
      bb: totalBB,
      k: totalK,
      sf: totalSF,
      hbp: totalHBP,
      tb: totalTB,
      rbi: totalRBI,
      avg: avg.toFixed(3),
      slg: slugging.toFixed(3),
      obp: onBase.toFixed(3),
      ops: ops.toFixed(3),
    };
  }

  createTotalsObj(gamesArray);

  return (
    <div className="center-items">
      <table className={styles.totalsTable}>
        <thead>
          <tr>
            <th>G</th>
            <th>PA</th>
            <th>AB</th>
            <th>H</th>
            <th>HR</th>
            <th>TB</th>
            <th>RBI</th>
            <th>SF</th>
            <th>BB</th>
            <th>HBP</th>
            <th>SO</th>
            <th>BA</th>
            <th>OBP</th>
            <th>SLG</th>
            <th>OPS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalsObj.games}</td>
            <td>{totalsObj.pa}</td>
            <td>{totalsObj.ab}</td>
            <td>{totalsObj.hits}</td>
            <td>{totalsObj.hr}</td>
            <td>{totalsObj.tb}</td>
            <td>{totalsObj.rbi}</td>
            <td>{totalsObj.sf}</td>
            <td>{totalsObj.bb}</td>
            <td>{totalsObj.hbp}</td>
            <td>{totalsObj.k}</td>
            <td>{totalsObj.avg}</td>
            <td>{totalsObj.obp}</td>
            <td>{totalsObj.slg}</td>
            <td>{totalsObj.ops}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TotalsTable;
