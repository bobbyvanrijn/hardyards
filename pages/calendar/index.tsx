import { differenceInCalendarDays, add } from 'date-fns';

import GridLayout from 'layouts/grid';
import Content from '../../components/Content';

function countdown(date: number | string) {
    let tempDate = date;

    if (differenceInCalendarDays(new Date(date), new Date()) < 0) {
        tempDate = add(new Date(date), {'years': 1}).toDateString();
    }

    return differenceInCalendarDays(new Date(tempDate), new Date());
}

const blocks = [
    {
        _uid: '4397c42f-f205-49cb-a875-1cac86f512c1',
        component: 'text',
        attributes: {
            'grid-x': '1',
            'grid-y': '1b'
        },
        children: [
            <h1
                key='title'
                className='display-second trim-both'
                grid-x='1/3'
                grid-y='1/2'
            >
                Calendar
            </h1>
        ]
    },
    {
        _uid: '4397c42f-f205-49cb-a875-1cac86f512ca',
        component: 'text',
        attributes: {
            'grid-x': '2/3',
            'grid-y': '1b'
        },
        children: [
            <p key='winter'>{ countdown('2022-12-21T00:00:00') } days until winter solstice</p>,
            <p key='spring'>{ countdown('2023-03-20T00:00:00') } days until vernal equinox</p>,
            <p key='summer'>{ countdown('2023-06-21T00:00:00') } days until summer solstice</p>,
            <p key='autumn'>{ countdown('2023-09-23T00:00:00') } days until vernal equinox</p>,
        ]
    },
];

export default function Calendar() {
    return (
        <GridLayout>
            <Content blocks={blocks} />
        </GridLayout>
    )
}
