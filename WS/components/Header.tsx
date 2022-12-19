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
      <div className="flex items-center space-x-2">
        <a
          href="http://www.github.com/imakero"
          target="_blank"
          rel="noreferrer"
          className="font-extralight text-white fill-white  hover:text-secondary hover:fill-secondary"
        >
          <GitHubIcon />
        </a>
        <Link href="/" legacyBehavior>
          <a className="font-extralight text-white fill-white hover:text-secondary hover:fill-secondary">
            Imakero
          </a>
        </Link>
      </div>
      <Navigation blok={story.content} />
    </header>
  );
};

export default Header;
