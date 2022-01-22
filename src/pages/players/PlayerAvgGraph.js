import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useTempToken } from "../../store/TempTokenContext";
import PlayerHeader from "../../components/Layout/PlayerHeader";
import AvgGraph from "../../components/stats/AvgGraph";

function PlayerAvgGraph() {
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
      <PlayerHeader games={games} pageTitle="Batting Average Graph" />
      <div className="btn-container">
        <Link
          to={`/player/${games[0].playerId}`}
          className="btn-gl"
          games={games}
        >
          Return to {games[0].fullName}'s Summary
        </Link>
      </div>
      <div className="graph-container">
        <AvgGraph games={games} />
      </div>
    </div>
  );
}

export default PlayerAvgGraph;
