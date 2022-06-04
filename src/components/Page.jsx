import { Helmet } from "react-helmet-async";
import React from "react";

const Page = ({ children, title }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={`${title}`} />
      </Helmet>

      <main>{children}</main>
    </React.Fragment>
  );
};

export default Page;
