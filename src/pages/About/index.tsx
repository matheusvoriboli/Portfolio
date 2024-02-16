import { ContactBox } from "../../components/ContactBox";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import "./index.css";
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
    period: "2021 - Present",
    location: "Florida, USA"
  },
];

export function About() {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-2xl font-title text-neutral-200">Who am i?</h1>
      <div className="flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-[140px,1fr]">
        <h3 className="font-medium text-neutral-200 ">About</h3>
        <div className="flex flex-col gap-3 ">
          <span className=" text-neutral-400">Hey guys, I am Matheus Riboli.</span>
          <span className="text-neutral-400">
            I&apos;m a 26-year-old Software Engineer from Brazil. My childhood
            dream was always to become a Software Developer, inspired by my dad
            who worked as a Cobol Developer. When I landed my first job, he was
            genuinely thrilled and happy for me. Experiences like these, coupled
            with my passion for software development, continue to fuel my
            motivation and drive me to always give my best.
          </span>
          <span className="text-neutral-400">
            In addition to web development, I have a myriad of other hobbies
            that keep life exciting. I&apos;m an avid tennis player, love to
            unwind by hanging out with friends and having a good time. And, like
            any true developer, my day just doesn&apos;t start without a cup of
            coffee. It&apos;s the fuel that keeps the code flowing and the ideas
            brewing!
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-[140px,1fr]">
        <h3 className="font-medium text-neutral-200">Contact Me</h3>
        <div className="contact-box-container flex flex-col gap-3 md:flex-wrap md:flex-row">
          <ContactBox
            icon={<Envelope size={21} className="text-neutral-200" />}
            text="Email"
          />
          <ContactBox
            icon={<GithubLogo size={21} className="text-neutral-200" />}
            text="Github"
          />
          <ContactBox
            icon={<LinkedinLogo size={21} className="text-neutral-200" />}
            text="Linkedin"
          />
          <ContactBox
            icon={<TwitterLogo size={21} className="text-neutral-200" />}
            text="Twitter"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-[140px,1fr]">
        <h3 className="font-medium text-neutral-200">Experience</h3>
        <div className="flex flex-col gap-3">
          <span className="text-neutral-400">
            I'm a frontend Developer with 5+ years of experience, specializing
            in crafting intuitive user interfaces. I leverage the latest
            technologies to deliver high-quality solutions that meet user needs
            and business objectives.
          </span>
          <span className="text-neutral-400">
            Currently, I'm working at GL Homes, and below are some companies
            I've worked with:
          </span>
          <div className="space-y-3">
            {jobs.map((job) => (
              <CompanyBox {...job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
