import Image from 'next/image'

const SmallCard = ({
  first_name,
  last_name,
  profile_pic,
  biography,
  designation,
}) => {
  return (
    <div className='cursor-pointer rounded-lg border-1 shadow-xl'>
      <div className='relative h-80 w-60'>
        <Image
          src={profile_pic}
          layout='fill'
          objectFit='cover'
          className='rounded-lg'
        />
        <div className='absolute hover:h-80 w-60 opacity-70 hover:bg-[#007aff] rounded-lg px-4 pt-10 transition-transform transition-shadow-2xl duration-300 ease-out'>
          <div className='flex flex-wrap flex-col text-transparent hover:text-white'>
            <h3 className='hover:text-lg lg:text-xl font-bold my-6'>
              {`${first_name} ${last_name}`}
            </h3>
            <p className='text-sm font-bold mb-4'>{designation}</p>
            <p className='text-sm lg:text-md font-semibold'>{biography}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallCard
