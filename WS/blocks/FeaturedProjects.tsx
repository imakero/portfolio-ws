import { SbBlokData, Story, StoryData } from "@storyblok/react";
import ProjectPreview from "../components/ProjectPreview";
import { Project } from "../types/Types";

type FeaturedProjectsProps = {
  blok: SbBlokData & { projects: StoryData<Project>[]; heading: string };
};

const FeaturedProjects = (props: FeaturedProjectsProps) => {
  const { blok } = props;

  return (
    <section>
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
