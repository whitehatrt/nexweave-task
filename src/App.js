import Layout from "./components/Layout";
import Blank from "./sections/Blank";
import Campaigns from "./sections/Campaigns";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Blank />
          </Route>
          <Route exact path="/campaigns">
            <Campaigns />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
