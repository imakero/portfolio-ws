import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData,
} from "@storyblok/react";

type NavigationProps = {
  blok: SbBlokData & { header_menu: SbBlokData[] };
};

const Navigation = ({ blok }: NavigationProps) => {
  return (
    <div className="space-x-2" {...storyblokEditable(blok)}>
      {blok.header_menu.map((nestedBlok) => (
        <StoryblokComponent
          className=""
          blok={nestedBlok}
          key={nestedBlok._uid}
        />
      ))}
    </div>
  );
};

export default Navigation;
