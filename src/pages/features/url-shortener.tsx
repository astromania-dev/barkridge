import {withTypes} from 'react-final-form'
import axios from 'axios'
import Head from 'next/head'

import {pageTitle} from '../../libs/utils'
import {Layout} from '../../components/organisms/Layout'
import {Panel} from '../../components/atoms/Panel'
import {HStack, SectionHeader, TextField} from '../../components/molecules/Form'
import {SubmitButton} from '../../components/molecules/Form/SubmitButton'
import {useState} from 'react'

declare type Result = {
  slug: string
}

declare type FormValues = {
  originalUrl: string
}

export default function Page() {
  const [result, setResult] = useState<Result>()

  const {Form} = withTypes<FormValues>()

  const onSubmit = async ({originalUrl}: FormValues) => {
    const {data} = await axios.post('/api/alias', {
      type: 'url',
      originalUrl: originalUrl,
    })

    setResult(data)
  }

  return (
    <Layout>
      <Head>
        <title>{pageTitle('URL Shortener')}</title>
      </Head>

      {!result && (
        <Panel>
          <Form onSubmit={onSubmit}>
            {({handleSubmit, submitting}) => (
              <form
                className="space-y-8 sm:space-y-5 divide-y divide-zinc-300 dark:divide-zinc-700"
                onSubmit={handleSubmit}
              >
                <div className="space-y-6 sm:space-y-5">
                  <SectionHeader
                    title="URL Shortener"
                    subtitle="Shorten your URLs just like Bitly or TinyURL, with the handy of &quot;irv.sh&quot;."
                  />

                  <div className="space-y-6 sm:space-y-5">
                    <HStack label="URL">
                      <TextField name="originalUrl" required/>
                    </HStack>

                    <SubmitButton label="Submit" disabled={submitting}/>
                  </div>
                </div>
              </form>
            )}
          </Form>
        </Panel>
      )}

      {result && (
        <Panel className="space-y-8 sm:space-y-5 divide-y divide-zinc-300 dark:divide-zinc-700">
          <div className="space-y-6 sm:space-y-5">
            <SectionHeader
              title="URL Shortener"
              subtitle="Shorten your URLs just like Bitly or TinyURL, with the handy of &quot;irv.sh&quot;."
            />

            <div className="space-y-6 sm:space-y-5">
              <HStack label="Result">
                <div className="sm:pt-2">
                  <code>
                    https://irv.sh/{result.slug}
                  </code>
                </div>
              </HStack>
            </div>
          </div>
        </Panel>
      )}
    </Layout>
  )
}
