import React, { useState } from "react";
import PageStyles from "./Page.styled";
import PageText from "./PageText";

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
            if (block?._type == "pageText") {
              return <PageText key={i} paragraph={block?.paragraph} />;
            }
            if (block?._type == "pageImageText") {
              return (
                <PageImageText
                  key={i}
                  image={block?.image}
                  paragraph={block?.paragraph}
                  linkedPage={block?.linkedPage}
                />
              );
            }
            if (block?._type == "pageImage") {
              return null;
            }
          })
        : null}
    </PageStyles>
  );
}
