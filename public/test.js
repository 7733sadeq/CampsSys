import sql from '../db'

export default async function handler(req, res) {
  try {
    const result = await sql`SELECT NOW()`
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
