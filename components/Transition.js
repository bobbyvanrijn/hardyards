import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
    out: {
        opacity: 0,
        y: 15,
        transition: {
            duration: 0.125
        }
    },
    in: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.125,
        }
    }
};

const Transition = ({ children }) => {
    const { asPath } = useRouter();
    const shouldReduceMotion = useReducedMotion();

    return (
		<div className="effect-1">
            <AnimatePresence
                initial={false}
                exitBeforeEnter
            >
                <motion.div
                    key={asPath}
                    variants={!shouldReduceMotion ? variants : null}
                    animate="in"
                    initial="out"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
	);
};

export default Transition;