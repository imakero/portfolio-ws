import { SbBlokData, StoryData } from "@storyblok/react";
import Header from "../components/Header";

type LayoutProps = {
  children?: React.ReactNode;
  story: StoryData & { content: SbBlokData & { header_menu: SbBlokData[] } };
};

const Layout = ({ children, story }: LayoutProps) => (
  <div>
    <Header story={story} />
    {children}
  </div>
);

export default Layout;
