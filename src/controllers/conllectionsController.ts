import { Request, Response } from "express"
import { CollectionsService } from "../services/conllectionsService"


const service = new CollectionsService()

export const getAllCollections = async (req: Request, res: Response) => {
  try {
    const collections = await service.getAllCollections()
    res.status(200).json(collections)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao buscar coleções" })
  }
}

export const getCollectionById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const collection = await service.getCollectionById(id)
    res.status(200).json(collection)
  } catch (error: any) {
    res.status(404).json({ error: error.message })
  }
}
