import React, { useState, useEffect, useRef } from "react";
import DesktopMenuStyled from "./DesktopMenu.styled";
import Link from "next/link";
import groq from "groq";
import { getClient } from "../../lib/sanity.server";
import NavShimmer from "../NavShimmer";
import { useRouter } from 'next/router';

// query
const query = groq`*[_type == 'menu'][0]{
  ...,
  menu[]{
    ...,
    page->{title, slug} 
  },
  shimmer{
    ...,
    image {
      ...,
      asset->
    }
  }
}`;

export default function menu() {
  const [data, setData] = useState();
  const preview = false;
	const router = useRouter();

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
                  <a className={item?.page?.slug?.current === router?.asPath || item?.page?.slug?.current.includes('news') && router?.asPath?.includes('news') ? 'is-active' : ''}>
                    <span>
                      {item?.linkTitle ||
                        item?.page?.title ||
                        "Missing page title"}
                    </span>
                  </a>
                </Link>
              );
            })
          : null}
      </div>
      <NavShimmer shimmer={data?.shimmer} />
    </DesktopMenuStyled>
  );
}
