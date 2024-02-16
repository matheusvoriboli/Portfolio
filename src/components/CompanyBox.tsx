import { Job } from "../types/Job";

export function CompanyBox({ name, projects, website, period, location }: Job) {
  // TODO: Add projects in a tooltip
  // TODO: Create list with all companies and add the hover effect i have in my contacts
  console.log(projects)
  return (
    <a href={website} className="flex justify-between items-center w-ful">
      <div>
        <h1 className="text-neutral-200">{name}</h1>
        <h1 className="text-neutral-400">{location}</h1>
      </div>
        <span className="text-neutral-400">{period}</span>
    </a>
  );
}
