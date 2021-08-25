const MediumCard = ({ type, title, description }) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition transform duration-300 easy-out border-2 rounded-lg sm:pl-2 px-2 md:px-6 bg-[#510E66] text-white'>
      <div className='flex-1 p-4 h-80 w-80 justify-center items-center'>
        <p className='text-xs text-gray-500 font-semibold pb-4'>{type}</p>
        <h3 className='text-xl font-semibold  pb-4'>{title}</h3>
        <p className='text-gray-500'>{description}</p>
      </div>
      <div className='flex justify-center pb-4 pt-4'>
        <button className='bg-white text-[#510E66] border-2 border-[#510E66] px-6 py-4 bg-none rounded-full text-center shadow-md font-semibold my-2 hover:shadow-2xl active:scale-105 transform transition duration-300 text-sm'>
          Explore
        </button>
      </div>
    </div>
  )
}

export default MediumCard
