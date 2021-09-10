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
}) => {
  const router = useRouter()

  return (
    <div className='flex md:flex-col sm:py-7 sm:px-3 sm:pr-6 cursor-pointer rounded-lg hover:opacity-80 hover:shadow-lg transform transition duration-200 easy-out bg-white mb-4 mr-4'>
      <div className='relative h-50 w-40 md:h-52 md:w-100 flex-shrink-0 mx-2 my-2'>
        <Link href={`/courses/${id}`}>
          <Image
            src={thumbnail}
            layout='fill'
            className='rounded-md'
            objectFit='cover'
          />
        </Link>
      </div>
      <div className='flex flex-col flex-grow p-4 justify-center items-left'>
        <p className='text-sm md:text-md text-gray-800 font-semibold pb-2'>
          {category}
        </p>
        <p className='text-xs text-gray-500 font-semibold pb-2'>{`${stream} | ${degree} | ${year}`}</p>
        <Link href={`/courses/${id}`}>
          <h3 className='text-sm md:text-lg xl:text-xl font-semibold  pb-2'>
            {title}
          </h3>
        </Link>

        <p className='text-gray-500 text-xs md:text-md'>{description}</p>
      </div>
    </div>
  )
}

export default CourseCard
