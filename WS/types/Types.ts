import { Richtext, SbBlokData } from "@storyblok/react";

export type Link = {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
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

export type Story = {
  name: string;
  created_at: string;
  published_at: Date;
  id: number;
  uuid: string;
  content: Content;
  slug: string;
  full_slug: string;
  sort_by_date: null;
  position: number;
  tag_list: any[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: null;
  group_id: string;
  first_published_at: Date;
  release_id: null;
  lang: string;
  path: null | string;
  alternates: any[];
  default_full_slug: null;
  translated_slugs: null;
};

export type Content = {
  _uid: string;
  component: string;
  _editable: string;
};

export type Project = SbBlokData & {
  image: SbImage;
  title: string;
  description: Richtext;
  tag_list: string[];
};
