import Head from 'next/head'

import {pageTitle} from '../libs/utils'
import {Layout} from '../components/organisms/Layout'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>{pageTitle()}</title>
      </Head>

      <div className="py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-500">
              irv.sh
            </h2>

            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Just another online workbench
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Whether you&lsquo;re a web developer, a mobile developer, or none of them. Let my tools assist your workflow!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
