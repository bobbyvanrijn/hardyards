import Content from '../../components/Content';
import Link from 'next/link';

import { plants } from '../../content/plants';

import { guides } from '../../content/guides';

const blocks = [
    {
        _uid: '1',
        component: 'list',
        attributes: {
            title: 'Guides',
            items: guides.map(
                guide => {
                    return {
                        title: guide.title,
                        description: null,
                        link: `/guides/${guide.slug}`
                    }
                }
            )
        }
    }
];

export default function Guides() {
    return (
        <div className='container'>
            <Content blocks={blocks} />
        </div>
    )
}