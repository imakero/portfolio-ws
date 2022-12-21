import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState } from "react";
import { Blok, SbNavigation } from "../types/Types";
import MenuIcon from "../components/icons/MenuIcon";

type NavigationProps = {
  blok: Blok<SbNavigation>;
};

const Navigation = ({ blok }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav {...storyblokEditable(blok)}>
      <div
        className={`fixed top-0 flex h-screen w-screen flex-col items-center justify-center bg-primary opacity-90 md:relative md:flex md:h-fit md:w-fit md:translate-y-0 md:flex-row md:space-x-4 left-0${
          menuOpen
            ? " translate-y-0 transition-all duration-500"
            : " -translate-y-full transition-all duration-500"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {blok.header_menu.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
      {!menuOpen && (
        <button
          className="z-10 block fill-white md:hidden"
          aria-label="Open menu."
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <MenuIcon />
        </button>
      )}
    </nav>
  );
};

export default Navigation;
