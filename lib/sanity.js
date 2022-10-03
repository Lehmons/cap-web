// lib/sanity.js
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";

const aspect = {
  w: 233,
  h: 291,
};
const portraitRatio = aspect.h / aspect.w;

import { config } from "./config";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error("Couldn't find env var NEXT_PUBLIC_SANITY_PROJECT_ID!");
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error("Couldn't find env var NEXT_PUBLIC_SANITY_DATASET");
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = ({ image, isThumb, width, height }) => {
  if (width && !height) {
    return createImageUrlBuilder(config)
      .image(image)
      .auto("format")
      .width(width)
      .url();
  }

  if (width && height) {
    return createImageUrlBuilder(config)
      .image(image)
      .auto("format")
      .fit("crop")
      .width(width)
      .height(height)
      .url();
  }

  return createImageUrlBuilder(config)
    .image(image)
    .auto("format")
    .width(isThumb ? process.env.thumbSize : process.env.desktopSize)
    .url();
};

export const urlPortraitFor = ({ image, isThumb }) => {
  const height = isThumb
    ? Math.round(process.env.thumbSize * process.env.portraitRatio)
    : Math.round(process.env.desktopSize * process.env.portraitRatio);
  return createImageUrlBuilder(config)
    .image(image)
    .auto("format")
    .fit("crop")
    .width(isThumb ? process.env.thumbSize : process.env.desktopSize)
    .height(height)
    .url();
};

export const swatchFor = ({ image }) =>
  createImageUrlBuilder(config)
    .image(image)
    .auto("format")
    .fit("crop")
    .width(200)
    .height(200)
    .url();

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);