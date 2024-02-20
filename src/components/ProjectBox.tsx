import { Project } from "../types/Project";

export const ProjectBox = ({ description, image, title, link }: Project) => {
  return (
    <a
      className="flex flex-col sm:flex-row gap-3 w-full custom-child sm:h-40 cursor-pointer"
      target="_blank"
      href={link}
    >
      <div className="sm:w-1/3 bg-neutral-800 flex justify-center items-center rounded-md overflow-hidden max-h-48">
        <img src={image} alt={title} className="fill rounded-md" />
      </div>
      <div className="flex flex-col gap-3 sm:w-2/3">
        <h3 className="font-medium text-neutral-200 ">{title}</h3>
        <span className="text-neutral-400 text-sm">{description}</span>
      </div>
    </a>
  );
};
