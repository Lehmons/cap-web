import React, { useState } from "react";
import TextBlockStyles from "./TextBlock.styled";
import SimpleBlockContent from "~/components/SimpleBlockContent";
import Link from "next/link";
import Chevron from "./chevron.svg";

export default function TextBlock({ paragraph, lineBreaker, linkedPage }) {
  return (
    <TextBlockStyles
      className={`page-text ${lineBreaker ? "is-linebreaker" : ""}`}
    >
      {paragraph && (
        <section className="text">
          <SimpleBlockContent blocks={paragraph} />
        </section>
      )}
      {linkedPage && linkedPage?.page?.slug?.current && (
        <Link href={linkedPage?.page?.slug?.current} scroll={false}>
          <a className="linked-page">
            <span>
              {linkedPage?.linkTitle ||
                linkedPage?.page?.title ||
                "Missing page title"}
            </span>
            <Chevron />
          </a>
        </Link>
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
