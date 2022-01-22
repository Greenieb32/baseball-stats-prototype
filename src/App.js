import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import MainNavigation from "./components/Layout/MainNavigation";
import PlayerHome from "./pages/players/PlayerHome";
import PlayerGameLog from "./pages/players/PlayerGameLog";
import PlayerAvgGraph from "./pages/players/PlayerAvgGraph";
import PlayerOpsGraph from "./pages/players/PlayerOpsGraph";

function App() {
  return (
    <div>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/player/:id" element={<PlayerHome />} />
          <Route path="/player/gamelog/:id" element={<PlayerGameLog />} />
          <Route path="/player/graphs/avg/:id" element={<PlayerAvgGraph />} />
          <Route path="/player/graphs/ops/:id" element={<PlayerOpsGraph />} />
        </Routes>
    </div>
  );
}

export default App;
