import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTempToken } from "../../store/TempTokenContext";
import AvgGraph from "../../components/stats/AvgGraph";
import OpsGraph from "../../components/stats/OpsGraph";
import TotalsTable from "../../components/stats/TotalsTable";
import PlayerHeader from "../../components/Layout/PlayerHeader";

function PlayerHome(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [games, setGames] = useState([]);

  const url = process.env.REACT_APP_PLAYER_GAMES_API_URL;
  const {tempToken} = useTempToken();

  const { id } = useParams();

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch(`${url}${id}`, {
        headers: {
          tempToken: tempToken.token,
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedGames = responseData;

      setGames(loadedGames);
      setIsLoading(false);
    };

    fetchPlayers().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className="section-title">Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p className="section-title">{httpError}</p>
      </section>
    );
  }

   if (games.length === 0) {
     return (
       <section className="error-page section">
         <div className="error-container">
           <h1>Sorry No Players Here!</h1>
           <Link to="/" className="btn btn-primary">
             Return to Home Page!
           </Link>
         </div>
       </section>
     );
   }

  return (
    <div>
      <PlayerHeader games={games} pageTitle="Summary Page" />
      <div className="btn-container">
        <Link
          to={`/player/gamelog/${games[0].playerId}`}
          className="btn-gl"
          games={games}
        >
          See {games[0].fullName}'s Game Log
        </Link>
      </div>
      <TotalsTable games={games} />
      <div className="graph-container">
        <h3 className="graph-title">Batting Average Graph</h3>
        <AvgGraph games={games} />
        <div className="btn-container">
          <Link
            to={`/player/graphs/avg/${games[0].playerId}`}
            className="btn-gl"
            games={games}
          >
            See {games[0].fullName}'s Batting Average Graph
          </Link>
        </div>
      </div>

      <div className="graph-container">
        <h3 className="graph-title">On Base Plus Slugging Graph</h3>
        <OpsGraph games={games} />
        <div className="btn-container">
          <Link
            to={`/player/graphs/ops/${games[0].playerId}`}
            className="btn-gl"
            games={games}
          >
            See {games[0].fullName}'s OPS Graph
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlayerHome;
