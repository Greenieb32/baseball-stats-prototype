import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

function AvgGraph(props) {

    const gamesArray = props.games;
    let avgArray = [];

    function createAverageArray(gamesArray) {
      let totalAB = 0;
      let totalHits = 0;
      let totalGames = 0;
      let battingAvg = 0.0;

      gamesArray.forEach((element) => {
        totalGames = totalGames + 1;
        totalAB = element.AB + totalAB;
        totalHits = element.H + totalHits;
        battingAvg = totalHits / totalAB;

        avgArray.push({
          game: totalGames,
          ab: totalAB,
          hits: totalHits,
          avg: battingAvg.toFixed(3),
        });
      });
    }

    createAverageArray(gamesArray);

  return (
    <ResponsiveContainer width={"100%"} aspect={2}>
      <LineChart
        width={1500}
        height={500}
        data={avgArray}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, "dataMax"]} />
        <Tooltip cursor={{ stroke: "#DF2935" }} />
        <Legend />
        <Line type="monotone" dataKey="avg" stroke="#3772FF" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AvgGraph;
