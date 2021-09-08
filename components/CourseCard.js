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
    <div className='flex flex-col items-center mt-5 cursor-pointer rounded-xl shadow-2xl hover:bg-gray-100 scale-x-105 transition transform duration-200 ease-out bg-white h-150 w-80'>
      <div className='relative h-60 w-80'>
        <Image
          src={thumbnail}
          layout='fill'
          className='rounded-t-xl'
          objectFit='cover'
        />
      </div>
      <div className='flex-1 p-4 h-80 w-80 justify-center items-center'>
        <p className='text-md text-gray-800 font-semibold pb-4'>{category}</p>
        <p className='text-xs text-gray-500 font-semibold pb-4'>{`${stream} | ${degree} | ${year}`}</p>
        <h3 className='text-xl font-semibold  pb-4'>{title}</h3>
        <p className='text-gray-500'>{description}</p>
      </div>
    </div>
  )
}

export default CourseCard
