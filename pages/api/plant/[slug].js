import { plants } from '../../../content/plants.js';

export default function handler(req, res) {
    const { query } = req
    const { slug } = query
    const filtered = plants.filter((plant) => plant.slug === slug)

    return filtered.length > 0
        ? res.status(200).json(filtered[0])
        : res.status(404).json({ message: `Plant with slug: ${slug} not found.` })
}
