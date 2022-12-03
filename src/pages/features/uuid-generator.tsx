import {useState} from 'react'
import {v1, v4} from 'uuid'
import {withTypes} from 'react-final-form'
import Head from 'next/head'

import {pageTitle} from '../../libs/utils'
import {Layout} from '../../components/organisms/Layout'
import {Panel} from '../../components/atoms/Panel'
import {SectionHeader, Select, SelectOption} from '../../components/molecules/Form'
import {SubmitButton} from '../../components/molecules/Form/SubmitButton'

declare type FormValues = {
  version: string
}

const versions: SelectOption[] = [
  {value: '1', label: 'Version 1 (Timestamp-based)'},
  {value: '4', label: 'Version 4 (Random)'},
]

export default function Page() {
  const [result, setResult] = useState<string>()

  const {Form} = withTypes<FormValues>()

  const onSubmit = ({version}: FormValues) => {
    switch (version) {
    case '1':
      setResult(v1())
      break
    case '4':
      setResult(v4())
      break
    default:
      break
    }

    return undefined
  }

  return (
    <Layout>
      <Head>
        <title>{pageTitle('UUID Generator')}</title>
      </Head>

      <Panel>
        <Form onSubmit={onSubmit}>
          {({handleSubmit}) => (
            <form
              className="space-y-8 sm:space-y-5 divide-y divide-zinc-300 dark:divide-zinc-700"
              onSubmit={handleSubmit}
            >
              <div className="space-y-6 sm:space-y-5">
                <SectionHeader
                  title="UUID Generator"
                  subtitle="Free developer tool to generate UUID, in both v1 (timestamp) and v4 (random)."
                />

                <div className="space-y-6 sm:space-y-5">
                  <Select label="Version" name="version" options={versions} initialValue="4"/>

                  <SubmitButton label="Generate"/>
                </div>
              </div>
            </form>
          )}
        </Form>
      </Panel>

      {result && (
        <Panel className="mt-6 text-center">
          <code className="text-lg">
            {result}
          </code>
        </Panel>
      )}
    </Layout>
  )
}
