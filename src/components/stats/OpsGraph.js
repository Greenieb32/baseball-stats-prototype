import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label,
} from "recharts";

function OpsGraph(props) {
  const gamesArray = props.games;
  let opsArray = [];

  function createOpsArray(gamesArray) {
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


    gamesArray.forEach((element) => {
      totalGames = totalGames + 1;
      totalAB = element.AB + totalAB;
      totalHits = element.H + totalHits;
      totalBB = element.BB + totalBB;
      totalSF = element.SF + totalSF;
      totalHBP = element.HBP + totalHBP;
      totalTB = element.TB + totalTB;
      slugging = totalTB / totalAB;
      onBase = (totalHits + totalBB + totalHBP) / (totalAB + totalSF + totalBB + totalHBP); 
      ops = onBase + slugging;  

      opsArray.push({
        game: totalGames,
        slg: slugging,
        obp: onBase,
        ops: ops.toFixed(3)
      });
    });
  }

  createOpsArray(gamesArray);

  return (
    <ResponsiveContainer width={"100%"} aspect={2}>
      <LineChart
        data={opsArray}
        width={1500}
        height={500}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis>
          <Label value="Games" offset={-7.5} position="bottom" />
        </XAxis>
        <YAxis type="number" domain={[0, "dataMax"]} />
        <Tooltip cursor={{ stroke: "#DF2935" }} />
        <Line type="monotone" dataKey="ops" stroke="#3772FF" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default OpsGraph
