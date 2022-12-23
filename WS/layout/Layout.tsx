import { StoryData } from "@storyblok/react";
import Header from "../blocks/Header";
import FloatingButton from "../components/FloatingButton";
import { Blok, SbNavigation } from "../types/Types";

type LayoutProps = {
  children?: React.ReactNode;
  story: StoryData & { content: Blok<SbNavigation> };
};

const Layout = ({ children, story }: LayoutProps) => {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div>
      <Header story={story} />
      <main className="min-h-screen overflow-hidden">{children}</main>
      <FloatingButton onClick={handleClick} />
    </div>
  );
};

export default Layout;
