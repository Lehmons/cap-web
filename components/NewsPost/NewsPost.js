import React, { useState } from "react";
import NewsPostStyles from "./NewsPost.styled";
import ImageBlock from "../ImageBlock";
import SimpleBlockContent from "../SimpleBlockContent";
import dayjs from "dayjs";

export default function NewsPost({ title, images, date, slug, paragraph }) {
  const prettyDate = date ? dayjs(date).format("MMMM D, YYYY") : null;
  return (
    <NewsPostStyles className="news-post">
      {title && <h2>{title}</h2>}
      {prettyDate && <p>{prettyDate}</p>}
      {paragraph && <SimpleBlockContent blocks={paragraph} />}
      {images?.length && (
        <section className="image-wrapper">
          <ImageBlock
            title={images[0]?.image?.alt}
            text={images[0]?.image?.alt}
            image={images[0]?.image}
            asset={images[0]?.image?.asset}
            isThumb={false}
            hasPaddingBottom={true}
          />
        </section>
      )}
    </NewsPostStyles>
  );
}
