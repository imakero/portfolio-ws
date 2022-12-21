import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../WS/content-types/Page";
import Hero from "../WS/blocks/Hero";
import Navigation from "../WS/block-components/Navigation";
import MenuLink from "../WS/block-components/MenuLink";
import FeaturedProjects from "../WS/blocks/FeaturedProjects";
import Article from "../WS/content-types/Article";
import FeaturedArticles from "../WS/blocks/FeaturedArticles";
import Road from "../WS/blocks/Road";
import Section from "../WS/blocks/Section";
import Blob from "../WS/block-components/Blob";
import Image from "../WS/block-components/Image";
import Grid from "../WS/block-components/Grid";
import RichText from "../WS/block-components/RichText";
import Form from "../WS/block-components/Form";
import FormInput from "../WS/block-components/FormInput";
import ContactForm from "../WS/block-components/ContactForm";
import Project from "../WS/content-types/Project";

const components = {
  blob: Blob,
  contact_form: ContactForm,
  featured_articles: FeaturedArticles,
  featured_projects: FeaturedProjects,
  form: Form,
  form_input: FormInput,
  grid: Grid,
  hero: Hero,
  image: Image,
  menu_link: MenuLink,
  navigation: Navigation,
  article: Article,
  page: Page,
  project: Project,
  richtext: RichText,
  road: Road,
  section: Section,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
