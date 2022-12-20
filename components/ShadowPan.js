import { useState } from 'react';
import { useEventListener, useIsClient, useIsomorphicLayoutEffect } from 'usehooks-ts';

import { motion } from 'framer-motion';
import styles from './ShadowPan.module.css';

export default function ShadowPan(props) {
    const [activeElement, setActiveElement] = useState(null);
    const [elementDimensions, setElementDimensions] = useState([]);

    const keys = Object.keys(props.children);

    const dimensionHandler = () => {
        let dimensions = [];
        for (let i = 0; i < keys.length; i++) {
            const id = keys[i];
            const element = document.getElementById(id);

            const width = element.offsetWidth;
            const height = element.offsetHeight;
            const x = element.offsetLeft;
            const y = element.offsetTop;

            dimensions[i] = {x, y, width, height}
        }

        setElementDimensions(dimensions);
    }

    useEventListener('resize', dimensionHandler)

    useIsomorphicLayoutEffect(() => {
        dimensionHandler();
    }, []);

    return <>
        {
            !!props.children && props.children.map((item, index) => {
                return (
                    <div
                        id={index}
                        key={index}
                        onClick={() => setActiveElement(index)}
                    >
                        {item}
                    </div>
                );
            })
        }

        <motion.div
            layout
            className={styles['shadow-pan__panner']}
            style={{
                left: elementDimensions[activeElement]?.x,
                // top: elementDimensions[activeElement]?.y,
                width: elementDimensions[activeElement]?.width,
                // height: elementDimensions[activeElement]?.height,
            }}
        />
    </>
}