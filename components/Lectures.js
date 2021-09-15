import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

const Lectures = ({ sections, section1, remainingSection }) => {
  return (
    <div className='flex md:flex-col sm:py-7 sm:px-3 sm:pr-6 cursor-pointer rounded-lg hover:opacity-80 hover:shadow-lg transform transition duration-200 easy-out bg-white mb-4 mr-4'>
      <div className='flex flex-col space-y-1 px-6 py-6'>
        <h3 className='text-gray-800 bg-gray-100 py-4 pl-2 rounded-lg'>{`1. ${section1?.name}`}</h3>
        {section1?.videos.map((video) => (
          <div
            className='flex items-center text-gray-500 pl-4 bg-gray-300 py-4 text-center  rounded-lg hover:scale-105 transition transform duration-300 easy-out active:bg-purple-300 hover:text-gray-700'
            key={video.id}
          >
            <PlayCircleOutlineIcon
              fontSize='medium'
              className='rounded-full mr-1 cursor-pointer p-1'
            />
            <p className='cursor-pointer text-md'>{video.name}</p>
          </div>
        ))}
        {remainingSection?.map((section, i) => (
          <h3 key={section.id} className='text-gray-800'>{`${i + 2}. ${
            section.name
          }`}</h3>
        ))}
      </div>

      {/* {[...Array(sections.length).keys()].map((x) => (
        <option key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))} */}
    </div>
  )
}

export default Lectures
