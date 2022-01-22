import { useEffect, useState } from "react";

import PlayerList from "../components/players/PlayerList";
import { useTempToken } from "../store/TempTokenContext";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [players, setPlayers] = useState([]);

  const url = process.env.REACT_APP_PLAYERS_API_URL;
  const {tempToken} = useTempToken();

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch(url, {
        headers: {
          tempToken: tempToken.token,
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedPlayers = responseData;

      setPlayers(loadedPlayers);
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

  return (
    <main>
      <PlayerList players={players} />
    </main>
  );
}

export default Home;
