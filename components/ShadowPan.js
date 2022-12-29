import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ShadowPan.module.css';

export default function ShadowPan(props) {
    const [activeElement, setActiveElement] = useState(null);

    useEffect(() => {
        setActiveElement(props.activeChild);
    }, [props.activeChild]);


    return <>
        {
            !!props.children && props.children.map((item, index) => {
                return (
                    <div
                        className={styles['shadow-pan__wrapper']}
                        id={index}
                        key={index}
                        onClick={() => setActiveElement(index)}
                    >
                        {item}
                        { index === activeElement ?
                            <motion.div
                                className={styles['shadow-pan__panner']}
                                layoutId='panner'
                            />
                            :
                            null
                        }
                    </div>
                );
            })
        }

    </>
}