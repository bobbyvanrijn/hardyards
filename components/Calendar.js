import styles from './Calendar.module.css';
import GridLayout from 'layouts/grid';

export default function Calendar(props) {
    function getStart(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > 0) {
                return i;
            }
        }
    }

    function getEnd(array) {
        for (let i = array.length; i > 0; i--) {
            if (array[i] > 0) {
                return i;
            }
        }
    }

    return (
        <>
        { props.lifecycle !== undefined &&
            <GridLayout>
                <div className='trim-both' grid-x='1a'>
                    Seasonal interest
                </div>
                <div
                    className={styles.calendar}
                    grid-y='1a'
                    grid-x='1b/3b'
                >
                    <div className={`${styles.calendar__row} ${styles['calendar__row--header']}`}>
                        <div className='trim-both trim-both--secondary'>Spring</div>
                        <div className='trim-both trim-both--secondary'>Summer</div>
                        <div className='trim-both trim-both--secondary'>Fall</div>
                        <div className='trim-both trim-both--secondary'>Winter</div>
                    </div>
                    <div className={styles.calendar__row}>
                        <div
                            className={`${styles.calendar__indicator} trim-both trim-both--secondary`}
                            style={{
                                gridColumnStart: getStart(props.lifecycle?.flowers) + 1,
                                gridColumnEnd: getEnd(props.lifecycle?.flowers) + 2
                            }}
                        >
                            Flowers
                        </div>
                    </div>
                    <div className={styles.calendar__row}>
                        <div
                            className={`${styles.calendar__indicator} trim-both trim-both--secondary`}
                            style={{
                                gridColumnStart: getStart(props.lifecycle?.foliage) + 1,
                                gridColumnEnd: getEnd(props.lifecycle?.foliage) + 2
                            }}
                        >
                            Foliage
                        </div>
                    </div>
                </div>
            </GridLayout> 
        }
        </>
    );
}