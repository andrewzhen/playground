import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Reset.css';
import '../css/App.css';

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/lark">Lark</Link>
      </li>
      <li>
        <Link to="/nba">NBA</Link>
      </li>
    </ul>
  );
}

export default Home;