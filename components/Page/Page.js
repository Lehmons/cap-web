import React, { useState } from "react";
import PageStyles from "./Page.styled";
import TextBlock from "./TextBlock";
import ImageBlock from "../ImageBlock";
import ImageTextBlock from "../ImageTextBlock";

export default function Page({
  pageTransition,
  pageVariants,
  pageStyle,
  blocks,
}) {
  return (
    <PageStyles
      key={"page"}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page page"
    >
      {blocks
        ? blocks.map((block, i) => {
            if (block?._type == "textBlock") {
              return (
                <TextBlock
                  key={i}
                  paragraph={block?.paragraph}
                  lineBreaker={block?.lineBreaker}
                />
              );
            }
            if (block?._type == "imageBlock") {
              return (
                <section className="image-block" key={i}>
                  <ImageBlock
                    title={block?.image?.alt}
                    text={block?.image?.alt}
                    image={block?.image}
                    asset={block?.image?.asset}
                    isThumb={false}
                    hasPaddingBottom={true}
                  />
                </section>
              );
            }
            if (block?._type == "imageTextBlock") {
              return (
                <ImageTextBlock
                  key={i}
                  image={block?.image?.image}
                  paragraph={block?.paragraph}
                  lineBreaker={block?.lineBreaker}
                />
              );
            }
          })
        : null}
    </PageStyles>
  );
}
