import { useState } from "react";
import { Job } from "../types/Job";


export function CompanyBox({ name, projects, website, period, location }: Job) {
  const [showProjects, setShowProjects] = useState(false);
  // TODO: Add projects in a tooltip
  // TODO: Create list with all companies and add the hover effect i have in my contacts

  return (
    <div onClick={() => setShowProjects((state) => !state)} className="custom-child flex flex-col gap-5 cursor-pointer">
      <div className="flex justify-between items-center group">
        <div className="flex flex-col">
          <span className="text-neutral-200">{name}</span>
          <span className="text-neutral-400 text-sm">{location}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-neutral-400">{period}</span>
          <span
            className="text-neutral-200 underline text-sm cursor-pointer"
          >
            {showProjects ? "Hide Details" : "See Details"}
          </span>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out transform ${
          showProjects
            ? "scale-100 opacity-100 max-h-full"
            : "scale-0 opacity-0 max-h-0"
        }`}
      >
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="text-neutral-400 mb-3">
              {project}
            </li>
          ))}
        </ul>
        <a
          className="text-sm text-neutral-400 underline hover:text-neutral-200"
          href={website}
        >
          Visit {name} website
        </a>
      </div>
    </div>
  );
}
