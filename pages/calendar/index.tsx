import { differenceInCalendarDays } from 'date-fns';
import Content from '../../components/Content';

function countdown(date: number | string) {
    console.log(date);
    return differenceInCalendarDays(new Date(date), new Date());
}

const blocks = [
    {
        _uid: '4397c42f-f205-49cb-a875-1cac86f512ca',
        component: 'lead',
        children: [
            <>{ countdown('2023-03-20T00:00:00') } days until spring</>
        ]
    }
];

export default function Calendar() {
    return (
        <div className='container'>
            <Content blocks={blocks} />
        </div>
    )
}
