import { useRouter } from 'next/dist/client/router'
import { ChevronRightIcon, SearchIcon } from '@heroicons/react/outline'
import Header from '../components/Header'
import courseData from '../data/courseData.json'
import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'
import { useState } from 'react'

const courses = ({ placeholder }) => {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')

  const { data } = JSON.parse(JSON.stringify(courseData))

  const resetInput = () => {
    setSearchInput('')
  }

  const search = () => {
    const searchData = data?.filter((course) => {
      return (
        course.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 ||
        course.category.toLowerCase().indexOf(searchInput.toLowerCase()) !==
          -1 ||
        course.stream.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 ||
        course.degree.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1 ||
        course.year.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
      )
    })
    return searchData
  }

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
                value={searchInput}
                placeholder={placeholder || 'Start your search'}
                onChange={(e) => setSearchInput(e.target.value)}
                className='flex-grow py-2 px-6 bg-while rounded-md shadow-md outline-none text-sm text-gray-400 placeholder-gray-400'
              />
              <SearchIcon
                className='inline-flex h-8 bg-white text-[#511164] rounded-full p-2 cursor-pointer'
                onClick={search}
              />
              <button
                onClick={resetInput}
                className='flex-grow text-gray-400 hover:text-gray-500 text-sm lg:text-md'
              >
                Cancel
              </button>
            </div>
          </div>
        </section>
        <section className='items-center bg-transparent rounded-xl shadow-2xl'>
          <h2 className='text-2xl md:text-4xl text-white font-semibold pb-5 items-center text-center border-b border-gray-500 pt-4'>
            All Courses
          </h2>

          <div className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:overflow-scroll sm:scrollbar-hide pb-6 ml-4 my-4 second:space-y-4 self-center flex-shrink-0 '>
            {searchInput
              ? search()?.map(
                  ({
                    id,
                    thumbnail,
                    title,
                    description,
                    category,
                    stream,
                    degree,
                    year,
                    isComingSoon,
                  }) => (
                    <CourseCard
                      key={id}
                      id={id}
                      thumbnail={thumbnail}
                      title={title}
                      description={description}
                      category={category}
                      stream={stream}
                      degree={degree}
                      year={year}
                      isComingSoon={isComingSoon}
                    />
                  )
                )
              : data?.map(
                  ({
                    id,
                    thumbnail,
                    title,
                    description,
                    category,
                    stream,
                    degree,
                    year,
                    isComingSoon,
                  }) => (
                    <CourseCard
                      key={id}
                      id={id}
                      thumbnail={thumbnail}
                      title={title}
                      description={description}
                      category={category}
                      stream={stream}
                      degree={degree}
                      year={year}
                      isComingSoon={isComingSoon}
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
