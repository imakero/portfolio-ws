import { Richtext, SbBlokData, StoryData } from "@storyblok/react";

export type Link = {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
};

export type Blok<BlokType = {}> = SbBlokData & BlokType;

export type SbContactForm = {
  form: Blok<SbForm>[];
  response: Richtext;
};

export type SbForm = {
  fields: Blok<SbFormInput>[];
  submit_text: string;
};

export type SbGalleryType = SbImageType[];

export type SbFormInput = {
  type: "text" | "textarea" | "email";
  label: string;
  name: string;
  placeholder: string;
};

export type SbSection = {
  title: string;
  body: SbBlokData[];
};

export type SbImage = {
  x: number;
  y: number;
  image: SbImageType;
};

export type SbBlob = {
  body: SbBlokData[];
  blob_id: "1" | "2" | "3";
};

export type SbFeaturedArticles = {
  articles: StoryData<Blok<SbArticle>>[];
};

export type SbArticle = {
  image: SbImageType;
  title: string;
  content: Richtext;
  preview: Richtext;
  subtitle: string;
};

export type SbProject = {
  image: SbImageType;
  title: string;
  description: Richtext;
  gallery: SbGalleryType;
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

export type SbGrid = {
  items: SbBlokData[];
};

export type SbRichText = {
  content: Richtext;
};

export type SbImageType = {
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
