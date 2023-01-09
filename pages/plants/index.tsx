import { useState } from 'react';

import Content from 'components/Content';
import Directory from 'components/Directory';
import { Toggle } from 'components';
import { getPlants } from 'content/plants';
import GridLayout from 'layouts/grid';
import { formatPlantName } from 'helpers/formatPlantName';

function filterByFirstLetter(target: any, query: string) {
    const regex = new RegExp(query);

    return target.filter(
        (item: { genus: string }) => {
            return regex.test(item.genus);
        }
    );
}

const categories = ['A-F', 'G-L', 'M-R', 'S-Z'];

export function getStaticProps() {
    const plants = getPlants();
    return {
        props: {
            plants,
            categories: categories.map((category, index) => {
                return {
                    key: category,
                    items: filterByFirstLetter(getPlants(), `^[${category}]`)
                    .map(
                        (plant: any) => {
                            return {
                                title: formatPlantName(plant),
                                link: `/plants/${plant.slug}`
                            }
                        }
                    )
                }
            })
        }
    }
}

export default function Plants(props: any) {
    const [layout, setLayout] = useState('list');

    const blocks: { _uid: string; component: string; attributes: { 'grid-x': string; items?: any; headingLevel?: number;}; children?: JSX.Element[]; }[] = [];

    props.categories.map((category: any, index: any) => {
        blocks.push(
            {
                _uid: `title-${category.key}`,
                component: 'text',
                attributes: {
                    'grid-x': '1',
                },
                children: [
                    <h3 key={`heading-${category.key}`}>{category.key}</h3>
                ]
            },
            {
                _uid: `list-${category}`,
                component: 'list',
                attributes: {
                    'grid-x': '2/3',
                    items: category.items
                }
            }
        )
    });

    const gallery = [
        {
            _uid: 'foo',
            component: 'gallery',
            attributes: {
                'grid-x': '1/3',
                items: props.plants
            }
        }
    ];

    return (
        <>
            <GridLayout>
                <div
                    className='page-title'
                    grid-x='1   '
                    grid-y='1a'
                    grid-y-sm='1a'
                >
                    <h1 className='uppercase trim-both trim-both--secondary'>
                        Plants
                    </h1>

                    <h2 className='trim-both trim-both--secondary'>
                        Hard Yards
                    </h2>
                </div>
                <Toggle
                    grid-x='2a'
                    active={layout}
                    items={[
                        {
                            key: 'list',
                            label: 'List',
                            fn: () => setLayout('list')
                        },
                        {
                            key: 'grid',
                            label: 'Grid',
                            fn: () => setLayout('grid')
                        }
                    ]}
                />
            </GridLayout>

            { layout === 'list' &&
                <Directory directory-title='Plants' directory-categories={props.categories} />
            }
            { layout === 'grid' &&
                <GridLayout grid-enforce-row='true'>
                    <Content blocks={gallery} />
                </GridLayout>
            }
        </>
    )
}
