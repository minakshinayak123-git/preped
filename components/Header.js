import Image from 'next/image'
import { PhoneIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'

const Header = () => {
  const router = useRouter()

  return (
    <header className='sticky grid grid-cols-3 top-0 z-30 bg-[#510E66] shadow-md p-5 md:px-10 text-white gradiant border-b'>
      <div
        className='relative flex items-center h-8 cursor-pointer'
        onClick={() => router.push('/')}
      >
        <Image
          src='https://res.cloudinary.com/minakshi-nayak/image/upload/v1629563223/logo_da67sc.png'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      <div></div>
      <div className='flex items-center justify-end space-x-10'>
        <div className='flex items-center'>
          <PhoneIcon className='h-4 cursor-pointer' />
          <p className='cursor-pointer text-xs hover:text-purple-300'>
            +91- 7892696223
          </p>
        </div>
        <div className='flex items-center'>
          <PhoneIcon className='h-4 cursor-pointer' />
          <p className='cursor-pointer text-xs hover:text-purple-300'>
            +91- 7676010218
          </p>
        </div>
        <p className='text-xs cursor-pointer hover:text-purple-300'>Login</p>
        <p className='text-xs cursor-pointer hover:text-purple-300'>Register</p>
      </div>
    </header>
  )
}

export default Header
