import React, { useState } from "react";
import NewsOverviewStyles from "./NewsOverview.styled";
import NewsPost from "../NewsPost";

export default function NewsOverview({
  pageTransition,
  pageVariants,
  pageStyle,
  posts,
}) {
  return (
    <NewsOverviewStyles
      key={"newsOverview"}
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page news-overview"
    >
      {posts
        ? posts.map((post, i) => {
            return (
              <NewsPost
                key={i}
                title={post?.title}
                date={post?.date}
                slug={post?.slug}
                paragraph={post?.paragraph}
                images={post?.images}
              />
            );
          })
        : null}
    </NewsOverviewStyles>
  );
}
