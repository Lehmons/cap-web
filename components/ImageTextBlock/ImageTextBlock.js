import React, { useState, useRef, useEffect  } from "react";
import ImageTextBlockStyles from "./ImageTextBlock.styled";
import SimpleBlockContent from "../SimpleBlockContent";
import ImageBlock from "../ImageBlock";
import useWindowSize from "~/lib/useWindowSize";
import Link from "next/link";

import { urlFor, urlPortraitFor } from "../../lib/sanity";

export default function ImageTextBlock({
  image,
  lineBreaker,
  paragraph
}) {
  
  return (
    <ImageTextBlockStyles
      className={`page-text ${lineBreaker ? "is-linebreaker" : ""}`}
    >
      {image && (
        <ImageBlock
          title={image?.alt}
          text={image?.alt}
          image={image}
          asset={image?.asset}
          isThumb={false}
          hasPaddingBottom={true}
        />)}
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
    </ImageTextBlockStyles>
  );
}