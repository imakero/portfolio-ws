import { storyblokEditable } from "@storyblok/react";
import ProjectPreview from "../components/ProjectPreview";
import { Blok, SbFeaturedProjects } from "../types/Types";

type FeaturedProjectsProps = {
  blok: Blok<SbFeaturedProjects>;
};

const FeaturedProjects = ({ blok }: FeaturedProjectsProps) => {
  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-2 justify-items-center xl:[&>*:nth-child(even)]:translate-y-1/2 w-full"
      {...storyblokEditable(blok)}
    >
      {blok.projects.map((project) => (
        <ProjectPreview
          blok={project.content}
          tags={project.tag_list}
          key={project.uuid as string}
        />
      ))}
    </div>
  );
};

export default FeaturedProjects;
