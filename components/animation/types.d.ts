import { ReactNode } from 'react';
import { HTMLMotionProps } from 'framer-motion';

interface DelayAnimation extends HTMLMotionProps<"div"> {
    delay?: number,
    duration?: number,
    children: ReactNode
}