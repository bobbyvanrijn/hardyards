import { shuffle } from 'lodash';

const plants = [
    // TODO: Add `lifecycle` prop (annual, biennial, perennial)
    // TODO: Add plants ↓
    // - Phlomis russeliana (cat: PROPAGATORS, SKELETALS)
    // - Eupatorium maculatum 'riegenschirm' (cat: UMBELLIFERS)
    // - Angelica gigas (annual, cat: UMBELLIFERS), picture credit: Paul van de Velde
    // - 
    // - Verbena bonariensis (cat: SELFSEEDERS)
    // - Verbena hastata (cat: SELFSEEDER)
    // - Agastache 'black adder' / 'blue fortune'
    // - Veronica(strum)
    // - Nepeta faassenii 'Walker's Low' (cat: LUMPY GUYS)
    // - Rudbeckia (cat: PROPAGATORS, SKELETALS)
    // - Actaea 'Chocoholic'
    // - Gaura lindheimerii 'Whirling butterflies' (biennial, cat: FILLERS)
    // 
    // *Grasses:*
    // • Nasella tenuissima (cat: SELFSEEDERS)
    // • Deschampsia cespitosa
    // • Pennisetum (choose cultivar)
    // • Sporobolus heterolepis
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

    {
        slug: 'alchemilla-mollis',
        genus: 'Alchemilla',
        species: 'mollis',
        cultivar: null,
        common: 'Lady\'s mantle',
        description: 'Velvet leaves that catch droplets of water. Bunches of green-yellow flowers.',
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
        'main-image': '',
        blurhash: 'L6An^-M#x@e@?;IDICy9.5RPt6Mz'
    },

    {
        slug: 'geranium-rozanne',
        common: 'Cranesbill',
        genus: 'Geranium',
        species: null,
        cultivar: '\‘Rozanne\’',
        description: 'Hybrid of Geranium himalayense and Geranium wallichianum \‘Buxton\'s variety\’.',
        body: [
            'This perennial is a standout in the garden. Its deep blue-purple, saucer-shaped blooms with white eyes appear in late spring and last until fall, creating a stunning display of color. The foliage is an attractive, deep green with a mounding habit. It is an excellent choice for adding texture and color to the garden.',
            'This plant is low-maintenance and easy to care for. It prefers full sun and well-drained soil, and is drought tolerant once established. It is also deer resistant, making it a great choice for gardens in areas with heavy deer populations.',
            'This plant is a great choice for edging beds, walkways, and containers. It is also a great cut flower and can be used in floral arrangements. It is a great addition to any garden for its long season of bloom and its low-maintenance care requirements.'
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
                label: 'Flowers',
                value: 'Violet-blue'
            },
            {
                label: 'Foliage',
                value: 'Grey-green'
            },
            {
                label: 'Seasons',
                value: '5-10'
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
        description: 'Spiky seedheads. Droopy pale pink petals.',
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
        blurhash: 'LJE{a;rJ9?Wn~qVa%3ozY3Mx,0SK'
    },

    {
        slug: 'echinacea-white-swan',
        genus: 'Echinacea',
        species: 'purpurea',
        cultivar: '\‘White Swan\’',
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
        blurhash: 'L3ECU-rz9D0dqs~p9ENgw.9ERrEJ'
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
        description: 'Delicate white petals surrounding a yellow center. Pinnate foliage. Spreads using rhizomes.',
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
        blurhash: 'L3ECU-rz9D0dqs~p9ENgw.9ERrEJ'
    },

    {
        slug: 'erigeron-karvinskianus',
        genus: 'Erigeron',
        species: 'karvinskianus',
        cultivar: null,
        common: 'Mexican fleabane',
        description: 'Delicate white petals surrounding a yellow center. Pinnate foliage. Spreads using rhizomes.',
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
        blurhash: 'LDCZ^8ae00x[I:WVe:oy00V]~qWB'
    },
    {
        slug: 'phlomis-russeliana',
        genus: 'Phlomis',
        species: 'russeliana',
        cultivar: null,
        common: 'Turkish sage',
        description: 'Pale yellow, tiered flowers along a vertical stem. Silver furry leaves. Impressive winter skeleton.',
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
        description: 'Very tall plant. Wide pink flowers grow on stems up to 2 meters in length. Forms dense clumps.',
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
        description: 'Very tall plant. Wide pink flowers grow on stems up to 2 meters in length. Forms dense clumps.',
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
        blurhash: 'L67US600.7s.~X4nxvoM?I4o-;oc'
    },
    {
        slug: 'verbena-hastata',
        genus: 'Verbena',
        species: 'hastata',
        cultivar: null,
        common: 'Blue vervain',
        description: 'Very tall plant. Wide pink flowers grow on stems up to 2 meters in length. Forms dense clumps.',
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
        slug: 'verbena-bonariensis',
        genus: 'Verbena',
        species: 'bonariensis',
        cultivar: null,
        common: 'Argentinian vervain',
        description: 'Very tall plant. Wide pink flowers grow on stems up to 2 meters in length. Forms dense clumps.',
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
        description: 'Very tall plant. Wide pink flowers grow on stems up to 2 meters in length. Forms dense clumps.',
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
];

function getPlants(limit = 50, shuffleResults = false) {
    let items = plants;

    if (shuffleResults) {
        items = shuffle(plants);
    }

    return items.slice(0, limit);
}

export { plants, getPlants };
