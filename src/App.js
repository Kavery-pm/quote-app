import { Route, Switch, Redirect } from "react-router-dom";
import AllQuote from "./pages/AllQuote";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
function App() {
  return (
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
  );
}

export default App;
