import Image from 'next/image'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useRouter } from 'next/dist/client/router'

const Banner = () => {
  const router = useRouter()

  return (
    <div className='relative h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]'>
      <Image
        src='https://res.cloudinary.com/minakshi-nayak/image/upload/v1629638600/photo-1571772996211-2f02c9727629_zr91kw.jpg'
        layout='fill'
        objectFit='cover'
        className='opacity-40'
      />
      <div className='absolute lg:top-1/4 w-full flex flex-col items-center text-center px-3 pt-10 md:py-8 mx-auto'>
        <div className='flex flex-wrap flex-col items-center'>
          <h1 className='text-xl lg:text-4xl font-bold text-[#510E66] my-6 hover:text-purple-600'>
            India's 1st study app for Paramedical & Nursing students in Kannada
          </h1>
          <p className='text-[#510E66] text-lg font-semibold mb-8 hover:text-purple-500'>
            Study paramedical and nursing subjects in kannada with
            <b> PrepEd </b>
            app.
          </p>
          <button
            className='text-white px-8 py-4 bg-[#510E66] rounded-full shadow-md font-bold text-xs my-5 md:text-sm  hover:shadow-2xl active:scale-105 transform transition duration-300 max-w-sm'
            onClick={() => router.push('/courses')}
          >
            EXPLORE COURSES
          </button>
          <p className='text-[#510E66] font-bold'>or</p>
          <button className='text-[#510E66] border-2 border-[#510E66] px-8 py-4 bg-none rounded-full text-center shadow-md font-semibold my-5 hover:shadow-2xl active:scale-105 transform transition duration-300 max-w-sm text-sm md:text-lg'>
            Download App
          </button>
          <div className='flex pt-6'>
            <FacebookIcon
              fontSize='large'
              className='bg-[#3A5A99] rounded-full  text-white mr-4 cursor-pointer p-1'
            />
            <InstagramIcon
              fontSize='large'
              className='bg-[#D50060] rounded-full text-white mr-4 cursor-pointer p-1'
            />
            <YouTubeIcon
              fontSize='large'
              className='bg-[#E52D27] rounded-full text-white mr-4 cursor-pointer p-1'
            />
            <LinkedInIcon
              fontSize='large'
              className='bg-[#0076B2] rounded-full text-white mr-4 cursor-pointer p-1'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
