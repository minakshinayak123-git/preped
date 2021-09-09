import Image from 'next/image'

const CourseCard = ({
  thumbnail,
  title,
  description,
  category,
  stream,
  degree,
  year,
}) => {
  return (
    <div className='flex flex-col cursor-pointer hover:opacity-80 hover:shadow-lg transform transition duration-200 easy-out bg-white rounded-xl'>
      <div className='relative h-40 w-35 md:h-52 md:w-100 flex-shrink-0  mx-2 my-2'>
        <Image
          src={thumbnail}
          layout='fill'
          className='rounded-md'
          objectFit='cover'
        />
      </div>
      <div className='flex flex-col flex-grow p-4 justify-center items-left hover:bg-gray-100 '>
        <p className='text-sm md:text-md text-gray-800 font-semibold pb-2'>
          {category}
        </p>
        <p className='text-xs text-gray-500 font-semibold pb-2'>{`${stream} | ${degree} | ${year}`}</p>
        <h3 className='text-sm md:text-lg xl:text-xl font-semibold  pb-2'>
          {title}
        </h3>
        <p className='text-gray-500 text-xs md:text-md'>{description}</p>
      </div>
    </div>
  )
}

export default CourseCard
