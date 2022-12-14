import { shuffle } from 'lodash';
const bulbs = [
    {
        slug: 'allium-christophii',
        genus: 'Allium',
        species: 'christophii',
        cultivar: null,
        common: 'Star of persia',
        description: 'Ball of very fine, starshaped flowers.',
        meta: [
            {
                label: 'Spread',
                value: '10 cm'
            },
            {
                label: 'Height',
                value: '15-60 cm'
            },
            {
                label: 'Flowers',
                value: 'Silvery purple'
            },
            {
                label: 'Foliage',
                value: 'Green'
            }
        ],
        collections: [],
        body: [],
        blurhash: 'LAGRrM%fTv4n^S_MsrDjX3kW?I-='
    },
    {
        slug: 'camassia-leichtinii',
        genus: 'Camassia',
        species: 'leichtinii',
        cultivar: '\‘Caerulia\’',
        common: 'Quamash',
        description: 'has a all stem with a spike-like cluster of flowers. Bulb is eaten as a crop by Native Americans.',
        meta: [
            {
                label: 'Spread',
                value: '20 cm'
            },
            {
                label: 'Height',
                value: '60-120 cm'
            },
            {
                label: 'Flowers',
                value: 'Pale purple/blue'
            },
            {
                label: 'Foliage',
                value: 'Green'
            }
        ],
        collections: [],
        body: [],
        blurhash: 'LhFPHQ-;Ria^~qx]WVj??axva$fP'
    },
]

