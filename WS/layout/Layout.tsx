import { StoryData } from "@storyblok/react";
import Header from "../blocks/Header";
import { Blok, SbNavigation } from "../types/Types";

type LayoutProps = {
  children?: React.ReactNode;
  story: StoryData & { content: Blok<SbNavigation> };
};

const Layout = ({ children, story }: LayoutProps) => (
  <div>
    <Header story={story} />
    <main className="min-h-screen overflow-hidden">{children}</main>
  </div>
);

export default Layout;
