import { collectionType } from '../types/collectionType'

export class Collection {
  constructor(public data: collectionType) {
    Object.assign(this, data)
  }
}
