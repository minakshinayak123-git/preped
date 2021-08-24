import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

const data = [
  {
    message:
      'Interactive Video classes to clear paramedical and nursing concepts in Kannada',
  },
  {
    message: 'Build strong paramedical and nursing basics',
  },
  {
    message:
      'PrepEd App for exam preparation helps you prepare and succeed in exams with flying colors',
  },
  {
    message:
      'Build a successful & fulfilling professional career by mastering the paramedical and nursing concepts',
  },
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prepare Edutech</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='max-width-7xl mx-auto px-16 md:px-8 cursor-pointer bg-white shadow-lg md:shadow-2xl'>
        <section className='pt-6'>
          <div className='flex flex-col items-center text-center hover:scale-95 transform transition duration:300 easy-in-out'>
            <h2 className='text-md md:text-lg lg:text-xl font-bold pb-6 border-b-4 mb-4 rounded-lg'>
              The PrepEd App prepares you to become an expert health care
              professional in the Paramedics and Nursing arena
            </h2>
          </div>
          <div className='flex'></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
