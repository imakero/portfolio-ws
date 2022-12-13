import { storyblokEditable } from "@storyblok/react";
import ProjectPreview from "../components/ProjectPreview";
import { Blok, SbFeaturedProjects } from "../types/Types";

type FeaturedProjectsProps = {
  blok: Blok<SbFeaturedProjects>;
};

const FeaturedProjects = ({ blok }: FeaturedProjectsProps) => {
  return (
    <section {...storyblokEditable(blok)}>
      <h2 className="text-6xl font-bold text-center mb-16">{blok.heading}</h2>
      <div className="flex flex-col [&>*:nth-child(even)]:self-end w-full">
        {blok.projects.map((project) => (
          <ProjectPreview
            blok={project.content}
            tags={project.tag_list}
            key={project.uuid as string}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
