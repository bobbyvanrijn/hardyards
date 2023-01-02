import Content from 'components/Content';
import { plants } from 'content/plants';
import GridLayout from 'layouts/grid';
import { formatPlantName } from 'helpers/formatPlantName';
import {uniqBy} from 'lodash';
function getCollections() {
    const allCollections = plants.flatMap(
        (plant) => {
            return plant.collections;
        }
    );

    return uniqBy(allCollections, 'slug');
}

function filterByCollection(target: any, collection: string) {
    return target.filter(
        (item: { collections: any }) => {
            const tested = item.collections.filter(
                (nestedItem: any) => {
                    // console.log(nestedItem?.slug === collection);
                    return nestedItem?.slug === collection;
                }
            );

            return tested.length;
        }
    );
}

const collections = getCollections();

export default function Plants() {
    const categoryBlocks = () => {
        const blocks: { _uid: number; component: string; attributes: { 'grid-x': string; items?: any; headingLevel?: number;}; children?: JSX.Element[]; }[] = [];
        collections.map((collection, index) => {
            blocks.push(
                {
                    _uid: index,
                    component: 'title',
                    attributes: {
                        'grid-x': '1',
                        headingLevel: 2
                    },
                    children: [
                        <>{collection.title}</>
                    ]
                },
                {
                    _uid: index * 1000,
                    component: 'carousel',
                    attributes: {
                        'grid-x': '2/3',
                        items: filterByCollection(plants, collection.slug)
                    }
                }
            )
        });
        return blocks;
    }

    return (
        <GridLayout>
            <div
                className='page-title'
                grid-x='1/3'
                grid-y='1/2'
            >
                <h1
                    className='uppercase trim-both trim-both--secondary'
                >
                    Collections
                </h1>
            </div>

            <Content blocks={categoryBlocks()} />
        </GridLayout>
    )
}
