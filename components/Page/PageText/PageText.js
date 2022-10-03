import React, { useState } from "react";
import PageTextStyles from "./PageText.styled";
import SimpleBlockContent from "~/components/SimpleBlockContent";

export default function PageText({ paragraph }) {
  return (
    <PageTextStyles className="page-text">
      {paragraph && (
        <section className="text">
          <SimpleBlockContent blocks={paragraph} />
        </section>
      )}
    </PageTextStyles>
  );
}
