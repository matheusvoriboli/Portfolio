import { ContactBox } from "../../components/ContactBox";
import { Envelope, GithubLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react'
import './index.css'

export function Home() {

  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      <h1 className='text-2xl'>Who am i?</h1>
      <span className='mt-10 text-light'>About</span>
      <span className='mt-3 text-soft-light'>
        Hey guys, I am Matheus Riboli.
      </span>
      <span className='mt-3 text-soft-light'>
        I&apos;m a 26-year-old Software Engineer from Brazil. My childhood dream was always to become a Software Developer, inspired by my dad who worked as a Cobol Developer. When I landed my first job, he was genuinely thrilled and happy for me. Experiences like these, coupled with my passion for software development, continue to fuel my motivation and drive me to always give my best.
      </span>
      <span className='mt-3 text-soft-light'>
        In addition to web development, I have a myriad of other hobbies that keep life exciting. I&apos;m an avid tennis player, love to unwind by hanging out with friends and having a good time. And, like any true developer, my day just doesn&apos;t start without a cup of coffee. It&apos;s the fuel that keeps the code flowing and the ideas brewing!
      </span>
      <span className='mt-10 text-light'>Connect</span>
      <div className='contact-box-container mt-3 flex flex-col gap-3 sm:flex-wrap sm:flex-row'>
        <ContactBox icon={<Envelope size={21} className='text-light' />} text='Email' />
        <ContactBox icon={<GithubLogo size={21} className='text-light' />} text='Github' />
        <ContactBox icon={<LinkedinLogo size={21} className='text-light' />} text='Linkedin' />
        <ContactBox icon={<TwitterLogo size={21} className='text-light' />} text='Twitter' />
      </div>
      <span className='mt-10 text-light'>Main Tools</span>
      <span className='mt-3 text-soft-light'>
        6+ years of experience as a Frontend Developer
      </span>
      <span className='mt-3 text-soft-light'>
        Since the beginning of my journey as a frontend developer i use React. During my career i was in touch with a lot of programming languages, tools and frameworks
      </span>
    </div>
  )
}
