import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';

import { DelayAnimation } from './types';


export default function FadeIn({ children, delay = 0, duration = 0.3, ...props }: DelayAnimation) {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    const variants: Variants = {
        visible: (i: number = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * delay,
                duration: duration,
            },
        }),
        hidden: {
            opacity: 0,
            y: 20,
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


