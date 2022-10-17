import { ProductCollection } from "@medusajs/medusa"
import { medusaClient } from "../config"

export const getCollectionsByHandle = async (): Promise<
  Record<string, ProductCollection>
> => {
  const data: Record<string, ProductCollection> = {}
  await medusaClient.collections
    .list({ limit: 100 })
    .then(({ collections }) => {
      collections.forEach((c) => {
        data[c.handle] = c
      })
    })

  return data
}
