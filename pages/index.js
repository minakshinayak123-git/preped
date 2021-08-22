import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
          <div className='flex flex-col items-center text-center rounded-lg hover:scale-95 transform transition duration:300 easy-in-out'>
            <h2 className='text-lg md:text-2xl lg:text-4xl font-semibold pb-6 border-b-4 mb-4'>
              The PrepEd App prepares you to become an expert health care
              professional in the Paramedics and Nursing arena
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
