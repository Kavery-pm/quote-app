import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import NotFound from './not-found';

const AllQuote = () => {
  
  const{sendRequest, status, data: loadedQuote, error}=useHttp(getAllQuotes, true);
    // const DUMMY_QUOTES = [
    //     { id: 'q1', author: 'shiny', text: 'Learning React is fun!' },
    //     { id: 'q2', author: 'Kavery', text: 'Learning React is great!' },
    //   ];
     useEffect(() => {
       sendRequest();
       
     }, [sendRequest]);
     if(status==='pending'){
       return (
         <div className='centered'>
           <LoadingSpinner/>
         </div>
       )
     }
     if(error){
       return <p className='centered focussed'>{error}</p>
     }
     if(status==='completed'&& (!loadedQuote || loadedQuote.length === 0)){
       return <NotFound/>
     }
  return <QuoteList quotes={loadedQuote}></QuoteList>
};
export default AllQuote;
 