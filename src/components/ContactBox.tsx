import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

type ContactBoxProps = {
  text: string;
  icon: React.JSX.Element;
}

export function ContactBox({ text, icon }: ContactBoxProps) {
  return (
    <div className='contact-box flex border-solid border-neutral-600 border-[1px] rounded w-full p-3 items-center gap-2 justify-center cursor-pointer md:w-1/3'>
      {icon}
      <h1 className='text-neutral-300'>{text}</h1>
      <ArrowUpRight size={21} className='ml-auto text-neutral-300' />
    </div>
  )
}