import Image from 'next/image'

const Educators = ({ first_name, last_name, biography, profile_pic }) => {
  return (
    <div className='flex md:flex-col sm:py-7 sm:px-3 sm:pr-6 md:px-6 lg:px-8 cursor-pointer rounded-lg hover:opacity-80 hover:shadow-lg transform transition duration-200 easy-out bg-white mb-4'>
      <div className='flex flex-col space-y-1 px-6 py-6'>
        <div className='relative h-20 w-20'>
          <Image
            src={profile_pic}
            layout='fill'
            objectFit='cover'
            className='rounded-2xl'
          />
        </div>
        <h3 className='text-gray-800 font-bold pt-2'>{`${first_name} ${last_name}`}</h3>
        <p className='text-sm md:text-md pt-2'>{biography}</p>
      </div>
    </div>

    // <div className='max-w-full py-4 px-8 bg-white shadow-lg rounded-lg mb-20'>
    //   <div className='flex justify-center md:justify-end mt-16 h-20 w-20'>
    //     <Image
    //       src={profile_pic}
    //       layout='fill'
    //       objectFit='cover'
    //       className='rounded-full border-2 border-indigo-500'
    //     />
    //   </div>
    //   <div>
    //     <h3 className='text-gray-800 text-3xl font-semibold'>{`${first_name} ${last_name}`}</h3>
    //     <p className='mt-2 text-gray-600'>{biography}</p>
    //   </div>
    // </div>
  )
}

export default Educators
