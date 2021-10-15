import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/Main-navigation";
import AllQuote from "./pages/AllQuote";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
function App() {
  return (
  <Layout>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes"></Redirect>
      </Route>
      <Route path="/quotes" exact>
        <AllQuote></AllQuote>
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail></QuoteDetail>
      </Route>
      <Route path="/new-quote">
        <NewQuote></NewQuote>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
