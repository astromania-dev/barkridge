import type {NextApiRequest, NextApiResponse} from 'next'

import {Alias, retrieveColl} from '../../../../__server__/infra/database'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug: string = req.query.slug as string
  if (!slug) {
    res.status(404).end()
    return
  }

  const coll = await retrieveColl<Alias>('alias')

  const alias = await coll.findOne({slug: slug})
  if (!alias) {
    res.status(404).end()
    return
  }

  res.status(200).json({
    slug: alias.slug,
    payload: alias.payload,
  })
}
