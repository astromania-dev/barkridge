import type {NextApiRequest, NextApiResponse} from 'next'

import {retrieveColl, retrieveDb} from '../../__server__/infra/database'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    database: {
      ping: await healthcheckDatabase(),
      alias_indices: await healthcheckAliasCollectionIndices(),
    }
  })
}

async function healthcheckDatabase(): Promise<boolean> {
  const db = await retrieveDb()

  await db.command({ping: 1})

  return true
}

async function healthcheckAliasCollectionIndices(): Promise<boolean> {
  let slugIndexKey = {slug: 1}
  let slugIndexed = false

  const coll = await retrieveColl('alias')

  const indices = await coll.indexes()
  for (let index of indices) {
    if (JSON.stringify(index.key) == JSON.stringify(slugIndexKey)) {
      slugIndexed = true
    }
  }

  if (!slugIndexed) {
    await coll.createIndex({slug: 1}, {unique: true})
  }

  return true
}
