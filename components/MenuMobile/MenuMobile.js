import React, { useState, useEffect, useRef } from "react";
import MenuMobileStyles from "./MenuMobile.styled";
import groq from "groq";
import { getClient } from "../../lib/sanity.server";
import { useAppStore } from "../../stores/AppStore";
import Link from "next/link";
import Chevron from "./chevron.svg";
import Logo from "./logo.svg";
import useKeyPress from "../../lib/useKeyPress";

// query
const query = groq`*[_type == 'menu'][0]{
  menu[]{
    ...,
    page->{title, slug} 
  },
}`;

export default function Menu() {
  const preview = false;
  const ref = useRef();
  const [data, setData] = useState(); // variable that holds data
  const [{ isMenuOpen }, { setIsMenuOpen }] = useAppStore();

  const escPress = useKeyPress("Escape");

  const setup = async () => {
    const newData = await getClient(preview).fetch(query); // fetches the data
    if (newData) {
      setData(newData); // set data if it's returned
    }
  };

  const close = (e) => {
    e?.preventDefault();
    setIsMenuOpen(false);
  };

  const onNavigate = (e) => {
    close();
  };

  const variants = {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    in: {
      opacity: 1,
      x: "0%",
    },
    out: {
      opacity: 0,
      x: "-100%",
    },
  };

  const pageTransition = {
    type: "tween",
    ease: [0.42, 0, 0.58, 1],
    duration: 0.3,
  };

  useEffect(() => {
    setup(); // runs when menu is mounted on the page
  }, []);

  useEffect(() => {
    if (escPress) {
      close();
    }
  }, [escPress]);

  useEffect(() => {
    const handleClick = (event) => {
      if (isMenuOpen) {
        close();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!data) {
    return null;
  }

  return (
    <MenuMobileStyles
      className="mobile-menu"
      initial="initial"
      animate={isMenuOpen ? "in" : "out"}
      exit="out"
      variants={variants}
      transition={pageTransition}
      ref={ref}
    >
      <div className="logo-div">
        <Logo />
      </div>
      <div className="menu-items">
        {data
          ? data?.menu?.map((item, i) => {
              console.log(item);
              if (!item?.page?.slug?.current) {
                return null;
              }
              return (
                <Link href={item?.page?.slug?.current} key={i} scroll={false}>
                  <a onClick={onNavigate}>
                    <span>
                      {item?.linkTitle ||
                        item?.page?.title ||
                        "Missing page title"}
                    </span>
                    <Chevron />
                  </a>
                </Link>
              );
            })
          : null}
      </div>
    </MenuMobileStyles>
  );
}
