import { Link } from "react-router-dom";

import style from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={style.header}>
      <div className={style.logo}>Baseball Stats Project</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
