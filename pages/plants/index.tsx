import Content from 'components/Content';
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

export default function Plants() {
    const blocks: { _uid: string; component: string; attributes: { 'grid-x': string; items?: any; headingLevel?: number;}; children?: JSX.Element[]; }[] = [];

    categories.map((category, index) => {
        blocks.push(
            {
                _uid: `title-${category}`,
                component: 'text',
                attributes: {
                    'grid-x': '1',
                },
                children: [
                    <h2 key={`heading-${category}`}>{category}</h2>
                ]
            },
            {
                _uid: `list-${category}`,
                component: 'list',
                attributes: {
                    'grid-x': '2/3',
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
            }
        )
    });

    return (
        <GridLayout>
            <Content blocks={blocks} />
        </GridLayout>
    )
}
