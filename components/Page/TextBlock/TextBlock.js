import React, { useState } from "react";
import TextBlockStyles from "./TextBlock.styled";
import SimpleBlockContent from "~/components/SimpleBlockContent";

export default function PageText({ paragraph, lineBreaker }) {
  return (
    <TextBlockStyles
      className={`page-text ${lineBreaker ? "is-linebreaker" : ""}`}
    >
      {paragraph && (
        <section className="text">
          <SimpleBlockContent blocks={paragraph} />
        </section>
      )}
      {lineBreaker && (
        <>
          <div className="linebreaker"></div>
          <div className="linebreaker"></div>
          <div className="linebreaker"></div>
        </>
      )}
    </TextBlockStyles>
  );
}
