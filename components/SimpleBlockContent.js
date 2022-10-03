import React from "react";

function SimpleBlockContent({ blocks, defaultTag }) {
  if (!blocks) {
    console.error("Missing blocks");
    return null;
  }

  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers(defaultTag)}
      projectId={projectId}
      dataset={dataset}
    />
  );
}

export default SimpleBlockContent;