const herbaceousPerennials = [
    // TODO: Add `lifecycle` prop (annual, biennial, perennial)
    // TODO: Add plants ↓
    // - Acanthus mollis
    // - Agastache 'black adder' / 'blue fortune'
    // - Veronica(strum)
    // - Actaea 'Chocoholic'
    {
        slug: 'acanthus-mollis',
        genus: 'Acanthus',
        species: 'mollis',
        cultivar: null,
        common: 'Bear\'s breeches',
        description: 'has broad, spiky leaves. Spires with small white flowers.',
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
                label: 'Flowers',
                value: 'Yellow'
            },
            {
                label: 'Foliage',
                value: 'Green'
            }
        ],
        collections: [],
        'main-image': '',
        'additional-images': ['acanthus-mollis-foliage'],
        blurhash: 'L4AwSAsR*D9rIC9FD%tRR7RC%LR+'
    },
    {
        slug: 'achillea-moonshine',
        genus: 'Achillea',
        species: null,
        cultivar: '\‘Moonshine\’',
        common: 'Yarrow',
        description: 'has matte silver foliage, sulphur yellow umbels.',
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
                label: 'Flowers',
                value: 'Yellow'
            },
            {
                label: 'Foliage',
                value: 'Green'
            },
            {
                label: 'Seasons',
                value: '5-8'
            }
        ],
        collections: [],
        body: [
            'This hardy and drought-tolerant perennial plant is an easy-to-care-for variety with lacy, silvery-grey foliage and bright yellow flowers that attract pollinators. It can be grown in borders, rock gardens, and containers, and prefers full sun and well-drained soil. It is hardy to zone 4 and can tolerate temperatures down to -34°C.'
        ],
        'main-image': '',
        blurhash: 'LGFh,f${0TxC~MofNK-l0BjZ^vxr'
    },

    // {
    //     slug: 'agastache-foeniculum',
    //     genus: 'Agastache',
    //     species: 'foeniculum',
    //     cultivar: '\‘Blackadder\’',
    //     common: 'Hyssop',
    //     description: 'Nettle like leaves, deep purple spires.',
    //     meta: [
    //         {
    //             label: 'Spread',
    //             value: '60-90 cm'
    //         },
    //         {
    //             label: 'Height',
    //             value: '50-80 cm'
    //         },
    //         {
    //             label: 'Flowers',
    //             value: 'Yellow'
    //         },
    //         {
    //             label: 'Foliage',
    //             value: 'Green'
    //         },
    //         {
    //             label: 'Seasons',
    //             value: '5-8'
    //         }
    //     ],
    //     collections: [],
    //     body: [],
    //     'main-image': '',
    //     'image-credit': '',
    //     blurhash: 'LOFP86R8M{a#^nImRiRi%dM_V]WB'
    // },

    {
        slug: 'nepeta-faassenii',
        genus: 'Nepeta',
        species: '× faassenii',
        cultivar: '\‘Walker\'s low\’',
        common: 'Catmint',
        description: 'has bushy mounds of gray leaves. Flowers vigouroursly with small purple florets.',
        meta: [
            {
                label: 'Spread',
                value: '40 cm'
            },
            {
                label: 'Height',
                value: '50 cm'
            },
            {
                label: 'Flowers',
                value: 'Purple'
            },
            {
                label: 'Foliage',
                value: 'Gray-Green'
            }
        ],
        collections: [],
        body: [],
        'main-image': '',
        'image-credit': 'David J. Stang',
        blurhash: 'LDC?ZMD,~U%2~CRS-.jED$s=V{Ri'
    },

    {
        slug: 'alchemilla-mollis',
        genus: 'Alchemilla',
        species: 'mollis',
        cultivar: null,
        common: 'Lady\'s mantle',
        description: 'has velvet leaves that catch droplets of water. Bunches of green-yellow flowers.',
        images: ['images/alchemilla-mollis.webp'],
        meta: [],
        collections: [
            {
                slug: 'propagators',
                title: 'Propagators'
            }
        ],
        body: [
            'This perennial herbaceous plant is a popular choice for gardens and landscapes. It is native to Europe and grows in clumps up to 30 centimeters tall. The leaves are deeply divided into five to seven lobes, and they are covered in a soft, downy hair. The leaves are a bright, light green color.',
            'The flowers of this plant are small, star-shaped and yellow-green in color. They appear in clusters at the top of the stems and bloom from late spring to mid-summer. The flowers are followed by small, round, green seed-heads.',
            'This plant prefers moist, well-drained soil in full sun or partial shade. It is easy to maintain and will spread quickly to form a dense groundcover. It is also tolerant of drought and salt, making it an ideal choice for coastal areas.'
        ],
        blurhash: 'L39*b$_K8|9H_LD*IBt7V[.7MzIB',
        'additional-images': ['alchemilla-mollis-001', 'alchemilla-mollis-002'],
    },

    {
        slug: 'geranium-rozanne',
        common: 'Cranesbill',
        genus: 'Geranium',
        species: null,
        cultivar: '\‘Rozanne\’',
        description: 'is a hybrid of Geranium himalayense and Geranium wallichianum \‘Buxton\'s variety\’.',
        body: [
            'This perennial is a standout in the garden. Its deep blue-purple, saucer-shaped blooms with white eyes appear in late spring and last until fall, creating a stunning display of color. The foliage is an attractive, deep green with a mounding habit. It is an excellent choice for adding texture and color to the garden.',
            'This plant is low-maintenance and easy to care for. It prefers full sun and well-drained soil, and is drought tolerant once established. It is also deer resistant, making it a great choice for gardens in areas with heavy deer populations.',
            'This plant is a great choice for edging beds, walkways, and containers. It is also a great cut flower and can be used in floral arrangements. It is a great addition to any garden for its long season of bloom and its low-maintenance care requirements.'
        ],
        lifecycle: {
            foliage: [0, 1, 1, 1],
            flowers: [0, 1, 1, 0]
        },
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
                label: 'Flowers',
                value: 'Violet-blue'
            },
            {
                label: 'Foliage',
                value: 'Grey-green'
            }
        ],
        collections: [
        ],
        'main-image': '',
        blurhash: 'LGA0^EsG4,NDR-kBt5ax9Wj:-txw'
    },

    {
        slug: 'echinacea-pallida',
        common: 'Coneflower',
        genus: 'Echinacea',
        species: 'pallida',
        culticvar: '\‘Hulda Dancer\’',
        description: 'has spiky seedheads. Droopy pale pink petals.',
        collections: [
        ],
        body: [
            'This perennial herb is native to the United States and is found in the Great Plains and Midwest. It is a member of the daisy family and has a slender stem that can reach a height of up to 1 meter. The leaves are lance-shaped and have a silvery-green color. The flowers are pink or white and measure up to 5 centimeters in diameter. They have a cone-shaped center surrounded by petals.',

            'This plant is drought tolerant and prefers dry, sandy soils. It is a hardy plant and can survive in temperatures as low as -20°C. It is a popular choice for gardens and is often used as a border plant. The flowers attract butterflies and other pollinators, making it a great addition to a wildlife garden.',

            'The plant is easy to grow from seed and has a long blooming period. It can be propagated by division or by root cuttings. It is also known for its medicinal properties and is used to make teas and tinctures. It has been used to treat a variety of ailments such as colds, flu, and allergies.'
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
                label: 'Flowers',
                value: 'Pale pink',
                description: ''
            },
            {
                label: 'Foliage',
                value: 'Pale green',
            },
            {
                label: 'Seasons',
                value: 'May-August'
            },
        ],
        'main-image': '',
        blurhash: 'L3Hy1_^m00oqD6Q:W9=}00D}^-j3'
    },

    {
        slug: 'echinacea-white-swan',
        genus: 'Echinacea',
        species: 'purpurea',
        cultivar: '\‘White Swan\’',
        common: 'Coneflower',
        description: 'has loads of flowers. Spiky seedheads and white petals.',
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
                label: 'Flowers',
                value: 'White'
            },
            {
                label: 'Foliage',
                value: 'Green'
            },
            {
                label: 'Seasons',
                value: 'June-August'
            }
        ],
        body: [
            'This perennial flower is a sight to behold. It features a white, daisy-like flower head with a yellow center. The petals are long and thin, and the leaves are lanceolate and serrated. Growing up to 30 centimeters tall, it is a beautiful addition to any garden.',
            'It is a hardy plant, able to tolerate cold temperatures and requires minimal maintenance. It is drought tolerant and prefers full sun to partial shade. It blooms from mid-summer to early fall and attracts butterflies and other pollinators.',
            'This flower is easy to propagate, either by division or by seed. It can be grown in containers or in the ground, and is an excellent choice for rock gardens. It is a great addition to any garden, providing a striking contrast to other plants.'
        ],
        collections: [],
        'main-image': '',
        blurhash: 'L8EfZraeMfMx00oMIoM{00Rj~qxu'
    },

    {
        slug: 'sedum-matrona',
        genus: 'Sedum',
        common: 'Stonecrop',
        species: null,
        cultivar: '\‘Matrona\’',
        description: 'has meaty grey-purple leaves. Faded pink flowers.',
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
                label: 'Flowers',
                value: 'Pink'
            },
            {
                label: 'Foliage',
                value: 'Grey-green'
            },
            {
                label: 'Seasons',
                value: 'May-September'
            }
        ],
        body: [
            'This succulent is a perennial, hardy in USDA zones 4-9. It forms a low-growing, spreading mound of fleshy, gray-green leaves, with a maximum height of 15 cm. The leaves are triangular-oval in shape and have a scalloped edge. In late summer, the plant produces clusters of pink flowers on tall stems. The flowers are star-shaped and have five petals.',
            'This plant thrives in full sun, with well-drained soil. It is drought tolerant and can tolerate temperatures down to -23°C. It is best grown in a rock garden, or as a ground cover in a sunny border. It is also suitable for containers.',
            'To propagate, cuttings can be taken in spring or early summer. These can be rooted in a sandy compost. Alternatively, division of the plant can be done in spring or autumn. This plant is attractive to bees, butterflies and birds, making it a great addition to any garden.'
        ],
        collections: [
            {
                slug: 'propagators',
                title: 'Propagators'
            }
        ],
        'main-image': '',
        blurhash: 'LCCiQ]}[IotPIVEeELRk5jR*,]%1'
    },

    {
        slug: 'symphyotrichum-little-carlow',
        genus: 'Symphyotrichum',
        species: null,
        cultivar: '\‘Little Carlow\’',
        common: 'Aster',
        description: 'is a hybrid of A. cordifolius and A. novi-belgii. Mounds of fine petalled violet blue flowers.',
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
                label: 'Flowers',
                value: 'Purple'
            },
            {
                label: 'Foliage',
                value: 'Green'
            },
            {
                label: 'Seasons',
                value: 'July-October'
            }
        ],
        body: [
            'This perennial aster is native to the southeastern United States. It grows to a height of up to 60 cm and produces small, white flowers. The leaves are lance-shaped, with serrated edges, and are arranged alternately along the stem. The flowers are arranged in a flat-topped cluster, and each individual flower has five petals.',

            'The plant blooms in late summer and early fall, and the flowers attract a variety of pollinators, including bees, butterflies, and moths. It prefers moist, well-drained soils in full sun to partial shade. It is tolerant of a wide range of soils and can be grown in USDA hardiness zones 5 to 9.',

            'This aster is a great choice for adding texture and color to the garden. It is easy to grow and maintain, and it will spread slowly by self-seeding. It is a good choice for naturalizing in meadows and woodland edges, and it can also be used in perennial borders and as a cut flower.'
        ],
        collections: [
        ],
        'main-image': '',
        blurhash: 'L3ECU-rz9D0dqs~p9ENgw.9ERrEJ'
    },
    {
        slug: 'leucanthemum-vulgare',
        genus: 'Leucanthemum',
        species: 'vulgare',
        cultivar: null,
        common: 'Oxeye daisy',
        description: 'has delicate white petals surrounding a yellow center. Pinnate foliage. Spreads using rhizomes.',
        meta: [
            {
                label: 'Spread',
                value: '50 cm'
            },
            {
                label: 'Height',
                value: '75 cm'
            },
            {
                label: 'Flowers',
                value: 'White-Yellow'
            },
            {
                label: 'Foliage',
                value: 'Green'
            },
            {
                label: 'Seasons',
                value: 'May-June'
            }
        ],
        body: [],
        collections: [
            {
                slug: 'native',
                title: 'Native'
            },
            {
                slug: 'propagators',
                title: 'Propagators'
            }
        ],
        'main-image': '',
        blurhash: 'L9FiPo-;9F~qn~_3WBRj4.t7%LM{'
    },

    {
        slug: 'erigeron-karvinskianus',
        genus: 'Erigeron',
        species: 'karvinskianus',
        cultivar: null,
        common: 'Mexican fleabane',
        description: 'has delicate white petals surrounding a yellow center. Pinnate foliage. Spreads using rhizomes.',
        meta: [
            {
                label: 'Spread',
                value: '50 cm'
            },
            {
                label: 'Height',
                value: '75 cm'
            },
            {
                label: 'Flowers',
                value: 'White-Yellow'
            },
            {
                label: 'Foliage',
                value: 'Green'
            },
            {
                label: 'Seasons',
                value: 'May-June'
            }
        ],
        body: [],
        collections: [
            {
                slug: 'edging',
                title: 'Edging'
            },
            {
                slug: 'propagators',
                title: 'Propagators'
            }
        ],
        'main-image': '',
        blurhash: 'LACsQ#=}oyD%~B-:kCoyRQWUxtog'
    },
    {
        slug: 'liatris-spicata',
        genus: 'Liatris',
        species: 'spicata',
        cultivar: null,
        common: 'Prairie feather',
        description: 'has spires of pink flowers. Narrow leaves flank the stem.',
        meta: [
            {
                label: 'Spread',
                value: '20 cm'
            },
            {
                label: 'Height',
                value: '60 cm'
            },
            {
                label: 'Flowers',
                value: 'Magenta'
            },
            {
                label: 'Foliage',
                value: 'Green'
            },
            {
                label: 'Seasons',
                value: 'July-August'
            }
        ],
        body: [],
        collections: [],
        'main-image': '',
        blurhash: 'L5G8v44py3%.0JE9_Ktu2hMDVxM+',
        'additional-images': ['liatris-spicata-001']
    },
    {
        slug: 'phlomis-russeliana',
        genus: 'Phlomis',
        species: 'russeliana',
        cultivar: null,
        common: 'Turkish sage',
        description: 'has pale yellow, tiered flowers along a vertical stem. Silver furry leaves. Impressive winter skeleton.',
        meta: [
            {
                label: 'Spread',
                value: '30 cm'
            },
            {
                label: 'Height',
                value: '80 cm'
            },
            {
                label: 'Flowers',
                value: 'Yellow'
            },
            {
                label: 'Foliage',
                value: 'Silver green'
            },
            {
                label: 'Seasons',
                value: 'May-September'
            }
        ],
        body: [],
        collections: [
            {
                slug: 'skeletals',
                title: 'Skeletals'
            },
            {
                slug: 'propagators',
                title: 'Propagators'
            }
        ],
        'main-image': '',
        blurhash: 'L4F~Ag?*0kAovj=K0P%J02?XM|11'
    },
    {
        slug: 'eupatorium-maculatum',
        genus: 'Eupatorium',
        species: 'maculatum',
        cultivar: '\‘Riegenschirm\’',
        common: 'Joe pye weed',
        description: 'is a very tall plant. Wide pink flowers grow on stems up to 2 meters in length. Forms dense clumps.',
        meta: [
            {
                label: 'Spread',
                value: '80 cm'
            },
            {
                label: 'Height',
                value: '200 cm'
            },
            {
                label: 'Flowers',
                value: 'Pink'
            },
            {
                label: 'Foliage',
                value: 'Dark green'
            },
            {
                label: 'Seasons',
                value: 'May-September'
            }
        ],
        body: [],
        collections: [
            {
                slug: 'umbellifers',
                title: 'Umbellifers'
            }
        ],
        'main-image': '',
        blurhash: 'L2EC8v051;@U0100G4~W0]+R}v~V'
    },
    {
        slug: 'angelica-gigas',
        genus: 'Angelica',
        species: 'gigas',
        cultivar: null,
        common: 'Giant angelica',
        description: 'is a very tall plant. Wide pink flowers grow on stems up to 2 meters in length. Forms dense clumps.',
        meta: [
            {
                label: 'Spread',
                value: '80 cm'
            },
            {
                label: 'Height',
                value: '200 cm'
            },
            {
                label: 'Flowers',
                value: 'Pink'
            },
            {
                label: 'Foliage',
                value: 'Dark green'
            },
            {
                label: 'Seasons',
                value: 'May-September'
            }
        ],
        body: [],
        collections: [
            {
                slug: 'umbellifers',
                title: 'Umbellifers'
            }
        ],
        'main-image': '',
        'image-credit': 'Paul van de Velde',
        blurhash: 'L67US600.7s.~X4nxvoM?I4o-;oc'
    },
    {
        slug: 'verbena-hastata',
        genus: 'Verbena',
        species: 'hastata',
        cultivar: null,
        common: 'Blue vervain',
        description: 'is a very tall plant. Wide pink flowers grow on stems up to 2 meters in length. Forms dense clumps.',
        meta: [
            {
                label: 'Spread',
                value: '80 cm'
            },
            {
                label: 'Height',
                value: '200 cm'
            },
            {
                label: 'Flowers',
                value: 'Pink'
            },
            {
                label: 'Foliage',
                value: 'Dark green'
            },
            {
                label: 'Seasons',
                value: 'May-September'
            }
        ],
        body: [],
        collections: [
            {
                slug: 'selfseeders',
                title: 'Selfseeders'
            }
        ],
        'main-image': '',
        blurhash: 'L4GI.KD|5$DODI059%IDP=9btv0J'
    },
    {
        slug: 'gaura-lindheimeri',
        genus: 'Gaura',
        species: 'lindheimeri',
        cultivar: '\‘Siskyou Pink\’',
        common: 'Beeblossom',
        description: 'has butterfly-like flowers on thin stalks. Shortlived perennial.',
        meta: [
            {
                label: 'Spread',
                value: '30 cm'
            },
            {
                label: 'Height',
                value: '120 cm'
            },
            {
                label: 'Flowers',
                value: 'Pink'
            },
            {
                label: 'Foliage',
                value: 'Dark green'
            },
            {
                label: 'Seasons',
                value: 'May-September'
            }
        ],
        body: [],
        collections: [],
        'main-image': '',
        'image-credit': 'Agnes Monkelbaan',
        blurhash: 'L6CF-p=~s+%%tR-rx^Na00oy-?ic'
    },
    {
        slug: 'verbena-bonariensis',
        genus: 'Verbena',
        species: 'bonariensis',
        cultivar: null,
        common: 'Argentinian vervain',
        description: 'is a very tall plant. Wide pink flowers grow on stems up to 2 meters in length. Forms dense clumps.',
        meta: [
            {
                label: 'Spread',
                value: '80 cm'
            },
            {
                label: 'Height',
                value: '200 cm'
            },
            {
                label: 'Flowers',
                value: 'Pink'
            },
            {
                label: 'Foliage',
                value: 'Dark green'
            },
            {
                label: 'Seasons',
                value: 'May-September'
            }
        ],
        body: [],
        collections: [
            {
                slug: 'selfseeders',
                title: 'Selfseeders'
            }
        ],
        'main-image': '',
        blurhash: 'LDEMdeo#Imi+?1%et6R*0JR7afR~'
    },
    {
        slug: 'foeniculum-vulgare',
        genus: 'Foeniculum',
        species: 'vulgare',
        cultivar: null,
        common: 'Fennel',
        description: 'is a very tall plant. Wide pink flowers grow on stems up to 2 meters in length. Forms dense clumps.',
        meta: [
            {
                label: 'Spread',
                value: '80 cm'
            },
            {
                label: 'Height',
                value: '200 cm'
            },
            {
                label: 'Flowers',
                value: 'Pink'
            },
            {
                label: 'Foliage',
                value: 'Dark green'
            },
            {
                label: 'Seasons',
                value: 'May-September'
            }
        ],
        body: [],
        collections: [
            {
                slug: 'umbellifers',
                title: 'Umbellifers'
            }
        ],
        'main-image': '',
        blurhash: 'L4A^{W8~04_KR5bYIXx=4YIBtQIX'
    },
    {
        slug: 'rudbeckia-fulgida',
        genus: 'Rudbeckia',
        species: 'fulgida',
        cultivar: null,
        common: 'Coneflower',
        description: 'has many black seedheads with bright yellow petals. Spreads quickly through rhizomes.',
        meta: [
            {
                label: 'Spread',
                value: '30 cm'
            },
            {
                label: 'Height',
                value: '60 cm'
            },
            {
                label: 'Flowers',
                value: 'Yellow'
            },
            {
                label: 'Foliage',
                value: 'Dark green'
            }
        ],
        body: [],
        collections: [
            {
                slug: 'propagators',
                title: 'Propagators'
            }
        ],
        'main-image': '',
        'additional-images': ['rudbeckia-fulgida-seedheads'],
        blurhash: 'LMD9hAtSbcs+~Tx]WZRkI_-:t7Rk'
    },
];

