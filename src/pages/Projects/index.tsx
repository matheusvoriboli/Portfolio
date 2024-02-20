import { ProjectBox } from "../../components/ProjectBox";
import { projects } from "../../utils/Projects";

export function Projects() {
  return (
    <div className="animate-fade-in flex flex-col gap-7">
      <h1 className="font-title text-2xl text-neutral-200">
        Take a look in my projects
      </h1>
      <div className="flex flex-col gap-5 custom-container">
        {projects.map((project) => (
          <ProjectBox {...project} key={project.id} />
        ))}
        {/* <ProjectBox /> */}
      </div>
    </div>
  );
}
