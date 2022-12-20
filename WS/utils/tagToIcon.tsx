import { FaReact, FaGithub, FaDocker } from "react-icons/fa";
import {
  SiMapbox,
  SiNestjs,
  SiTypescript,
  SiFirebase,
  SiXstate,
  SiMongodb,
  SiTailwindcss,
  SiStoryblok,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const tagToIcon = (tag: string) => {
  switch (tag) {
    case "Docker":
      return <FaDocker />;
    case "Firebase":
      return <SiFirebase />;
    case "Github Actions":
      return <FaGithub />;
    case "Mapbox":
      return <SiMapbox />;
    case "MongoDB":
      return <SiMongodb />;
    case "NestJS":
      return <SiNestjs />;
    case "Next.js":
      return <TbBrandNextjs />;
    case "React":
      return <FaReact />;
    case "Storyblok":
      return <SiStoryblok />;
    case "Tailwind CSS":
      return <SiTailwindcss />;
    case "TypeScript":
      return <SiTypescript />;
    case "XState":
      return <SiXstate />;
    default:
      return null;
  }
};
