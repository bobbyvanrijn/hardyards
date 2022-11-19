import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
    out: {
        opacity: 0,
        transition: {
            duration: 0.125
        }
    },
    in: {
        opacity: 1,
        transition: {
            duration: 0.125,
        }
    }
};

const MenuTransition = ({ menuActive, children }) => {
    const { asPath } = useRouter();
    const shouldReduceMotion = useReducedMotion();

    return (
		<div className="effect-1">
            <AnimatePresence
                initial={false}
                exitBeforeEnter
            >
                { menuActive && (
                    <motion.div
                        key='modal'
                        variants={!shouldReduceMotion ? variants : null}
                        initial="out"
                        animate="in"
                        exit="out"
                    >
                        {children}
                    </motion.div>
                ) };
            </AnimatePresence>
        </div>
	);
};

export default MenuTransition;