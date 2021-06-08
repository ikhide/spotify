import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Layout from "./components/Layout";
import Favorites from "./components/Favorite";
import Playlist from "./components/Playlist";
import Charts from "./components/Charts";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Search" exact component={Search} />
            <Route path="/Favorites" exact component={Favorites} />
            <Route path="/Playlist" exact component={Playlist} />
            <Route path="/Charts" exact component={Charts} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
