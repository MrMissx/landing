import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';

import { DelayAnimation } from './types';


export default function SlideLeft({ children, delay = 0, duration = 0.4, ...props }: DelayAnimation) {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    const variants: Variants = {
        visible: (i: number = 1) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * delay,
                duration: duration,
            },
        }),
        hidden: {
            opacity: 0,
            x: 50,
        },
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            {...props}
        >
            {children}
        </motion.div>
    )
}


