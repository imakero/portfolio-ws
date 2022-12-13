import React from "react";
import {} from "storyblok-rich-text-react-renderer-ts";

type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = ({ level, children }: HeadingProps) => {
  const size = ["4xl", "3xl", "2xl", "xl", "lg", "md"];
  return React.createElement(
    `h${level}`,
    { className: `font-bold font-${size[level - 1]} my-4` },
    children
  );
};

export default Heading;
