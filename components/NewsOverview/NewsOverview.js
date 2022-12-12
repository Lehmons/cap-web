import React, { useState } from "react";
import NewsOverviewStyles from "./NewsOverview.styled";
import NewsPost from "../NewsPost";
import Link from "next/link";

export default function NewsOverview({
  pageTransition,
  pageVariants,
  lineBreaker,
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
			<section className="news-title">
				<h1>News</h1>
			</section>
      {posts
        ? posts.map((post, i) => {
            return (
              <Link key={i} href={post?.slug?.current} scroll={false}>
                <a className="news-post">
                  <NewsPost
                    title={post?.title}
                    date={post?.date}
                    slug={post?.slug}
                    paragraph={post?.paragraph}
                    images={post?.images}
                    showOneImage={true}
                  />
                </a>
              </Link>
            );
          })
        : null}
      {lineBreaker && (
        <>
          <div className="linebreaker"></div>
          <div className="linebreaker"></div>
          <div className="linebreaker"></div>
        </>
      )}
    </NewsOverviewStyles>
  );
}
