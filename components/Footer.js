import { Navigation } from 'components';
import GridLayout from 'layouts/grid';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <GridLayout>
                <div grid-x='1/3'><h3>Hard Yards</h3></div>
                <div grid-x='1a' grid-x-sm='1'>
                    Links
                    <Navigation />
                </div>
                <>Test</>
            </GridLayout>
        </footer>
    );
}
