const plants = [
    {
        slug: 'achillea-moonshine',
        genus: 'Achillea',
        species: null,
        cultivar: '\‘Moonshine\’',
        common: 'Yarrow',
        description: 'Matte silver foliage, sulphur yellow umbels.',
        meta: [
            {
                label: 'Spread',
                value: '60-90 cm'
            },
            {
                label: 'Height',
                value: '50-80 cm'
            },
            {
                label: 'Flower color',
                value: 'Yellow'
            },
            {
                label: 'Foliage color',
                value: 'Green'
            },
            {
                label: 'Seasons of interest',
                value: 'May-August'
            }
        ],
        collection: [],
        body: [
            <p>This perennial plant is a hardy, drought-tolerant variety with a mounding growth habit. It grows up to 60 cm in height and has a spread of up to 90 cm. The foliage is silvery-grey, with lacy, fern-like leaves. The flowers are a bright yellow, and are borne in flat-topped clusters.</p>,

            <p>The blooms appear in late spring and last until fall. They are attractive to butterflies and other pollinators. Deadheading spent flowers will encourage more blooms. This variety is suitable for use as a border plant, in rock gardens, or in containers.</p>,
            
            <p>It is easy to care for, requiring little maintenance. It prefers full sun and well-drained soil. It is drought-tolerant, but supplemental water in times of extended dry spells will help to keep it looking its best. It is hardy to zone 4, and can tolerate temperatures down to -34°C.</p>
        ]
    },

    {
        slug: 'alchemilla-mollis',
        genus: 'Alchemilla',
        species: 'mollis',
        cultivar: null,
        common: 'Lady\'s mantle',
        description: 'Velvet leaves that catch droplets of water. Bunches of green-yellow flowers.',
        images: ['images/alchemilla-mollis.webp'],
        meta: [],
        collection: [],
        body: [
            <p>This perennial herbaceous plant is a popular choice for gardens and landscapes. It is native to Europe and grows in clumps up to 30 centimeters tall. The leaves are deeply divided into five to seven lobes, and they are covered in a soft, downy hair. The leaves are a bright, light green color.</p>,

            <p>The flowers of this plant are small, star-shaped and yellow-green in color. They appear in clusters at the top of the stems and bloom from late spring to mid-summer. The flowers are followed by small, round, green seed-heads.</p>,
            
            <p>This plant prefers moist, well-drained soil in full sun or partial shade. It is easy to maintain and will spread quickly to form a dense groundcover. It is also tolerant of drought and salt, making it an ideal choice for coastal areas.</p>
        ]
    },

    {
        slug: 'geranium-rozanne',
        common: 'Cranesbill',
        genus: 'Geranium',
        species: null,
        cultivar: '\‘Rozanne\’',
        description: 'Hybrid of Geranium himalayense and Geranium wallichianum \‘Buxton\'s variety\’.',
        body: [
            <p>This perennial is a standout in the garden. Its deep blue-purple, saucer-shaped blooms with white eyes appear in late spring and last until fall, creating a stunning display of color. The foliage is an attractive, deep green with a mounding habit. It is an excellent choice for adding texture and color to the garden.</p>,

            <p>This plant is low-maintenance and easy to care for. It prefers full sun and well-drained soil, and is drought tolerant once established. It is also deer resistant, making it a great choice for gardens in areas with heavy deer populations.</p>,

            <p>This plant is a great choice for edging beds, walkways, and containers. It is also a great cut flower and can be used in floral arrangements. It is a great addition to any garden for its long season of bloom and its low-maintenance care requirements.</p>
        ],
        meta: [
            {
                label: 'Spread',
                value: '60-90 cm'
            },
            {
                label: 'Height',
                value: '60-90 cm'
            },
            {
                label: 'Flower color',
                value: 'Violet-blue'
            },
            {
                label: 'Foliage color',
                value: 'Grey-green'
            },
            {
                label: 'Seasons of interest',
                value: 'May-October'
            }
        ],
        collection: [
            'prime'
        ]
    },

    {
        slug: 'echinacea-pallida',
        common: 'Coneflower',
        genus: 'Echinacea',
        species: 'pallida',
        culticvar: '\‘Hulda Dancer\’',
        description: 'Spiky seedheads. Droopy pale pink petals.',
        collection: [
            'prime'
        ],
        body: [
            <p>This perennial herb is native to the United States and is found in the Great Plains and Midwest. It is a member of the daisy family and has a slender stem that can reach a height of up to 1 meter. The leaves are lance-shaped and have a silvery-green color. The flowers are pink or white and measure up to 5 centimeters in diameter. They have a cone-shaped center surrounded by petals.</p>,

            <p>This plant is drought tolerant and prefers dry, sandy soils. It is a hardy plant and can survive in temperatures as low as -20°C. It is a popular choice for gardens and is often used as a border plant. The flowers attract butterflies and other pollinators, making it a great addition to a wildlife garden.</p>,

            <p>The plant is easy to grow from seed and has a long blooming period. It can be propagated by division or by root cuttings. It is also known for its medicinal properties and is used to make teas and tinctures. It has been used to treat a variety of ailments such as colds, flu, and allergies.</p>
        ],
        meta: [
            {
                label: 'Spread',
                value: '30-60cm',
                description: ''
            },
            {
                label: 'Height',
                value: '30-90cm',
                description: ''
            },
            {
                label: 'Flower color',
                value: 'Pale pink',
                description: ''
            },
            {
                label: 'Foliage color',
                value: 'Pale green',
            },
            {
                label: 'Seasons of interest',
                value: 'May-August'
            },
        ],
    },

    {
        slug: 'echinacea-white-swan',
        genus: 'Echinacea',
        species: 'purpurea',
        culticvar: '\‘White Swan\’',
        common: 'Coneflower',
        description: 'Loads of flowers. Spiky seedheads and white petals.',
        meta: [
            {
                label: 'Spread',
                value: '30-45 cm'
            },
            {
                label: 'Height',
                value: '60-90 cm'
            },
            {
                label: 'Flower color',
                value: 'White'
            },
            {
                label: 'Foliage color',
                value: 'Green'
            },
            {
                label: 'Seasons of interest',
                value: 'June-August'
            }
        ],
        body: [
            <p>This perennial flower is a sight to behold. It features a white, daisy-like flower head with a yellow center. The petals are long and thin, and the leaves are lanceolate and serrated. Growing up to 30 centimeters tall, it is a beautiful addition to any garden.</p>,
            <p>It is a hardy plant, able to tolerate cold temperatures and requires minimal maintenance. It is drought tolerant and prefers full sun to partial shade. It blooms from mid-summer to early fall and attracts butterflies and other pollinators.</p>,
            <p>This flower is easy to propagate, either by division or by seed. It can be grown in containers or in the ground, and is an excellent choice for rock gardens. It is a great addition to any garden, providing a striking contrast to other plants.</p>
        ],
        collection: []
    },

    {
        slug: 'sedum-matrona',
        genus: 'Sedum',
        common: 'Stonecrop',
        species: null,
        cultivar: '\‘Matrona\’',
        description: 'Meaty grey-purple leaves. Faded pink flowers.',
        meta: [
            {
                label: 'Spread',
                value: '30-45 cm'
            },
            {
                label: 'Height',
                value: '20-30 cm'
            },
            {
                label: 'Flower color',
                value: 'Pink'
            },
            {
                label: 'Foliage color',
                value: 'Grey-green'
            },
            {
                label: 'Seasons of interest',
                value: 'May-September'
            }
        ],
        body: [
            <p>This succulent is a perennial, hardy in USDA zones 4-9. It forms a low-growing, spreading mound of fleshy, gray-green leaves, with a maximum height of 15 cm. The leaves are triangular-oval in shape and have a scalloped edge. In late summer, the plant produces clusters of pink flowers on tall stems. The flowers are star-shaped and have five petals.</p>,
            <p>This plant thrives in full sun, with well-drained soil. It is drought tolerant and can tolerate temperatures down to -23°C. It is best grown in a rock garden, or as a ground cover in a sunny border. It is also suitable for containers.</p>,
            <p>To propagate, cuttings can be taken in spring or early summer. These can be rooted in a sandy compost. Alternatively, division of the plant can be done in spring or autumn. This plant is attractive to bees, butterflies and birds, making it a great addition to any garden.</p>
        ],
        collection: [
            'prime'
        ]
    },

    {
        slug: 'symphyotrichum-little-carlow',
        genus: 'Symphyotrichum',
        species: null,
        cultivar: '\‘Little Carlow\’',
        common: 'Aster',
        description: 'Hybrid of A. cordifolius and A. novi-belgii. Mounds of fine petalled violet blue flowers.',
        meta: [
            {
                label: 'Spread',
                value: '50 cm'
            },
            {
                label: 'Height',
                value: '90 cm'
            },
            {
                label: 'Flower color',
                value: 'Purple'
            },
            {
                label: 'Foliage color',
                value: 'Green'
            },
            {
                label: 'Seasons of interest',
                value: 'July-October'
            }
        ],
        body: [
            <p>This perennial aster is native to the southeastern United States. It grows to a height of up to 60 cm and produces small, white flowers. The leaves are lance-shaped, with serrated edges, and are arranged alternately along the stem. The flowers are arranged in a flat-topped cluster, and each individual flower has five petals.</p>,

            <p>The plant blooms in late summer and early fall, and the flowers attract a variety of pollinators, including bees, butterflies, and moths. It prefers moist, well-drained soils in full sun to partial shade. It is tolerant of a wide range of soils and can be grown in USDA hardiness zones 5 to 9.</p>,

            <p>This aster is a great choice for adding texture and color to the garden. It is easy to grow and maintain, and it will spread slowly by self-seeding. It is a good choice for naturalizing in meadows and woodland edges, and it can also be used in perennial borders and as a cut flower.</p>
        ],
        collection: [
            'prime'
        ]
    },
];

export { plants };
