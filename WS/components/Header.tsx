import { SbBlokData, StoryData } from "@storyblok/react";
import Link from "next/link";
import { Blok, SbNavigation } from "../types/Types";
import GitHubIcon from "./icons/GitHubIcon";
import Navigation from "./Navigation";

type HeaderProps = {
  story: StoryData<Blok<SbNavigation>>;
};

const Header = ({ story }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center p-4 absolute w-full text-xl bg-primary z-10">
      <Link href="http://www.github.com/imakero" target="_blank" legacyBehavior>
        <a className="flex items-center font-extralight text-white fill-white space-x-2 hover:text-secondary hover:fill-secondary">
          <GitHubIcon />
          <span>Imakero</span>
        </a>
      </Link>
      <Navigation blok={story.content} />
    </header>
  );
};

export default Header;
