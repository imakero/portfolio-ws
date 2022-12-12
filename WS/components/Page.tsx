import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData,
} from "@storyblok/react";

type PageProps = {
  blok: SbBlokData & { body: SbBlokData[] };
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
