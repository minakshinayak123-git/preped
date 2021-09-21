import Head from 'next/head'
import { CheckCircleIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import student from '../assets/student.svg'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

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

const authors = [
  {
    id: '3d9f2969-25bc-45df-b4f8-8a780ba1a357',
    first_name: 'Dr. Sandeep',
    last_name: 'Huilgol',
    designation: 'Founder || CEO',
    type: 'admin',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1629996849/ribwm5wvxanrqomepqpd_isqxxv.jpg',
    biography:
      'Nephrologist and a transplant physician and a teacher by passion. He is a well known clinician and has been active in various campaigns to create health awareness.',
  },
  {
    id: '3d9f2969-25bc-45df-b4f8-8a780ba1a358',
    first_name: 'Kartik ',
    last_name: 'Mulgund',
    designation: 'Principal Technology Architect',
    type: 'admin',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1630071587/KartikMulgund_lbnz09_ntoiaw.png',
    biography:
      'A seasoned architect with portfolio consisting of multiple international transformational projects, striving to create an affordable yet worldclass platform for digital education.',
    user_id: 'e6f7f975-bea7-4728-9997-83f055b26214',
  },
  {
    id: 'b3b4d637-13ec-458f-9926-87a92db50b45',
    first_name: 'Dr Sangamesh',
    last_name: 'Rakaraddi',
    designation: 'Consultant || Paramedical',
    type: 'author',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1629996849/q5rgzlcbdjbsn58x5oa6_lf9cws.jpg',
    biography:
      'Teaching experience of 13 years for paramedical/Nursing and 10 years for Medical  and Dental students and involved in various National and International projects.',
  },
  {
    id: '3d9f2969-25bc-45df-b4f8-8a780ba1a359',
    first_name: 'Prasad',
    last_name: 'Parab',
    designation: 'Video Production || UI design',
    type: 'admin',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1630071587/PrasadParab_zwtquo_aakv4x.jpg',
    biography:
      'A veteran 3D artist with rich experience in medical video production, his creativity and passion has helped us in making our video content consistent and engaging.',
  },
  {
    id: '3d9f2969-25bc-45df-b4f8-8a780ba1a360',
    first_name: 'Bandenamaj',
    last_name: 'Mulla',
    designation: 'Lead Developer || Platform Specialist',
    type: 'admin',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1630071587/avatar_azszsg_jk2ox1.png',
    biography:
      'After co-developing international platforms like 4D Medical and Surgery Basics, he has turned his gaze towards helping our students by actively helping to create PrepEd.',
  },
  {
    id: '3d9f2969-25bc-45df-b4f8-8a780ba1a360',
    first_name: 'Mr. Shivanand',
    last_name: 'Yaragal',
    designation: 'Consultant || Paramedical',
    type: 'admin',
    profile_pic:
      'https://res.cloudinary.com/minakshi-nayak/image/upload/v1630071587/ShivanandYargal_tb6rkg_abgeeg.jpg',
    biography:
      'Over 10 years of teaching experience for paramedical students. ',
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
        {/* {!user && (
          <Link href='/api/auth/login' className='mt-200'>
            login
          </Link>
        )} */}
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
        <section className='pt-2 items-center'>
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
        <section className='pt-8 items-center'>
          <h2 className='text-2xl md:text-4xl text-gray-500 font-semibold pb-5 items-center text-center'>
            Team Members
          </h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
            {authors.map(
              ({
                id,
                first_name,
                last_name,
                profile_pic,
                biography,
                designation,
              }) => (
                <SmallCard
                  key={id}
                  profile_pic={profile_pic}
                  first_name={first_name}
                  last_name={last_name}
                  biography={biography}
                  designation={designation}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
