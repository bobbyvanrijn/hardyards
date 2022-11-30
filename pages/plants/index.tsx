import Content from '../../components/Content';
import Link from 'next/link';

import { plants } from '../../content/plants';
import { formatPlantName } from '../../helpers/formatPlantName';

const blocks = [
    {
        _uid: '1',
        component: 'list',
        attributes: {
            title: 'Plants',
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
        <div className='container'>
            <Content blocks={blocks} />
        </div>
    )
}
