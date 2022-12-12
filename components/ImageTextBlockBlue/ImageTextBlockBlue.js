import React, { useState, useRef, useEffect } from "react";
import ImageTextBlockBlueStyles from "./ImageTextBlockBlue.styled";
import SimpleBlockContent from "../SimpleBlockContent";
import ImageBlock from "../ImageBlock";
import useWindowSize from "~/lib/useWindowSize";
import Link from "next/link";

import { urlFor, urlPortraitFor } from "../../lib/sanity";

export default function ImageTextBlockBlue({ image, paragraph }) {
  return (
    <ImageTextBlockBlueStyles className={`page-text`}>
      {paragraph && (
        <section className="text">
          <SimpleBlockContent blocks={paragraph} />
        </section>
      )}
      {image && (
        <ImageBlock
          title={image?.alt}
          text={image?.alt}
          image={image}
          asset={image?.asset}
          isThumb={false}
          hasPaddingBottom={true}
        />
      )}
    </ImageTextBlockBlueStyles>
  );
}
