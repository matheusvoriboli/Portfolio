import { Tool } from "../types/Tools";

export function ToolBox({ icon, name }: Tool) {
  console.log(icon)
  return (
    <div className="custom-child flex flex-col items-center gap-1 border border-neutral-600 rounded-md justify-self-center max-w-32 w-[103px] py-4">
      <img src={icon} alt={name} className="w-12 h-12"/>
      <span className="text-neutral-400 text-sm mt-3">{name}</span>
    </div>
  );
}
