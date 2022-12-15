import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Blok, SbGrid } from "../types/Types";

type GridProps = {
  blok: Blok<SbGrid>;
};

const Grid = ({ blok }: GridProps) => {
  return (
    <div
      className="grid grid-cols-1 justify-items-center xl:grid-cols-2 gap-y-64 w-full xl:[&>*:nth-child(even)]:translate-y-1/2"
      {...storyblokEditable(blok)}
    >
      {blok.items.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
