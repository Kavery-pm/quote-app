import React from "react";
import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <React.Fragment>
      <h1>QUOTE DETAIL</h1>;<h2>{params.quoteId}</h2>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </React.Fragment>
  );
};
export default QuoteDetail;
