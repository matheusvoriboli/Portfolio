import { CompanyBox } from "../../components/CompanyBox";
import { Job } from "../../types/Job";

export function Career() {
  const jobs: Job[] = [
    {
      name: "GL Homes",
      projects: [
        "I've created functional prototypes with ReactJS for testing flows and new components before integration.",
        "I developed a Design System using HTML, Vanilla JavaScript, CSS, SCSS, and Bootstrap. The system includes a component library styled by the company's UX team, enhancing the process of creating new features and ensuring style standardization.",
        "Built a demo showcasing all components and enabling interactions using Blazor.",
      ],
      website: "https://glhomes.com",
      period: "2021 - Present",
      location: "Florida, USA",
    },
    {
      name: "GL Homes",
      projects: [
        "I've created functional prototypes with ReactJS for testing flows and new components before integration.",
        "I developed a Design System using HTML, Vanilla JavaScript, CSS, SCSS, and Bootstrap. The system includes a component library styled by the company's UX team, enhancing the process of creating new features and ensuring style standardization.",
        "Built a demo showcasing all components and enabling interactions using Blazor.",
      ],
      website: "https://glhomes.com",
      period: "2021 - Present",
      location: "Florida, USA",
    },
  ];
  return (
    <div className="flex flex-col gap-7">
      <h1 className="font-title text-2xl text-neutral-200">My Career</h1>
      <div className="flex flex-col gap-3">
        <span className="text-neutral-400">
          I'm a frontend Developer with 5+ years of experience, specializing in
          crafting intuitive user interfaces. I leverage the latest technologies
          to deliver high-quality solutions that meet user needs and business
          objectives.
        </span>
        <span className="text-neutral-400">
          Currently, I'm working at GL Homes, and below are some companies I've
          worked with:
        </span>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {jobs.map((job, index) => (
          <CompanyBox {...job} key={index} />
        ))}
      </div>
    </div>
  );
}
