import React, { useState, Fragment, useRef, useEffect } from "react";
import NavShimmerStyles from "./NavShimmer.styled";
import useWindowSize from "~/lib/useWindowSize";
import ImageBlock from "../ImageBlock";

export default function NavShimmer({ shimmer }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const timer = useRef();

  useEffect(() => {
    function onScroll(e) {
      //Event listener
      setIsScrolling(true);

      clearTimeout(timer.current); //Clear time out
      timer.current = setTimeout(() => {
        setIsScrolling(false);
      }, 120);
    }

    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <NavShimmerStyles
      className={`nav-shimmer ${
        isScrolling ? "is-scrolling" : "is-not-scrolling"
      }`}
    >
      {shimmer && (
        <ImageBlock
          title={shimmer?.image?.alt}
          text={shimmer?.image?.alt}
          image={shimmer?.image}
          asset={shimmer?.image?.asset}
          isThumb={false}
          hasPaddingBottom={false}
        />
      )}
    </NavShimmerStyles>
  );
}
