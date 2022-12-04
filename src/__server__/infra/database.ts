import {Collection, CollectionOptions, Db, DbOptions, MongoClient} from 'mongodb'

export declare type Alias = {
  slug: string
  payload: any
}

let client: MongoClient = null

export const retrieveDb = async (dbName = 'barkridge', options?: DbOptions): Promise<Db> => {
  if (!client) {
    client = new MongoClient(process.env.DATABASE_DSN)

    await client.connect()
    await client.db('admin').command({ping: 1})
  }

  return client.db(dbName, options)
}

export const retrieveColl = async <Type>(name: string, options?: CollectionOptions): Promise<Collection<Type>> => {
  const db = await retrieveDb()

  return db.collection<Type>(name, options)
}
