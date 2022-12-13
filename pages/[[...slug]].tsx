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

type PageProps = {
  story: StoryData;
  preview: boolean;
  navigation: any;
};

export default function Home({ story, preview, navigation }: PageProps) {
  story = useStoryblokState(
    story,
    {
      resolveRelations: ["featured_projects.projects"],
    },
    preview
  );

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout story={navigation}>
        <StoryblokComponent blok={story.content} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  let slug = "home";

  let sbParams = {
    version: "published",
    resolve_links: "url",
    resolve_relations: ["featured_projects.projects"],
  };

  if (context.preview) {
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
      preview: context.preview || false,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links/");

  const paths: any = [];
  Object.values(data.links).forEach(({ slug, isFolder }: any) => {
    if (isFolder) {
      return;
    }
    const splittedSlug = slug === "home" ? false : slug.split("/");
    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths,
    fallback: false,
  };
};
