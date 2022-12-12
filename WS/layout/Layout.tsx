import { SbBlokData } from "@storyblok/react";
import Header from "../components/Header";
import { Story } from "../types/Types";

type LayoutProps = {
  children?: React.ReactNode;
  story: Story & { content: SbBlokData & { header_menu: SbBlokData[] } };
};

const Layout = ({ children, story }: LayoutProps) => (
  <div className="font-sans">
    <Header story={story} />
    {children}
  </div>
);

export default Layout;
