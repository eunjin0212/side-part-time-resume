import Section from '@/components/Section'

const Home = () => {
  const COVER_LETTER = [
    {
      title: 'Olive Young',
      part: 'Customer Service Cashier',
      range: '2019-04 ~ 2020-08',
      details: [
        'I excel at understanding customer needs and recommending the right products.',
        'At Olive Young, I won first place in a sales competition by effectively promoting private brand cosmetics.',
        'Additionally, I was recognized for outstanding customer service, demonstrating my ability to provide excellent experiences for customers.',
      ],
      imgs: [
        '/assets/oy.jpg',
        '/assets/oy_sale.jpg',
        '/assets/oy_competition.jpg',
      ],
    },
    {
      title: 'Club',
      part: 'Server',
      range: '2015-05 ~ 2017-06',
      details: [
        'I provided friendly and professional service in a fast-paced, high-pressure nightlife environment.',
        'Despite difficult customers and loud settings, I stayed composed and attentive, using situational awareness to anticipate guest needs.',
        'This role strengthened my teamwork, stamina, and ability to maintain a positive attitude even in challenging conditions.',
      ],
      imgs: ['/assets/arena.jpg', '/assets/arena2.jpg', '/assets/mass.jpg'],
    },
    {
      title: 'McDonald`s',
      part: 'Cashier',
      range: '2011-08 ~ 2014-01',
      details: [
        'I quickly adapted to various roles, from cashier to grill to delivery prep, ensuring smooth service during busy hours.',
        'I developed strong multitasking skills and remained calm under pressure, contributing to team efficiency.',
        'My flexibility and reliability made me a go-to team member trusted to support wherever needed.',
      ],
      imgs: ['/assets/mcdonald.jpg', '/assets/mcdonald2.jpg'],
    },
  ]

  const contactClass = 'inline-block h-9 w-9 hover:animate-bounce focus:animate-bounce'
  return (
    <main>
      <Section className="w-screen bg-gradient-to-b from-lime-200 to-white text-lime-950">
        <>
          <h1 className="pb-10 text-8xl max-md:text-5xl max-sm:text-4xl">
            Hello, 🌱
            <br /> My name is <br className="hidden max-md:block" />
            <b className="max-sm:text-5xl">Eunjin Kim</b>.
          </h1>
          <h4 className="pb-10 text-6xl max-md:text-3xl max-sm:text-2xl">
            Are you looking for someone
            <br />
            who provides <b>professional service</b> and makes customers feel
            great?
          </h4>
          <h6 className="text-6xl font-bold max-md:text-5xl max-sm:text-3xl">
            Here I am! ✋
          </h6>
        </>
      </Section>
      {COVER_LETTER.map((item) => (
        <Section key={item.title} {...item} />
      ))}
      <section className="py-20 text-center text-8xl max-md:text-5xl max-sm:text-4xl">
        <h3>Interested in working with me?</h3>
        <div className='flex justify-center gap-10 mt-10'>
          <a href="tel:+16478789639" className={[contactClass, 'duration-300'].join(' ')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </a>
          <a href="mailto:eunjin9639@gmail.com" target="_blank" className={[contactClass].join(' ')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
