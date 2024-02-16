import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

type ContactBoxProps = {
  text: string;
  icon: React.JSX.Element;
  href: string;
}

export function ContactBox({ text, icon, href }: ContactBoxProps) {
  return (
    <a href={href} target='_blank' className='custom-child flex border-solid border-neutral-600 border-[1px] rounded w-full p-3 items-center gap-2 justify-center cursor-pointer md:w-1/3'>
      {icon}
      <h1 className='text-neutral-300'>{text}</h1>
      <ArrowUpRight size={21} className='ml-auto text-neutral-300' />
    </a>
  )
}