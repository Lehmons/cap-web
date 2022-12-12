import React, { useState } from "react";
import NewsPostStyles from "./NewsPost.styled";
import ImageBlock from "../ImageBlock";
import SimpleBlockContent from "../SimpleBlockContent";
import dayjs from "dayjs";

export default function NewsPost({
  title,
  images,
  date,
  slug,
  paragraph,
  showOneImage,
}) {
  const prettyDate = date ? dayjs(date).format("MMMM D, YYYY") : null;
  return (
    <NewsPostStyles className="news-post">
      {title && (
        <section className="news-text">
          <h2>{title}</h2>
        </section>
      )}
      {prettyDate && (
        <span className="news-date">
          <p>{prettyDate}</p>
        </span>
      )}
      {paragraph && (
        <section className="news-text">
          <SimpleBlockContent blocks={paragraph} />
        </section>
      )}
      {images?.length && showOneImage && (
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
      {images?.length && !showOneImage && (
        <section className="image-wrapper">
          {images.map((image, i) => (
            <ImageBlock
              key={i}
              title={image?.image?.alt}
              text={image?.image?.alt}
              image={image?.image}
              asset={image?.image?.asset}
              isThumb={false}
              hasPaddingBottom={true}
            />
          ))}
        </section>
      )}
    </NewsPostStyles>
  );
}
