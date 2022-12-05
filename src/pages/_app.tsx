import type {AppProps} from 'next/app'
import localFont from '@next/font/local'
import Script from 'next/script'

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

      <GoogleAnalytics/>

      <Component {...pageProps}/>
    </>
  )
}

const GoogleAnalytics = () => {
  const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID
  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script async src={'https://www.googletagmanager.com/gtag/js?id=' + measurementId}/>
      <Script id="setup-google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  )
}
