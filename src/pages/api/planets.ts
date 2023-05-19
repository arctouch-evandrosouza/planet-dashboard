// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import planets from '@/database/planets'
import { PlanetInterface } from '@/interfaces/planetsInterface'
import Router from 'next/router'
 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(planets)
}
