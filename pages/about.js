import Link from "next/link";
import React from "react";

const query = groq`*[_type == "About"][0]{
  title
}`;

export default function About({ data }) {
  if (!data) {
    return null;
  }

  retun(<AboutComponent title={data?.title} />);
}

export async function getStasticProbs({ params, preview = false }) {
  const data = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      data,
    },
    revalidate: 1,
  };
}
