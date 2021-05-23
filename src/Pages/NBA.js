import React, { useState, useEffect } from 'react';
import NBA_Logo from "../nba.png";
import TNT_Logo from "../tnt.png";

const NBA = () => {
  // clock
  const DEFAULT_GAME_CLOCK_MIN = 12;
  const [gameClockMin, setGameClockMin] = useState(DEFAULT_GAME_CLOCK_MIN);
  const DEFAULT_GAME_CLOCK_SEC = "00";
  const [gameClockSec, setGameClockSec] = useState(DEFAULT_GAME_CLOCK_SEC);
  const DEFAULT_SHOT_CLOCK = 24;
  const [shotClock, setShotClock] = useState(DEFAULT_SHOT_CLOCK);

  // quarters
  const QUARTERS = ["1st", "2nd", "3rd", "4th"];
  const [curQuarter, setCurQuarter] = useState(0);

  const handleQuarter = () => {
    curQuarter < QUARTERS.length - 1? 
    setCurQuarter(curQuarter + 1) :
    setCurQuarter(0);
  };

  useEffect(() => {
    shotClock >= 0 ? 
    setTimeout(() => setShotClock(shotClock - 1), 1000) :
    setShotClock(DEFAULT_SHOT_CLOCK);
  }, [shotClock]);

  useEffect(() => {
    let sec = parseInt(gameClockSec);
    let single = sec < 10;

    sec > 0 ? setTimeout(() => setGameClockSec(single ? "0" + (sec - 1) : (sec - 1)), 1000) : setTimeout(() => { setGameClockSec("59"); setGameClockMin(gameClockMin - 1)}, 1000);
  }, [gameClockSec, gameClockMin]);

  useEffect(() => {
    gameClockMin < 0 && setGameClockMin(DEFAULT_GAME_CLOCK_MIN);
  }, [gameClockMin]);

  useEffect(() => {
    console.log(curQuarter);
    document.querySelector("#quarter p").innerHTML = QUARTERS[curQuarter];
  }, [curQuarter]);

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
            <div className="team__score"><p>0</p></div>
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
            <div className="team__score"><p>0</p></div>
          </div>
        </div>

        <div className="games-container row">
          <div 
            id="quarter" 
            onClick={handleQuarter}
          >
            <p>{QUARTERS[curQuarter]}</p>
          </div>
          <div id="gameclock"><p>{`${gameClockMin}:${gameClockSec}`}</p></div>
          <div id="shotclock"><p>{shotClock}</p></div>
        </div>
      </div>

      <div className="container__img row tnt">
        <img src={TNT_Logo} alt="TNT" width="100%" />
      </div>
    </div>
  );
}

export default NBA;