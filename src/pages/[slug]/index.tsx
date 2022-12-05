import {GetServerSideProps} from 'next'
import {GetServerSidePropsResult} from 'next/types'
import Error from 'next/error'

import {Alias, retrieveColl} from '../../__server__/infra/database'

export default function Page() {
  return <Error statusCode={404}/>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug: string = context.query.slug as string
  if (!slug) {
    return defaultGetServerSidePropsResult
  }

  const coll = await retrieveColl<Alias>('alias')

  const alias = await coll.findOne({slug: slug})
  if (!alias) {
    return defaultGetServerSidePropsResult
  }

  return {
    props: {},
    redirect: {
      destination: alias.payload.originalUrl,
      permanent: false,
    }
  }
}

const defaultGetServerSidePropsResult: GetServerSidePropsResult<any> = {
  props: {}
}
