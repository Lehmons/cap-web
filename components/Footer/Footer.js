import React, { useState, useEffect } from "react";
import FooterStyles from "./Footer.styled";
import Logo from "./logo.svg";
import Link from "next/link";
import groq from "groq";
import { getClient } from "../../lib/sanity.server";

// query
const query = groq`*[_type == 'menu'][0]{
  ...,
  menu[]{
    ...,
    page->{title, slug} 
  }
}`;

export default function Footer() {
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
    <FooterStyles>
      <section>
        <span>Get in touch</span>
        <section>
          <a className="cta" href="tel:08000862760">
            0800 086 2760
          </a>
          <a className="cta" href="mailto:info@capawards.co.uk?subject=Enquiry">
            hq@capaward.co.uk
          </a>
        </section>
      </section>
      <section>
        <Logo />
        <section className="menu-items">
          {data?.menu.map((item, i) => (
            <Link href={item?.page?.slug?.current} key={i} scroll={false}>
              <a>
                {item?.linkTitle || item?.page?.title || "Missing page title"}
              </a>
            </Link>
          ))}
        </section>
      </section>
      <section>
        <span>Follow us</span>
        <section>
          <a
            className="cta"
            href="https://twitter.com/IanCAPaward"
            target="_blank"
            rel="noopener, nofollow"
          >
            Twitter
          </a>
          <a
            className="cta"
            href="http://uk.linkedin.com/in/ianjackson1"
            target="_blank"
            rel="noopener, nofollow"
          >
            LinkedIn
          </a>
        </section>
      </section>
      <section className="legal">
        <span>Company No. 03613459</span>
        <span>VAT 715109657</span>
      </section>
    </FooterStyles>
  );
}
