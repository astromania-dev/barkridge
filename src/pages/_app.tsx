import localFont from '@next/font/local'
import type {AppProps} from 'next/app'

import '../styles/base.css'

const inter = localFont({
  src: './../assets/fonts/Inter.var.woff2',
})

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <style global jsx>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  )
}
