import Image from 'next/image'
import { PhoneIcon, MenuIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'

const Header = () => {
  const router = useRouter()

  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <>
      <header className='sticky flex flex-wrap justify-between items-center w-full mx-auto top-0 py-4 z-30 bg-[#510E66] shadow-xl px-6 md:px-10 text-white gradiant border-b'>
        <div
          className='relative flex items-center px-12 h-8 cursor-pointer'
          onClick={() => router.push('/')}
        >
          <Image
            src='https://res.cloudinary.com/minakshi-nayak/image/upload/v1629563223/logo_da67sc.png'
            layout='fill'
            objectFit='cover'
            objectPosition='left'
            className='w-28 h-40'
          />
        </div>

        <div className='hidden md:inline-flex items-center justify-end space-x-10'>
          <div className='flex items-center hover:text-purple-300'>
            <PhoneIcon className='h-4 cursor-pointer ' />
            <p className='cursor-pointer text-xs '>+91- 7892696223</p>
          </div>
          <div className='flex items-center hover:text-purple-300'>
            <PhoneIcon className='h-4 cursor-pointer' />
            <p className='cursor-pointer text-xs'>+91- 7676010218</p>
          </div>
          <p className='text-xs cursor-pointer hover:text-purple-300'>Login</p>
          <p className='text-xs cursor-pointer hover:text-purple-300'>
            Register
          </p>
        </div>
        <div className='block md:hidden pr-3' x-data='{menuOpened:false}'>
          <MenuIcon
            className='h-6 cursor-pointer'
            onClick={() => setMenuOpened(!menuOpened)}
          />
        </div>
      </header>
      {menuOpened && (
        <div className='flex flex-col md:hidden items-center justify-center mx-auto mt-6 px-10 overflow-scroll bg-white max-w-[240px] max-h-[260px]  text-black rounded-lg hover:shadow-2xl border mb-4'>
          <div className='flex items-center hover:text-purple-800 py-3'>
            <PhoneIcon className='h-4 cursor-pointer' />
            <p className='cursor-pointer text-xs '>+91- 7892696223</p>
          </div>
          <div className='flex items-center hover:text-purple-800 py-3'>
            <PhoneIcon className='h-4 cursor-pointer' />
            <p className='cursor-pointer text-xs'>+91- 7676010218</p>
          </div>
          <p className='text-xs cursor-pointer hover:text-purple-800 py-3'>
            Login
          </p>
          <p className='text-xs cursor-pointer hover:text-purple-800 py-3'>
            Register
          </p>
        </div>
      )}
    </>
  )
}

export default Header
