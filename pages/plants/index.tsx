import Content from '../../components/Content';
import Link from 'next/link';

import { plants } from '../../content/plants';

const blocks = [
    {
        _uid: '1',
        component: 'list',
        attributes: {
            title: 'Plants',
            items: plants.map(
                plant => {
                    return {
                        title: `${plant.genus} ${plant.species} ${plant.cultivar}`,
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
