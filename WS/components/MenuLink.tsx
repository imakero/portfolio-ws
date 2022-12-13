import { storyblokEditable } from "@storyblok/react";
import NextLink from "next/link";
import { Blok, SbMenuLink } from "../types/Types";

type MenuLinkProps = {
  blok: Blok<SbMenuLink>;
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
