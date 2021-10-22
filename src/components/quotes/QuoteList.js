import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      //if greater than 0 descending
      return quoteA.id > quoteB.id ? 1 : -1; //q1 q2 -1 ascending
    } else {
      return quoteA.id < quoteB.id ? 1 : -1; //q1 q2 1 descending
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isSortAscending = queryParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(props.quotes, isSortAscending);

  const changeSortingHandler = () => {
    history.push(`${location.pathname}?sort=${(isSortAscending ? "desc" : "asc")}`);
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          {isSortAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
