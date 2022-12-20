import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import RockHeading from "../components/RockHeading";
import { Blok, SbSection } from "../types/Types";

type SectionProps = {
  blok: Blok<SbSection>;
};

const Section = ({ blok }: SectionProps) => {
  return (
    <section
      id={blok.title.toLowerCase()}
      className="container mx-auto py-16"
      {...storyblokEditable(blok)}
    >
      <RockHeading className="mb-32">{blok.title}</RockHeading>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </section>
  );
};

export default Section;
