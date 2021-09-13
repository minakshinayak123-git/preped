import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import Image from 'next/image'

const CourseCard = ({
  id,
  thumbnail,
  title,
  description,
  category,
  stream,
  degree,
  year,
  isComingSoon,
  isPublished,
}) => {
  const router = useRouter()

  // const course = () => {
  //   router.push({
  //     pathname: '/course',
  //     query: {
  //       id: id,
  //     },
  //   })
  // }

  return (
    <div className='flex md:flex-col sm:py-7 sm:px-3 sm:pr-6 cursor-pointer rounded-lg hover:opacity-80 hover:shadow-lg transform transition duration-200 easy-out bg-white mb-4 mr-4'>
      <Link href={`/course/${id}`}>
        <div className='relative h-24 w-40 md:w-50 md:h-40 md:w-60 lg:w-60 lg:h-60 flex-shrink-0 mx-2 my-2 md:mx-1 md:my-1 md:self-center'>
          <Image
            src={thumbnail}
            layout='fill'
            className='rounded-md'
            objectFit='cover'
          />
        </div>
      </Link>

      <div className='flex flex-col flex-grow p-4 lg:mt-6 md:p-2 justify-center items-left'>
        <p className='text-sm md:text-md text-gray-800 font-semibold pb-2'>
          {category}
        </p>
        <p className='text-xs text-gray-500 font-semibold pb-2'>{`${stream} | ${degree} | ${year}`}</p>

        <Link href={`/course/${id}`}>
          <p className='text-sm md:text-lg xl:text-xl font-semibold  pb-2'>
            {title}
          </p>
        </Link>

        <p className='text-gray-500 text-xs md:text-md'>{description}</p>
        {isComingSoon ? (
          <p className='text-blue-800 text-xs font-bold md:text-md pt-4 md:pt-6'>
            Coming Soon...
          </p>
        ) : (
          <Link href={`/course/${id}`}>
            <p className='text-blue-800 text-xs font-bold md:text-md pt-4 md:pt-6'>
              Know More...
            </p>
          </Link>
        )}
      </div>
    </div>
  )
}

export default CourseCard
