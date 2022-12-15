import { Richtext, SbBlokData, StoryData } from "@storyblok/react";

export type Link = {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
};

export type Blok<BlokType = {}> = SbBlokData & BlokType;

export type SbSection = {
  title: string;
  body: SbBlokData[];
};
export type SbFeaturedArticles = {
  title: string;
  articles: StoryData<Blok<SbArticle>>[];
};

export type SbArticle = {
  image: SbImage;
  title: string;
  content: Richtext;
  preview: Richtext;
  subtitle: string;
};

export type SbProject = {
  image: SbImage;
  title: string;
  description: Richtext;
  tag_list: string[];
};

export type SbFeaturedProjects = {
  projects: StoryData<Blok<SbProject>>[];
  heading: string;
};

export type SbMenuLink = {
  link: Link;
  name: string;
};

export type SbNavigation = {
  header_menu: Blok<Blok<SbMenuLink>[]>;
};

export type SbPage = {
  body: SbBlokData[];
};

export type SbImage = {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  is_external_url: boolean;
};

export type Content = {
  _uid: string;
  component: string;
  _editable: string;
};
