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
  },
];

export function Home() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-title text-neutral-200">Who am i?</h1>
      <h3 className="font-medium text-neutral-300 mt-7">About</h3>
      <span className=" text-neutral-400">Hey guys, I am Matheus Riboli.</span>
      <span className="text-neutral-400">
        I&apos;m a 26-year-old Software Engineer from Brazil. My childhood dream
        was always to become a Software Developer, inspired by my dad who worked
        as a Cobol Developer. When I landed my first job, he was genuinely
        thrilled and happy for me. Experiences like these, coupled with my
        passion for software development, continue to fuel my motivation and
        drive me to always give my best.
      </span>
      <span className="text-neutral-400">
        In addition to web development, I have a myriad of other hobbies that
        keep life exciting. I&apos;m an avid tennis player, love to unwind by
        hanging out with friends and having a good time. And, like any true
        developer, my day just doesn&apos;t start without a cup of coffee.
        It&apos;s the fuel that keeps the code flowing and the ideas brewing!
      </span>
      <h3 className="font-medium text-neutral-200 mt-7">Connect</h3>
      <div className="contact-box-container flex flex-col gap-3 sm:flex-wrap sm:flex-row">
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
      <h3 className="font-medium text-neutral-200 mt-7">Main Tools</h3>
      <span className="text-neutral-400">
        Above is a list of the main tools i use to develop my projects with the
        number of years of experience in each one.
      </span>
      <span className="text-neutral-400">
        {jobs.map((job) => (
          <CompanyBox {...job} />
        ))}
      </span>
    </div>
  );
}
