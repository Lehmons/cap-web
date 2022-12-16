import React, { useState, useEffect } from "react";
import QuoteStyles from "./Quote.styled";
import SimpleBlockContent from "~/components/SimpleBlockContent";
import shuffle from "~/lib/Utils/shuffle";

export default function Quote({ quote }) {
  const [quotes, setQuotes] = useState();

  useEffect(()=> {
    if(quote){
      const shuffled = shuffle(quote);
      const firstThree  = shuffled.slice(0, 3);
      setQuotes(firstThree);
    }
  }, [quote]);

  return (
    <QuoteStyles className="quote-block">
      {quotes ? quotes.map((item, i) => (
        <section key={i} className="quote">
          {item?.quote && <q><SimpleBlockContent blocks={item?.quote}/></q>}
          {item?.attribution && <span>{item?.attribution}</span>}
        </section>
      )): null}
    </QuoteStyles>
  );
}
