import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from '@badrap/bar-of-progress'
import { Router } from 'next/dist/client/router'
import { UserProvider } from '@auth0/nextjs-auth0'

const progress = new ProgressBar({
  size: 4,
  color: '#511164',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
