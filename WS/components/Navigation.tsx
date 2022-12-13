import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Blok, SbNavigation } from "../types/Types";

type NavigationProps = {
  blok: Blok<SbNavigation>;
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
