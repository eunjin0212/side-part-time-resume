import Section from '@/components/Section'

const Home = () => {
  const COVER_LETTER = [
    {
      title: 'Olive Young',
      part: 'Sales Associate',
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
        'I excel at understanding customer needs and recommending the right products.',
        'At Olive Young, I won first place in a sales competition by effectively promoting private brand cosmetics.',
        'Additionally, I was recognized for outstanding customer service, demonstrating my ability to provide excellent experiences for customers.',
      ],
      imgs: ['/assets/arena.jpg', '/assets/arena2.jpg', '/assets/mass.jpg'],
    },
    {
      title: 'McDonald`s',
      part: 'Crew Member',
      range: '2011-08 ~ 2014-01',
      details: [
        'I excel at understanding customer needs and recommending the right products.',
        'At Olive Young, I won first place in a sales competition by effectively promoting private brand cosmetics.',
        'Additionally, I was recognized for outstanding customer service, demonstrating my ability to provide excellent experiences for customers.',
      ],
      imgs: ['/assets/mcdonald.jpg', '/assets/mcdonald2.jpg'],
    },
  ]
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
    </main>
  )
}

export default Home
