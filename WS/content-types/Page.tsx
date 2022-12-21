import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Blok, SbPage } from "../types/Types";

type PageProps = {
  blok: Blok<SbPage>;
};

const Page = ({ blok }: PageProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Page;
