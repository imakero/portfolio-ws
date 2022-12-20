import { storyblokEditable } from "@storyblok/react";
import ProjectPreview from "../components/ProjectPreview";
import { Blok, SbFeaturedProjects } from "../types/Types";

type FeaturedProjectsProps = {
  blok: Blok<SbFeaturedProjects>;
};

const FeaturedProjects = ({ blok }: FeaturedProjectsProps) => {
  return (
    <div className="w-full columns-sm gap-8 px-4" {...storyblokEditable(blok)}>
      {blok.projects.map((project) => (
        <ProjectPreview
          blok={project.content}
          slug={project.slug}
          tags={project.tag_list}
          key={project.uuid as string}
        />
      ))}
    </div>
  );
};

export default FeaturedProjects;
