import { Asterisk } from '@carbon/icons-react';

import styles from './Loader.module.css';

export default function Loader({ background }) {
    return (
        <div className={styles.loader} data-background={background}>
            <Asterisk className={styles.loaderIcon} size='54' />
        </div>
    );
}