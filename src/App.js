import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Lark from "./Pages/Lark";
import NBA from "./Pages/NBA";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/lark" component={Lark} />
        <Route path="/nba" component={NBA} />
      </Switch>
    </BrowserRouter>
  );
}