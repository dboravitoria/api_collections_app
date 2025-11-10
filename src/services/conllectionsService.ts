import { CollectionsRepository } from "../repositories/collectionsRepository"

export class CollectionsService {
  private repository: CollectionsRepository

  constructor() {
    this.repository = new CollectionsRepository()
  }

  async getAllCollections() {
    const collections = await this.repository.findAll()
    return collections
  }

  async getCollectionById(id: number) {
    const collection = await this.repository.findById(id)
    if (!collection) {
      throw new Error("Coleção não encontrada")
    }
    return collection
  }
}
