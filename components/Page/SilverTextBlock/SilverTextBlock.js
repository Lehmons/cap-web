import React, { useState } from "react";
import SilverTextBlockStyles from "./SilverTextBlock.styled";
import SimpleBlockContent from "~/components/SimpleBlockContent";
import Link from "next/link";
import Chevron from "./chevron.svg";

export default function PageText({ paragraph, lineBreaker, linkedPage }) {
  console.log(linkedPage);
  return (
    <SilverTextBlockStyles
      className={`page-text ${lineBreaker ? "is-linebreaker" : ""}`}
    >
      {paragraph && (
        <section className="text">
          <SimpleBlockContent blocks={paragraph} />
        </section>
      )}
      {linkedPage && (
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
    </SilverTextBlockStyles>
  );
}
