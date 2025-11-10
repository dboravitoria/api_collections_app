import { Router } from "express"
import { getAllCollections, getCollectionById } from "../controllers/conllectionsController"


const router = Router()

router.get("/", getAllCollections)
router.get("/:id", getCollectionById)

export default router
