import styles from './Grid.module.css';

export default function Grid(props) {
    function Component() {
        if (props.element) {
            switch(props.element) {
                case 'ul':
                    return (
                        <ul 
                            className={ styles.grid }
                            data-columns={ props.columns }
                            data-columns-sm={ props.columnsSm }
                            aria-describedby={ props.ariaDescribedby }
                        >
                                { props.children }
                        </ul>
                    );
                default:
                    return (
                        <div
                            className={ styles.grid }
                            data-columns={ props.columns }
                            data-columns-sm={ props.columnsSm }
                            aria-describedby={ props.ariaDescribedby }
                        >
                            { props.children }
                        </div>
                    );
            }
        } else {
            return <div>{ props.children }</div>;
        }
    };

    return (
        <Component>
            { props.children }
        </Component>
    );
}