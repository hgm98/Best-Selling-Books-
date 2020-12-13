import React from "react";
import "./App.css";
import Nav from "./Nav";
import HF from "./HardcoverFiction";
import HNF from "./HardcoverNonfiction";
import PF from "./PaperbackFiction";
import PNF from "./PaperbackNonfiction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Nav />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hardcoverfiction" component={HF} />
            <Route path="/hardcovernonfiction" component={HNF} />
            <Route path="/paperbackfiction" component={PF} />
            <Route path="/paperbacknonfiction" component={PNF} />
          </Switch>
        </nav>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Welcome to NYC Best Selling Books List!</h1>
    <h2>Select whether you like Fiction or Not | Hardcopy or Not... </h2>
    <i class="fas fa-book-open fa-10x"></i>
  </div>
);

export default App;
