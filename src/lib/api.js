const FIREBASE_DOMAIN = 'https://reacthook-f4714.firebaseio.com/';
export const getAllQuotes =async ()=>{
   const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
   const data = await response.json();
   if(!response.ok) throw new Error(data.message || 'could not fetch quotes');
const transformedQuotes = [];
for(const key in data){
    const quoteObject = {
        id: key,
        ...data[key]
    }
    transformedQuotes.push(quoteObject)
};
return transformedQuotes;
}