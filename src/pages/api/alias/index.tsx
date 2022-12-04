import {v4} from 'uuid'
import {validate} from 'validate.js'
import type {NextApiRequest, NextApiResponse} from 'next'

import {Alias, retrieveColl} from '../../../__server__/infra/database'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  const constraints = {
    type: {
      presence: true,
      inclusion: ['url'],
    },
    originalUrl: {
      presence: true,
      url: true,
    }
  }

  const validateErrors = validate(req.body, constraints)
  if (validateErrors) {
    res.status(400).json({
      errors: validateErrors
    })

    return
  }

  const coll = await retrieveColl<Alias>('alias')
  const slug = v4().split('-')[0]
  const alias: Alias = {
    slug: slug,
    payload: {
      type: 'url',
      originalUrl: req.body.originalUrl
    }
  }

  await coll.insertOne(alias)

  res.status(200).json({
    slug: alias.slug,
    payload: alias.payload,
  })
}
