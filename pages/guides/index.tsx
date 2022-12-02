import Content from '../../components/Content';
import Link from 'next/link';

import { plants } from '../../content/plants';

import { guides } from '../../content/guides';

import GridLayout from '../../layouts/grid';
import HeaderSpacer from '../../components/HeaderSpacer';

const blocks = [
    {
        _uid: '1',
        component: 'list',
        attributes: {
            gridArea: '2/3',
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
        <GridLayout>
            <HeaderSpacer />

            <Content blocks={blocks} />
        </GridLayout>
    )
}