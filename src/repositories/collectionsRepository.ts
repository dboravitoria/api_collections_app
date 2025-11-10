import { pool } from "../config/database"
import { collectionType } from "../types/collectionType"

export class CollectionsRepository {
  async findAll(): Promise<collectionType[]> {
    const result = await pool.query("SELECT * FROM collections ORDER BY id ASC")
    return result.rows
  }

  async findById(id: number): Promise<collectionType | null> {
    const result = await pool.query("SELECT * FROM collections WHERE id = $1", [id])
    return result.rows[0] || null
  }
}
