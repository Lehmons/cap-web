import React, { useState, useRef, useEffect  } from "react";
import ImageTextBlockStyles from "./ImageTextBlock.styled";
import SimpleBlockContent from "../SimpleBlockContent";
import ImageBlock from "../ImageBlock";
import useWindowSize from "~/lib/useWindowSize";
import Link from "next/link";
import Chevron from "./chevron.svg";


export default function ImageTextBlock({
  image,
  lineBreaker,
  paragraph,
  linkedPage
}) {
  
  return (
    <ImageTextBlockStyles
      className={`image-text ${lineBreaker ? "is-linebreaker" : ""}`}
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
    </ImageTextBlockStyles>
  );
}