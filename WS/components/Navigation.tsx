import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState } from "react";
import { Blok, SbNavigation } from "../types/Types";
import MenuIcon from "./icons/MenuIcon";

type NavigationProps = {
  blok: Blok<SbNavigation>;
};

const Navigation = ({ blok }: NavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div {...storyblokEditable(blok)}>
      <div
        className={`md:flex md:flex-row md:space-x-2 md:w-fit md:h-fit md:relative md:translate-y-0 bg-primary opacity-90 h-screen w-screen flex flex-col justify-center items-center fixed top-0 left-0${
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
          className="block md:hidden fill-white z-10"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <MenuIcon />
        </button>
      )}
    </div>
  );
};

export default Navigation;
