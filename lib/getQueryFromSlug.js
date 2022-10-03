import groq from "groq";

export default function getQueryFromSlug({ slug: slugArray = [] }) {
  console.log(slugArray);

  const docQuery = {
    home: groq`*[_type == "home"][0]{title}`,
    page: groq`*[_type == "page" && slug.current == $slug][0]{
      ...
    }`,
  };

  if (slugArray?.length === 0) {
    return {
      docType: "home",
      queryParams: {},
      query: docQuery.home,
    };
  }

  const queryParams = { slug: `/${slugArray.join("/")}` };

  return {
    docType: "page",
    queryParams,
    query: docQuery.page,
  };
}
