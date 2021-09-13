import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { ChevronRightIcon } from '@heroicons/react/outline'
import courseData from '../../data/courseData.json'

const CoursePage = ({ match }) => {
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
              <ChevronRightIcon className='text-white hover:text-gray-400 mr-2 h-4' />

              <p className='text-white hover:text-gray-400 text-sm mr-2'>
                Courses
              </p>
              <ChevronRightIcon className='text-white hover:text-gray-400 mr-2 h-4' />
              <p className='text-gray-500 text-sm'>course</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CoursePage
