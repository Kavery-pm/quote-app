import { Route, Switch } from "react-router-dom";
import AllQuote from "./pages/AllQuote";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
function App() {
  return (
    <Switch>
      <Route path="/quotes">
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
