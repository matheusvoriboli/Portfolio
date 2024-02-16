import { useState } from "react";
import { Job } from "../types/Job";


export function CompanyBox({name, projects, website, period}: Job) {
  const [collapsed, setCollapsed] = useState(true);
  return(
    <a href={website}>
      <h1 className='text-neutral-200'>{name}</h1>
      <span className='text-neutral-400'>{period}</span>
      <span className='text-neutral-400' onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? 'Show more' : 'Show less'}
      </span>
      {!collapsed && projects?.map(project => (
        <span className='text-neutral-400'>{project}</span>
      ))}
    </a>
  )
}