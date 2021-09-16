import ReactPlayer from 'react-player'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { ChevronRightIcon } from '@heroicons/react/outline'
import courseData from '../../data/courseData.json'
import getCourseData from '../../utils/getCourseData'
import { useRouter } from 'next/dist/client/router'
import FacebookIcon from '@material-ui/icons/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Lectures from '../../components/Lectures'
import Educators from '../../components/Educators'

const CoursePage = ({ data }) => {
  const router = useRouter()
  const id = router.query.id

  const { title, description, category, price } = getCourseData(data, id)

  const [section1, ...remainingSection] = getCourseData(data, id)?.sections

  const { authors } = getCourseData(data, id)

  return (
    <>
      <Header />
      <main className='max-width-7xl items-center mx-auto px-2 md:px-8 cursor-pointer bg-[#511164] shadow-lg md:shadow-2xl pb-10'>
        <section className='pt-6 pb-8 hover:shadow-lg transform transition duration-200 easy-out'>
          <div className='flex flex-wrap justify-between mx-auto'>
            <div className='flex items-center py-6 pl-6 text-center'>
              <p
                onClick={() => router.push('/')}
                className='text-white hover:text-gray-400 text-sm mr-2'
              >
                Home
              </p>
              <ChevronRightIcon className='text-white hover:text-gray-400 mr-2 h-4' />

              <p
                className='text-white hover:text-gray-400 text-sm mr-2'
                onClick={() => router.push('/courses')}
              >
                Courses
              </p>
              <ChevronRightIcon className='text-white hover:text-gray-400 mr-2 h-4' />
              <p className='text-gray-500 text-sm'>{title}</p>
            </div>
          </div>
        </section>
        <section className='items-center bg-[#f5f5f5] rounded-xl shadow-2xl'>
          <div className='flex flex-wrap mx-auto justify-center items-center px-8 lg:flex-row lg:flex-nowrap'>
            <div className='w-full md:w-3/5 h-60 md:h-72 lg:h-96 pt-8'>
              {/* <iframe
                src='https://vimeo.com/556113737'
                allow='autoplay; fullscreen; picture-in-picture'
                data-ready='true'
                width='100%'
                height='100%'
                frameBorder='0'
              /> */}
              <ReactPlayer
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='100%'
              />
            </div>
            <div className='flex flex-col p-4 lg:mt-6 md:p-2 justify-center items-center'>
              <p className='text-sm md:text-md text-gray-800 font-semibold pb-2 pt-8'>
                {category}
              </p>

              <h3 className='text-sm md:text-lg xl:text-xl font-semibold  pb-2 text-center'>
                {title}
              </h3>
              <p className='text-gray-800 text-md md:text-lg pt-4 text-center'>
                {description}
              </p>
              <p className='text-gray-800 text-lg font-bold pt-4 text-center'>
                ${price}
              </p>
              <button className='text-sm text-white bg-gray-900 px-10 py-3  font-semibold rounded-lg mt-5'>
                Buy
              </button>

              <div className='flex pt-6 justify-center items-center pb-10'>
                <FacebookIcon
                  fontSize='large'
                  className='bg-[#3A5A99] rounded-full  text-white mr-4 cursor-pointer p-1'
                  onClick={() =>
                    router.push('https://www.facebook.com/preped.in/')
                  }
                />
                <WhatsAppIcon
                  fontSize='large'
                  className='bg-[#25D366] rounded-full  text-white mr-4 cursor-pointer p-1'
                  onClick={() =>
                    router.push(
                      'https://api.whatsapp.com/send?text=https://preped-new-hejakn67m-minakshiknayak-gmailcom.vercel.app/course/58f9d66f-24df-48fc-b061-efbce39f39ca'
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='flex flex-wrap md:flex-nowrap bg-[#f5f5f5] rounded-xl shadow-2xl p-2 mt-10'>
            <div className='flex flex-col md:w-2/3'>
              <h2 className='text-2xl md:text-4xl text-gray-800 font-semibold pb-2  items-center text-center border-b border-gray-200'>
                Lectures
              </h2>
              <div className='pt-4'>
                <Lectures
                  section1={section1}
                  remainingSection={remainingSection}
                />
              </div>
            </div>

            <div className='flex flex-col md:w-1/3'>
              <h2 className='text-2xl md:text-4xl text-gray-800 font-semibold pb-2  items-center text-center border-b border-gray-200'>
                Educators
              </h2>
              <div className='pt-4'>
                {authors.map(
                  ({ id, first_name, last_name, biography, profile_pic }) => (
                    <Educators
                      key={id}
                      first_name={first_name}
                      last_name={last_name}
                      biography={biography}
                      profile_pic={profile_pic}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CoursePage

export async function getServerSideProps() {
  const { data } = await JSON.parse(JSON.stringify(courseData))
  return {
    props: {
      data,
    },
  }
}
