import { ContactBox } from "../../components/ContactBox";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { Tool } from "../../types/Tools";
import { ToolBox } from "../../components/ToolBox";
import React from '../../assets/react.svg';
import Typescript from '../../assets/typescript.svg';
import Node from '../../assets/Node.svg';
import Vue from '../../assets/Vue.svg';
import Postgresql from '../../assets/Postgresql.svg';

const tools: Tool[] = [
  {
    name: 'Typescript',
    icon: Typescript,
  },
  {
    name: 'React',
    icon: React,
  },
  {
    name: 'Vue',
    icon: Vue,
  },
  {
    name: 'Node',
    icon: Node,
  },
  {
    name: 'Postgresql',
    icon: Postgresql,
  },
]

export function About() {
  return (
    <div className="flex flex-col gap-7 animate-fade-in">
      <h1 className="text-2xl font-title text-neutral-200 ">Who am i?</h1>
      <div className="flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-[140px,1fr]">
        <h3 className="font-medium text-neutral-200 ">About</h3>
        <div className="flex flex-col gap-3 ">
          <span className=" text-neutral-400">
            Hey guys, I am Matheus Riboli.
          </span>
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
        <div className="custom-container flex flex-col gap-3 md:flex-wrap md:flex-row">
          <ContactBox
            icon={<Envelope size={21} className="text-neutral-200" />}
            text="Email"
            href="mailto:matheusvor@gmail.com"
          />
          <ContactBox
            icon={<GithubLogo size={21} className="text-neutral-200" />}
            text="Github"
            href="https://github.com/matheusvoriboli"
          />
          <ContactBox
            icon={<LinkedinLogo size={21} className="text-neutral-200" />}
            text="Linkedin"
            href="https://www.linkedin.com/in/matheusriboli/"
          />
          <ContactBox
            icon={<TwitterLogo size={21} className="text-neutral-200" />}
            text="Twitter"
            href="https://twitter.com/ribolimatheus"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-[140px,1fr]">
        <h3 className="font-medium text-neutral-200">Main Stack</h3>
        <div className="space-y-5">
          <span>
            Throughout my journey as a frontend developer, I've gained experience
            with various programming languages, frameworks, tools, and libraries.
            Below, I'm highlighting the technologies I'm most experienced with and
            enjoy working with.
          </span>
          <div className="custom-container flex flex-wrap justify-center md:justify-start gap-4">
            {tools.map((tool, index) => (
              <ToolBox {...tool} key={index} />
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
}
