import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    message: string,
    plant: object | null
}

import { plants } from '../../../content/plants.js';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { query } = req
    const { slug } = query

    const filtered = plants.filter((plant) => {
        // if (plant.collection.length > 0) {
        //     return plant.collection.includes('prime');
        // }

        return plant;
    });

    return filtered.length > 0
        ? res.status(200).json({ 
            message: 'Ok',
            plant: filtered
        })
        : res.status(404).json({ 
            message: `Plants with meta not found.`,
            plant: null
        })
}

