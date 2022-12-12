import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../WS/components/Page";
import Teaser from "../WS/components/Teaser";
import Hero from "../WS/blocks/Hero";
import Navigation from "../WS/components/Navigation";
import MenuLink from "../WS/components/MenuLink";

const components = {
  page: Page,
  teaser: Teaser,
  navigation: Navigation,
  hero: Hero,
  menu_link: MenuLink,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
