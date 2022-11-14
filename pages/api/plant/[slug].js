const plants = [
    {
        slug: 'achillea',
        title: 'Achillea',
        description: 'Lorem ipsum'
    },

    {
        slug: 'alchemilla-mollis',
        title: 'Alchemilla mollis',
        description: 'Lorem ipsum'
    },
    {
        slug: 'geranium-rozanne',
        title: 'Geranium \'Rozanne\'',
        description: 'Hybrid of Geranium himalayense and Geranium wallichianum \'Buxton\'s variety\'.'
    },
]

export default function handler(req, res) {
    const { query } = req
    const { slug } = query
    const filtered = plants.filter((plant) => plant.slug === slug)

    return filtered.length > 0
        ? res.status(200).json(filtered[0])
        : res.status(404).json({ message: `Plant with slug: ${slug} not found.` })
}
