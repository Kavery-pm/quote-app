import React from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "shiny", text: "Learning React is fun!" },
  { id: "q2", author: "Kavery", text: "Learning React is great!" },
];
const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  console.log(match);
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) return <p>Quote not found</p>;
  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.path}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </React.Fragment>
  );
};
export default QuoteDetail;
