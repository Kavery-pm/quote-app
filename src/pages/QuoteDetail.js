import { useParams } from "react-router";

const QuoteDetail = () => {
  const params = useParams();
  return <h1>QUOTE DETAIL{params.quoteId}</h1>;
};
export default QuoteDetail;
