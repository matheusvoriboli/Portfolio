import { CompanyBox } from "../../components/CompanyBox";
import { Job } from "../../types/Job";

const jobs: Job[] = [
  {
    name: "GL Homes",
    projects: [
      "I've created functional prototypes with ReactJS for testing flows and new components before integration.",
      "I developed a Design System using HTML, Vanilla JavaScript, CSS, SCSS, and Bootstrap. The system includes a component library styled by the company's UX team, enhancing the process of creating new features and ensuring style standardization.",
      "Built a demo showcasing all components and enabling interactions using Blazor.",
    ],
    website: "https://glhomes.com",
    period: "Sep 2022 - Present",
    location: "Florida, USA",
  },
  {
    name: "People Interactive",
    projects: [
     "Development of the new platform for Energisa's clients. In this project, we provided users with functionalities that were previously only accessible in person, such as requesting a new connection. This improved the system's experience and quality."
    ],
    website: "https://peopleinteractive.com.br",
    period: "May 2022 - Sep 2022",
    location: "Rio De Janeiro, BRA",
  },
  {
    name: "Brass do Brasil",
    projects: [
      "Development of an internal management platform for the company.",
      "Construction of an application integrated with 3D visualization systems for displaying engineering blueprints.",
      "Mentoring on ReactJS for newly hired developers at the company.",
      "Creation of prototypes in Figma for new features across all projects I was involved in."
    ],
    website: "https://brassengineering.com",
    period: "Oct 2021 - Apr 2022",
    location: "Belo Horizonte, BRA",
  },
  {
    name: "Yoobot",
    projects: [
      "Construction of a self-service kiosk platform for food establishments. The platform enabled real-time receipt of customer orders, expediting the delivery process.",
      "Development of a communication platform for service providers and clients, enabling messaging and video calls. This facilitated remote medical consultations and prescription delivery during the pandemic when in-person appointments were not possible."
    ],
    website: "https://www.linkedin.com/company/yoobot-solucoes",
    period: "Oct 2021 - Apr 2022",
    location: "Itajubá, BRA",
  },
  {
    name: "Solver",
    projects: [
      "Summer internship where I built an app for autonomous structure monitoring. It alerted in case of alarming data, preventing disasters."
    ],
    website: "https://solvertecnologias.com.br",
    period: "Jan 2021 - Feb 2021",
    location: "Itajubá, BRA",
  },
  {
    name: "Universidade Federal de Itajubá",
    projects: [
      "Development of a system for academic purposes, such as event promotion and official grade dissemination.",
"Construction of a platform for organizing an annual event, allowing ticket purchases and facilitating event management."
    ],
    website: "https://unifei.edu.br",
    period: "Jan 2018 - Dec 2020",
    location: "Itajubá, BRA",
  },

];
export function Career() {
  return (
    <div className="flex flex-col gap-7 animate-fade-in">
      <h1 className="font-title text-2xl text-neutral-200">About my career</h1>
      <div className="flex flex-col gap-3">
        <span className="text-neutral-400">
          I'm a frontend Developer with 5+ years of experience, specializing in
          crafting intuitive user interfaces. I leverage the latest technologies
          to deliver high-quality solutions that meet user needs and business
          objectives.
        </span>
        <span className="text-neutral-400">
          Currently, I'm working at GL Homes, and below are some companies I've
          worked:
        </span>
      </div>
      <div className="custom-container flex flex-col gap-5 w-full">
        {jobs.map((job, index) => (
          <CompanyBox {...job} key={index} />
        ))}
      </div>
    </div>
  );
}
