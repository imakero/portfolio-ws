import {
  useStoryblokState,
  getStoryblokApi,
  StoryData,
  Story,
  StoryblokComponent,
} from "@storyblok/react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../WS/layout/Layout";
import { generateSitemap } from "../WS/utils/sitemap";

type PageProps = {
  story: StoryData;
  preview: boolean;
  navigation: any;
};

export default function Home({ story, preview, navigation }: PageProps) {
  story = useStoryblokState(
    story,
    {
      resolveRelations: [
        "featured_projects.projects",
        "featured_articles.articles",
      ],
    },
    preview
  );

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout story={navigation}>
        <StoryblokComponent blok={story.content} tags={story.tag_list} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview, params }) => {
  let slug = params?.slug
    ? Array.isArray(params.slug)
      ? params.slug.join("/")
      : params.slug
    : "home";

  let sbParams = {
    version: "published",
    resolve_links: "url",
    resolve_relations: [
      "featured_projects.projects",
      "featured_articles.articles",
    ],
  };

  if (preview) {
    sbParams.version = "draft";
  }

  const storyblokApi = getStoryblokApi();
  const { data }: Story = await storyblokApi.get(
    `cdn/stories/${slug}`,
    sbParams
  );
  const { data: navigation } = await storyblokApi.get("cdn/stories/navigation");

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      navigation: navigation ? navigation.story : false,
      preview: preview || false,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links/");

  const paths: any = [];
  Object.values(data.links).forEach(({ slug, is_folder }: any) => {
    if (is_folder || slug === "navigation") {
      return;
    }
    const splittedSlug = slug === "home" ? false : slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  generateSitemap(paths);

  return {
    paths,
    fallback: false,
  };
};
