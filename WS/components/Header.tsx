import { SbBlokData } from "@storyblok/react";
import Link from "next/link";
import { Story } from "../types/Types";
import GitHubIcon from "./icons/GitHubIcon";
import Navigation from "./Navigation";

type HeaderProps = {
  story: Story & { content: SbBlokData & { header_menu: SbBlokData[] } };
};

const Header = ({ story }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center p-4 absolute w-full text-xl">
      <Link href="/" legacyBehavior>
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
