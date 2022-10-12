import React, { useState, useEffect, useRef } from "react";
import DesktopMenuStyled from "./DesktopMenu.styled";
import Link from "next/link";
import groq from "groq";
import { getClient } from "../../lib/sanity.server";

// query
const query = groq`*[_type == 'menu'][0]{
  menu[]{page->{ title, slug
        }
}
}`;

export default function menu() {
  const [data, setData] = useState();
  const preview = false;

  const setup = async () => {
    const newData = await getClient(preview).fetch(query); // fetches the data
    if (newData) {
      setData(newData); // set data if it's returned
    }
  };

  useEffect(() => {
    setup();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <DesktopMenuStyled>
      <div className="menu-items">
        {data
          ? data?.menu?.map((item, i) => {
              if (!item?.page?.slug?.current) {
                return null;
              }
              return (
                <Link href={item?.page?.slug?.current} key={i}>
                  <a>
                    <span>{item?.page?.title}</span>
                  </a>
                </Link>
              );
            })
          : null}
      </div>
    </DesktopMenuStyled>
  );
}
