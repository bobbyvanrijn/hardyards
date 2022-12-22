import Content from 'components/Content';
import { plants } from 'content/plants';
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

export default function Plants() {
    const categoryBlocks = () => {
        const blocks: { _uid: number; component: string; attributes: { 'grid-x': string; items?: any; headingLevel?: number;}; children?: JSX.Element[]; }[] = [];
        categories.map((category, index) => {
            blocks.push(
                {
                    _uid: index,
                    component: 'title',
                    attributes: {
                        'grid-x': '1',
                        headingLevel: 2
                    },
                    children: [
                        <>{category}</>
                    ]
                },
                {
                    _uid: index * 1000,
                    component: 'list',
                    attributes: {
                        'grid-x': '2/3',
                        items: filterByFirstLetter(plants, `^[${category}]`)
                        .map(
                            (plant: any) => {
                                return {
                                    title: formatPlantName(plant),
                                    link: `/plants/${plant.slug}`
                                }
                            }
                        )
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
                    className='uppercase trim-both'
                >
                    Plants
                </h1>
            </div>

            <Content blocks={categoryBlocks()} />
        </GridLayout>
    )
}
