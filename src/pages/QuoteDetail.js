import React from "react";
import { Route, useParams, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "shiny", text: "Learning React is fun!" },
  { id: "q2", author: "Kavery", text: "Learning React is great!" },
];
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if(!quote) return <p>Quote not found</p>
  return (
    <React.Fragment>
     <HighlightedQuote text={quote.text} author={quote.author}/>
     <div className='centered'>
         <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load comments</Link>
     </div>
      <Route to={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </React.Fragment>
  );
};
export default QuoteDetail;
