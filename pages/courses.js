import { useRouter } from 'next/dist/client/router'
import { ChevronRightIcon, SearchIcon } from '@heroicons/react/outline'
import Header from '../components/Header'
import courseData from '../data/courseData.json'
import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'

const courses = ({ placeholder }) => {
  const router = useRouter()

  const { data } = JSON.parse(JSON.stringify(courseData))

  return (
    <>
      <Header />
      <main className='max-width-7xl items-center mx-auto px-2 md:px-8 cursor-pointer bg-[#511164] shadow-lg md:shadow-2xl pb-10'>
        <section className='pt-6 pb-8'>
          <div className='flex flex-wrap justify-between mx-auto'>
            <div className='flex items-center py-6 pl-6 text-center'>
              <p
                onClick={() => router.push('/')}
                className='text-white hover:text-gray-400 text-sm mr-2'
              >
                Home
              </p>
              <ChevronRightIcon className='text-white mr-2 cursor-pointer h-4' />

              <p className='text-gray-500 text-sm'>Courses</p>
            </div>

            <div className='items-center md:justify-end space-x-4 text-center'>
              <input
                type='text'
                placeholder={placeholder || 'Start your search'}
                className='flex-grow py-2 px-6 bg-while rounded-md shadow-md outline-none text-sm text-gray-400 placeholder-gray-400'
              />
              <SearchIcon className='inline-flex h-8 bg-white text-[#511164] rounded-full p-2 cursor-pointer ' />
            </div>
          </div>
        </section>
        <section className='items-center bg-[#F5F5F5] rounded-xl shadow-2xl'>
          <h2 className='text-2xl md:text-4xl text-[#511164] font-semibold pb-5 items-center text-center border-b pt-4'>
            All Courses
          </h2>

          <div className='flex-1 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:overflow-scroll sm:scrollbar-hide space-x-4 pb-6 mx-4 my-4 space-y-4 second:space-y-4 self-center flex-shrink-0'>
            {data.map(
              ({
                id,
                thumbnail,
                title,
                description,
                category,
                stream,
                degree,
                year,
              }) => (
                <CourseCard
                  key={id}
                  thumbnail={thumbnail}
                  title={title}
                  description={description}
                  category={category}
                  stream={stream}
                  degree={degree}
                  year={year}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default courses
