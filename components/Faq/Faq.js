import React, { useState } from "react";
import FaqStyles from "./Faq.styled";
import Accordion from "../Accordion";
import SimpleBlockContent from "../SimpleBlockContent";
import FormEnquiry from "../FormEnquiry";
import Footer from "../Footer";

export default function Faq({
  pageTransition,
  pageVariants,
  pageStyle,
  paragraph,
  title,
  faqs,
}) {
  const [expanded, setExpanded] = useState([0]);

  const onExpanded = (i) => {
    if (expanded?.includes(i)) {
      setExpanded([]);
      return;
    }
    setExpanded([i]);
  };

  return (
    <FaqStyles
      key={"faq"}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page faq"
    >
      {title && (
        <section className="faq-title">
          <h1>{title}</h1>
        </section>
      )}
      {paragraph && (
        <section className="description">
          <SimpleBlockContent blocks={paragraph} />
        </section>
      )}
      <section className="accordion-container">
        {faqs
          ? faqs.map((faq, i) => (
              <Accordion
                key={i}
                title={faq?.title}
                i={i}
                expanded={expanded}
                setExpanded={onExpanded}
              >
                <section className="faq-p">
                  {faq?.paragraph && (
                    <SimpleBlockContent blocks={faq?.paragraph} />
                  )}
                </section>
              </Accordion>
            ))
          : null}
      </section>
      <FormEnquiry />
      <Footer />
    </FaqStyles>
  );
}
