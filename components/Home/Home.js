import React, { useState } from "react";
import HomeStyles from "./Home.styled";
import TextBlock from "./TextBlock";
import BlueTextBlock from "./BlueTextBlock";
import SilverTextBlock from "./SilverTextBlock";
import ImageBlock from "../ImageBlock";
import ImageTextBlock from "../ImageTextBlock";
import ImageTextBlockBlue from "../ImageTextBlockBlue";
import FormEnquiry from "../FormEnquiry";
import Footer from "../Footer";
import Quote from "./Quote";

export default function Page({
  lineBreaker,
  pageTransition,
  pageVariants,
  pageStyle,
  blocks,
}) {

  console.log(blocks);
  return (
    <HomeStyles
      key={"home"}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="home page"
    >
      {blocks
        ? blocks.map((block, i) => {
            if (block?._type == "textBlock") {
              return (
                <TextBlock
                  key={i}
                  paragraph={block?.paragraph}
                  lineBreaker={block?.lineBreaker}
                  linkedPage={block?.linkedPage}
                />
              );
            }
            if (block?._type == "quotes") {
              return (
                <Quote
                  key={i}
                  quote={block?.quote}
                />
              );
            }
            if (block?._type == "blueTextBlock") {
              return (
                <BlueTextBlock
                  key={i}
                  paragraph={block?.paragraph}
                  lineBreaker={block?.lineBreaker}
                  linkedPage={block?.linkedPage}
                />
              );
            }
            if (block?._type == "silverTextBlock") {
              return (
                <SilverTextBlock
                  key={i}
                  paragraph={block?.paragraph}
                  lineBreaker={block?.lineBreaker}
                  linkedPage={block?.linkedPage}
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
                  linkedPage={block?.linkedPage}
                />
              );
            }
            if (block?._type == "imageTextBlockBlue") {
              return (
                <ImageTextBlockBlue
                  key={i}
                  image={block?.image?.image}
                  paragraph={block?.paragraph}
                  lineBreaker={block?.lineBreaker}
                  linkedPage={block?.linkedPage}
                />
              );
            }
          })
        : null}
      <FormEnquiry />
      <Footer />
    </HomeStyles>
  );
}
