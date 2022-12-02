import Content from '../../components/Content';
import Link from 'next/link';

import { plants } from '../../content/plants';

import GridLayout from '../../layouts/grid';
import HeaderSpacer from '../../components/HeaderSpacer';

import { formatPlantName } from '../../helpers/formatPlantName';

const blocks = [
    {
        _uid: '1',
        component: 'list',
        attributes: {
            gridArea: '2/3',
            items: plants.map(
                plant => {
                    return {
                        title: formatPlantName(plant),
                        description: null,
                        link: `/plants/${plant.slug}`
                    }
                }
            )
        }
    }
];

export default function Plants() {
    return (
        <GridLayout>
            <HeaderSpacer />

            <Content blocks={blocks} />
        </GridLayout>
    )
}
