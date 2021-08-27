import Image from 'next/image'

const SmallCard = ({
  first_name,
  last_name,
  profile_pic,
  biography,
  designation,
}) => {
  return (
    <div className='cursor-pointer rounded-lg border-1 shadow-xl hover:-rotate-20 '>
      <div className='relative h-80 w-60'>
        <Image
          src={profile_pic}
          layout='fill'
          objectFit='cover'
          className='rounded-lg'
        />
        <div className='absolute hover:h-80 w-60 opacity-70 hover:bg-[#007aff] rounded-lg px-4 pt-10 transition-transform transition-shadow-2xl duration-300 ease-out'>
          <div className='flex flex-wrap flex-col'>
            <h3 className='hover:text-lg lg:text-xl font-bold text-transparent hover:text-white my-6'>
              {`${first_name} ${last_name}`}
            </h3>
            <p className='text-sm text-transparent hover:text-gray-900 font-bold'>
              {designation}
            </p>
            <p className='text-sm text-transparent lg:text-md font-semibold hover:text-white my-6'>
              {biography}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallCard
