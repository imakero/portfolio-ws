import { SbBlokData, StoryData } from "@storyblok/react";
import Header from "../components/Header";
import { Blok, SbNavigation } from "../types/Types";

type LayoutProps = {
  children?: React.ReactNode;
  story: StoryData & { content: Blok<SbNavigation> };
};

const Layout = ({ children, story }: LayoutProps) => (
  <div>
    <Header story={story} />
    {children}
  </div>
);

export default Layout;
