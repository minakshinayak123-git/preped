import Head from 'next/head'
import { CheckCircleIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import student from '../assets/student.svg'
import MediumCard from '../components/MediumCard'

const courseData = [
  {
    id: 1,
    message:
      'Interactive Video classes to clear paramedical and nursing concepts in Kannada',
  },
  {
    id: 2,
    message:
      'PrepEd App for exam preparation helps you prepare and succeed in exams with flying colors',
  },
  {
    id: 3,
    message: 'Build strong paramedical and nursing basics',
  },
  {
    id: 4,
    message:
      'Build a successful & fulfilling professional career by mastering the paramedical and nursing concepts',
  },
]

const courses = [
  {
    id: 1,
    type: 'Our lectures',
    title: '500 plus high quality video classes as per syllabus:',
    description:
      'Learn Paramedical and nursing subjects with the finest educators, doctors, and experts with 500 plus high-quality video lessons in Kannada. These experts have made learning easy using the latest technology aids.',
  },
  {
    id: 2,
    type: 'Our focus',
    title: 'Bridge the language barrier',
    description:
      'Each video class is created and delivered in Kannada to help you understand the complex diploma in paramedical and nursing concepts in regional language with great clarity.',
  },
  {
    id: 3,
    type: 'Courses lectures',
    title: '1000+ Paramedical and Nursing students use PrepEd App',
    description:
      'PrepEd App Covers all the subjects of diploma paramedical courses and nursing courses mapped to the Karnataka board curriculum. The PrepEd App has helped 1000+ students understand the concepts with clarity and perform well in exams.',
  },
  {
    id: 4,
    type: 'Courses lectures',
    title: '1000+ Paramedical and Nursing students use PrepEd App',
    description:
      'PrepEd App Covers all the subjects of diploma paramedical courses and nursing courses mapped to the Karnataka board curriculum. The PrepEd App has helped 1000+ students understand the concepts with clarity and perform well in exams.',
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
      <main className='max-width-7xl mx-auto px-2 md:px-8 cursor-pointer bg-white shadow-lg md:shadow-2xl'>
        <section className='pt-6'>
          <div className='flex flex-col items-center text-center hover:scale-95 transform transition duration:300 easy-in-out mb-8'>
            <h2 className='text-md md:text-lg lg:text-xl font-semibold lg:font-bold pb-6 border-b-4 mb-4 rounded-lg text-gray-700'>
              The PrepEd App prepares you to become an expert health care
              professional in the Paramedics and Nursing arena
            </h2>
          </div>

          <div className='flex flex-wrap mx-auto'>
            <div className='relative h-40 md:h-60 flex-1 self-center'>
              <Image src={student} layout='fill' />
            </div>
            <div className='flex flex-col items-start sm:w-1/2 p-6 mb-8 flex-shrink'>
              {courseData.map((data) => (
                <div
                  className='flex items-start justify-end text-gray-400 pb-2'
                  key={data.id}
                >
                  <CheckCircleIcon className='text-purple-500 h-6 md:h-8 mr-4 pt-2' />
                  <div className='flex-1'>{data.message}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className='pt-2'>
          <h2 className='text-2xl md:text-4xl text-gray-500 font-semibold pb-5 items-center text-center'>
            Our Courses
          </h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            {courses.map(({ id, type, title, description }) => (
              <MediumCard
                key={id}
                type={type}
                title={title}
                description={description}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
