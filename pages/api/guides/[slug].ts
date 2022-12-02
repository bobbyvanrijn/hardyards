import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    message: string,
    guide: object | null
}

import { guides } from '../../../content/guides.js';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { query } = req
    const { slug } = query
    const filtered = guides.filter((guide) => guide.slug === slug)

    return filtered.length > 0
        ? res.status(200).json({ 
            message: 'Ok',
            guide: filtered[0] 
        })
        : res.status(404).json({ 
            message: `Guide with slug: ${slug} not found.`,
            guide: null
        })
}
