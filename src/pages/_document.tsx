import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html className="h-full">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Head>
      <body className="h-full overflow-hidden bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-300">
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}