const grasses = [
    // *Grasses:*
    // • Deschampsia cespitosa
    // • Pennisetum (choose cultivar)
    // • Sporobolus heterolepis
    {
        slug: 'nasella-tenuissima',
        genus: 'Nasella',
        species: 'tenuissima',
        cultivar: '\‘Pony tails\’',
        common: 'Mexican feathergrass',
        description: 'Whispy tufts. Vigorous selfseeder.',
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
                label: 'Foliage',
                value: 'Green-Gold'
            },
            {
                label: 'Seasons',
                value: '5-8'
            }
        ],
        collections: [],
        body: [],
        'main-image': '',
        blurhash: 'LCA^m?NEM|j^?dahITV[noRjobWA'
    },
    {
        slug: 'deschampsia-cespitosa',
        genus: 'Deschampsia',
        species: 'cespistosa',
        cultivar: '\‘Goldtau\’',
        common: 'Tufted hairgrass',
        description: 'Emergent tufts. Relatively inconspicuous foliage.',
        meta: [
            {
                label: 'Spread',
                value: '40 cm'
            },
            {
                label: 'Height',
                value: '150 cm'
            },
            {
                label: 'Foliage',
                value: 'Gold'
            },
            {
                label: 'Seasons',
                value: '5-8'
            }
        ],
        collections: [],
        body: [],
        'main-image': '',
        blurhash: 'LCCjI0-;XAoz~D-;ohxb07x]-:xu'
    }
]

function getPlants(limit = 50, filter, sortBy = 'slug') {
    let items = [ ...herbaceousPerennials, ...bulbs, ...grasses ];

    items.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
            return -1;
        }

        if (a[sortBy] > b[sortBy]) {
            return 1;
        }

        return 0;
    });

    return items.slice(0, limit);
}

export { herbaceousPerennials as plants, getPlants };
