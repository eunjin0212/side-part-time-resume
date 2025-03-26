'use client'

import Image from 'next/image'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface SectionProps {
 className?: string
 children?: ReactNode
 title?: string
 range?: string
 part?: string
 details?: string[]
 imgs?: string[]
}
const Section = ({ className, children, range, title, part, details, imgs }: SectionProps) => {
 const ref = useRef<HTMLDivElement | null>(null)
 const [isVisible, setIsVisible] = useState(false)

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => {
    if (entry.isIntersecting) {
     setIsVisible(true)
    }
   },
   { threshold: 0.2 },
  )

  if (ref.current) observer.observe(ref.current)
  return () => observer.disconnect()
 }, [])

 const sectionClass =
  'py-10 px-7 h-auto  lg:py-32 sm:py-12 sm:px-9 [&>div]:max-w-[1260px] [&>div]:mx-auto'
 return (
  <section
   ref={ref}
   className={[
    sectionClass,
    className,
   ].join(' ')}
  >
   <div>
    {children ? (
     children
    ) : (
     <>
      <div className={isVisible ? 'animate-slide-in-bottom' : 'translate-y-10 opacity-0'}>
       <div className="flex flex-row items-end gap-2 max-sm:flex-col max-sm:items-start">
        <h3 className="text-4xl font-bold">{part}</h3>
        <span className='text-xl'>({title})</span>
        <em className="inline-block text-gray-500">{range}</em>
       </div>
       <ul className='mt-6'>
        {details?.map((text) => (
         <li key={text}>{text}</li>
        ))}
       </ul>
       <div className="mt-6 flex gap-4 h-[700px] w-[800px] flex-row max-md:h-[500px] max-md:w-[600px] max-sm:h-[300px] max-sm:w-[318px]">
        {imgs?.map((img) => (
         <div
          key={img}
          className="flex-1 overflow-hidden leading-[0] transition-[.5s] hover:flex-[1_1_50%] hover:[&>img]:h-auto hover:[&>img]:max-sm:max-h-[250px] hover:[&>img]:w-full active:flex-[1_1_50%] active:[&>img]:h-auto active:[&>img]:max-sm:max-h-[250px] active:[&>img]:w-full"
         >
          <Image
           src={img}
           priority={true}
           alt={title || 'part_time_img'}
           width={1000}
           height={1500}
           className="w-[150%] object-cover transition-[.5s]"
          />
         </div>
        ))}
       </div>
      </div>
     </>
    )}
   </div>
  </section>
 )
}

export default Section
