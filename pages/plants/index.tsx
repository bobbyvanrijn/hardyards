import Content from '../../components/Content';
import Link from 'next/link';

import { plants } from '../../content/plants';

const blocks = [
    {
        _uid: '1',
        component: 'list',
        attributes: {
            title: 'Plants'
        },
        children: plants.map(
            plant =>
                <Link
                    href={`/plants/${plant.slug}`}
                    key={`plant-${plant.slug}`}
                >
                    { plant.genus } { plant.species } { plant.cultivar }
                </Link>
        )
    }
];

export default function Plants() {
    return (
        <div className='container'>
            <Content blocks={blocks} />
        </div>
    )
}