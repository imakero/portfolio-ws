import { SbBlokData, StoryData } from "@storyblok/react";
import Link from "next/link";
import { Blok, SbNavigation } from "../types/Types";
import GitHubIcon from "../components/icons/GitHubIcon";
import Navigation from "../block-components/Navigation";

type HeaderProps = {
  story: StoryData<Blok<SbNavigation>>;
};

const Header = ({ story }: HeaderProps) => {
  return (
    <header className="absolute z-10 flex w-full items-center justify-between bg-primary p-4 text-xl">
      <div className="flex items-center space-x-2">
        <a
          href="http://www.github.com/imakero"
          target="_blank"
          rel="noreferrer"
          className="fill-white font-extralight text-white  hover:fill-secondary hover:text-secondary"
        >
          <GitHubIcon />
        </a>
        <Link href="/" legacyBehavior>
          <a className="fill-white font-extralight text-white hover:fill-secondary hover:text-secondary">
            Imakero
          </a>
        </Link>
      </div>
      <Navigation blok={story.content} />
    </header>
  );
};

export default Header;
