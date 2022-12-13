import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../WS/components/Page";
import Hero from "../WS/blocks/Hero";
import Navigation from "../WS/components/Navigation";
import MenuLink from "../WS/components/MenuLink";
import FeaturedProjects from "../WS/blocks/FeaturedProjects";
import Article from "../WS/components/Article";

const components = {
  page: Page,
  navigation: Navigation,
  hero: Hero,
  menu_link: MenuLink,
  featured_projects: FeaturedProjects,
  article: Article,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
