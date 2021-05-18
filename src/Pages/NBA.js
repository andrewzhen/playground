import React from 'react';
import NBA_Logo from "../nba.png";
import TNT_Logo from "../tnt.png";

const NBA = () => {
  return (
    <div className="container row">
      <div className="container__img row nba">
        <img src={NBA_Logo} alt="NBA" width="100%" />
      </div>
      
      <div className="container__content col">
        <div className="teams-container row">
          <div className="team row">
            <div className="team__timeouts row">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div id="away" className="team__name"><p>NYK</p></div>
            <div className="team__score"><p>6</p></div>
          </div>
          <div className="team row">
            <div className="team__timeouts row">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div id="home" className="team__name"><p>LAL</p></div>
            <div className="team__score"><p>9</p></div>
          </div>
        </div>

        <div className="games-container row">
          <div id="quarter"><p>1ST</p></div>
          <div id="gameclock"><p>6:28</p></div>
          <div id="shotclock"><p>10</p></div>
        </div>
      </div>

      <div className="container__img row tnt">
        <img src={TNT_Logo} alt="TNT" width="100%" />
      </div>
    </div>
  );
}

export default NBA;