import { SbBlokData, storyblokEditable } from "@storyblok/react";
import NextLink from "next/link";
import { Link } from "../types/Types";

type MenuLinkProps = {
  blok: SbBlokData & { link: Link; name: string };
};

const MenuLink = ({ blok }: MenuLinkProps) => {
  return (
    <NextLink
      href={blok.link.cached_url}
      legacyBehavior
      {...storyblokEditable(blok)}
    >
      <a className="text-xl font-light uppercase tracking-widest text-white hover:text-secondary">
        {blok.name}
      </a>
    </NextLink>
  );
};

export default MenuLink;
