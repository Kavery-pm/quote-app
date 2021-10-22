const FIREBASE_DOMAIN = "https://reacthook-f4714.firebaseio.com/";
export const getAllQuotes = async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "could not fetch quotes");
  const transformedQuotes = [];
  for (const key in data) {
    const quoteObject = {
      id: key,
      ...data[key],
    };
    transformedQuotes.push(quoteObject);
  }
  return transformedQuotes;
};

export const getSingleQuote = async (quoteId) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = response.json();
  if (!response.ok) throw new Error(data.message || "could not fetch quote");
  const loadedQuote = {
    id: quoteId,
    ...data,
  };
  return loadedQuote;
};

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}
