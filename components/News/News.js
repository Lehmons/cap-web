import React, { useState } from "react";
import NewsStyles from "./News.styled";
import NewsPost from "../NewsPost";

export default function News({
  pageTransition,
  pageVariants,
  pageStyle,
  title,
  paragraph,
  slug,
  date,
  images,
}) {
  return (
    <NewsStyles
      key={"news"}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page news"
    >
      {title && (
        <NewsPost
          title={title}
          paragraph={paragraph}
          date={date}
          images={images}
          slug={slug}
          showOneImage={false}
        />
      )}
    </NewsStyles>
  );
}
