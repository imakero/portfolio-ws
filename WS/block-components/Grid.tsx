import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Blok, SbGrid } from "../types/Types";

type GridProps = {
  blok: Blok<SbGrid>;
};

const Grid = ({ blok }: GridProps) => {
  return (
    <div
      className="grid w-full grid-cols-1 justify-items-center gap-y-24 lg:grid-cols-2 "
      {...storyblokEditable(blok)}
    >
      {blok.items.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
