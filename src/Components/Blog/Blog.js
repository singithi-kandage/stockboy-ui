import React from "react";

import UnderConstruction from "../UnderConstruction/UnderConstruction";

const Blog = () => {
  return (
    <main>
      <section className="section section--color_info">
        <div className="section__header">
          <div className="line line--half_width line--brown"></div>
          <h2>Blog</h2>
          <div className="line line--half_width line--brown"></div>
        </div>
      </section>
      <UnderConstruction />
    </main>
  );
};

export default Blog;
