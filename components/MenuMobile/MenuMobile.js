import React, { useState, useEffect } from "react";
import MenuMobileStyles from "./MenuMobile.styled";
import groq from "groq";
import { getClient } from "../../lib/sanity.server";
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
  const [data, setData] = useState();

  const setup = async () => {
    const preview = false;
    const newData = await getClient(preview).fetch(query); // fetches the data
    if (newData) {
      setData(newData[0]?.menu); // set data if it's returned
    }
  };

  useEffect(() => {
    setup(); // runs when menu is mounted on the page
  }, []);

  return (
    <MenuMobileStyles>
      <div className="menu-items">
        {data
          ? data?.map((item, i) => {
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
    </MenuMobileStyles>
  );
}
