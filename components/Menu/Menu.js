import React, { useState, useEffect, useRef } from "react";
import MenuStyles from "./Menu.styled";
import groq from "groq";
import Link from "next/link";

// query
const query = groq`*[_type == 'menu']{
  menu[] {
    page-> {
      title,
      slug
    }
  }
}`;

export default function Menu() {
  const preview = false;
  const ref = useRef();
  const [data, setData] = useState(); // variable that holds data

  if (!data) {
    return null;
  }

  return (
    <MenuStyles>
      <div className="menu-items">
        {data
          ? data?.map((item, i) => {
              if (!item?.page?.slug?.current) {
                return null;
              }
              return (
                <Link href={item?.page?.slug?.current} key={i}>
                  <a>{item?.page?.title}</a>
                </Link>
              );
            })
          : null}
      </div>
    </MenuStyles>
  );
}
