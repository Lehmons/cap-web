import groq from "groq";

const calcDocType = ({ slugArray }) => {
  const firstSlug = slugArray?.[0];

  if (firstSlug == "/") {
    return "home";
  }

  if (firstSlug == "news" && slugArray?.length == 1) {
    return "newsOverview";
  }

  if (firstSlug == "news" && slugArray?.length == 2) {
    return "news";
  }

  if (firstSlug == "faq" || firstSlug == "faqs") {
    return "faq";
  }

  return "page";
};

export default function getQueryFromSlug({ slug: slugArray = [] }) {
  const docQuery = {
    home: groq`*[_type == "home"][0]{
      ...,
      blocks[]{
        ...,
        _type == 'imageTextBlock' => {
          ...,
          linkedPage{
            ...,
            page->{title, slug}
          },
          image[0]{
            image {
              ...,
              asset->
            }
          },
        },
        _type == 'imageTextBlockBlue' => {
          ...,
          linkedPage{
            ...,
            page->{title, slug}
          },
          image[0]{
            image {
              ...,
              asset->
            }
          },
        },
        _type == 'imageBlock' => {
          ...,
          image {
            ...,
            asset->
          }
        },
        _type == 'textBlock' => {
          ...,
          linkedPage{
            ...,
            page->{title, slug}
          },
          paragraph[]{
            ...,
            markDefs[]{
              ...,
              _type == "link" => {
                "type": @.internalLink->_type,
                "internalLink": @.internalLink->slug
              }
            }
          },
        },
        _type == 'blueTextBlock' => {
          ...,
          linkedPage{
            ...,
            page->{title, slug}
          },
          paragraph[]{
            ...,
            markDefs[]{
              ...,
              _type == "link" => {
                "type": @.internalLink->_type,
                "internalLink": @.internalLink->slug
              }
            }
          },
        },
        _type == 'silverTextBlock' => {
          ...,
          linkedPage{
            ...,
            page->{title, slug}
          },
          paragraph[]{
            ...,
            markDefs[]{
              ...,
              _type == "link" => {
                "type": @.internalLink->_type,
                "internalLink": @.internalLink->slug
              }
            }
          },
        },
      }
    }`,
    faq: groq`*[_type == "faq"][0]{...}`,
    news: groq`*[_type == "news" && slug.current == $slug][0]{
      ...,
      images[]{
        ...,
        image{
          asset->
        }
      }
    }`,
    newsOverview: groq`*[_type == "news"][0...10]{
      ...,
      images[]{
        ...,
        image{
          asset->
        }
      }
    }`,
    page: groq`*[_type == "page" && slug.current == $slug][0]{
      ...,
      blocks[]{
        ...,
        _type == 'imageTextBlock' => {
          ...,
          image[0]{
            image {
              ...,
              asset->
            }
          },
        },
        _type == 'imageTextBlockBlue' => {
          ...,
          image[0]{
            image {
              ...,
              asset->
            }
          },
        },
        _type == 'imageBlock' => {
          ...,
          image {
            ...,
            asset->
          }
        },
        _type == 'textBlock' => {
          ...,
          linkedPage{
            ...,
            page->{title, slug}
          },
          paragraph[]{
            ...,
            markDefs[]{
              ...,
              _type == "link" => {
                "type": @.internalLink->_type,
                "internalLink": @.internalLink->slug
              }
            }
          },
        },
        _type == 'blueTextBlock' => {
          ...,
          linkedPage{
            ...,
            page->{title, slug}
          },
          paragraph[]{
            ...,
            markDefs[]{
              ...,
              _type == "link" => {
                "type": @.internalLink->_type,
                "internalLink": @.internalLink->slug
              }
            }
          },
        },
        _type == 'silverTextBlock' => {
          ...,
          linkedPage{
            ...,
            page->{title, slug}
          },
          paragraph[]{
            ...,
            markDefs[]{
              ...,
              _type == "link" => {
                "type": @.internalLink->_type,
                "internalLink": @.internalLink->slug
              }
            }
          },
        },
      }
    }`,
  };

  const docType = calcDocType({
    slugArray,
  });

  if (slugArray?.length === 0) {
    return {
      docType: "home",
      queryParams: {},
      query: docQuery.home,
    };
  }

  const queryParams = { slug: `/${slugArray.join("/")}` };

  return {
    docType,
    queryParams,
    query: docQuery[docType],
  };
}
