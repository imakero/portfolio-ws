import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Blok, SbPage } from "../types/Types";

type PageProps = {
  blok: Blok<SbPage>;
};

const Page = ({ blok }: PageProps) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
