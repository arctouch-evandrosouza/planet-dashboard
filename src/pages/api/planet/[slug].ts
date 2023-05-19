// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import planets from '@/database/planets'
import { PlanetInterface } from '@/interfaces/planetsInterface'
 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let planet = planets.filter((planet: PlanetInterface) => req.query.slug === planet.slug)
  res.status(200).json(planet)
}
