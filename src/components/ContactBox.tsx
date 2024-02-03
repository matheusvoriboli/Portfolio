import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

type ContactBoxProps = {
  text: string;
  icon: React.JSX.Element;
}

export function ContactBox({ text, icon }: ContactBoxProps) {
  return (
    <div className='contact-box flex border-solid border-soft-dark border-[1px] rounded w-full p-3 items-center gap-2 justify-center cursor-pointer sm:w-1/3'>
      {icon}
      <h1 className='text-light'>{text}</h1>
      <ArrowUpRight size={21} className='ml-auto text-light' />
    </div>
  )
}