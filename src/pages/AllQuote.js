import QuoteList from '../components/quotes/QuoteList';
const AllQuote = () => {
    const DUMMY_QUOTES = [
        { id: 'q1', author: 'shiny', text: 'Learning React is fun!' },
        { id: 'q2', author: 'Kavery', text: 'Learning React is great!' },
      ];
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
};
export default AllQuote;
