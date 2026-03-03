import { useRef, useLayoutEffect, useState, type RefObject } from 'react';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from 'motion/react';
import clsx from 'clsx';
import styles from './problem-marquee.module.css';

function useElementWidth(ref: RefObject<HTMLDivElement | null>) {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        function updateWidth() {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        }
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, [ref]);

    return width;
}

interface ProblemMarqueeProps {
    children: React.ReactNode;
    baseVelocity?: number;
    className?: string;
    damping?: number;
    stiffness?: number;
    numCopies?: number;
    velocityMapping?: { input: number[]; output: number[] };
}

export function ProblemMarquee({
    children,
    baseVelocity = 100,
    className = '',
    damping = 50,
    stiffness = 400,
    numCopies = 4,
    velocityMapping = { input: [0, 1000], output: [0, 15] }
}: ProblemMarqueeProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping,
        stiffness
    });
    const velocityFactor = useTransform(
        smoothVelocity,
        velocityMapping.input,
        velocityMapping.output,
        { clamp: false }
    );

    const copyRef = useRef<HTMLDivElement>(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min: number, max: number, v: number) {
        const range = max - min;
        const mod = (((v - min) % range) + range) % range;
        return mod + min;
    }

    const x = useTransform(baseX, v => {
        if (copyWidth === 0) return '0px';
        return `${wrap(-copyWidth, 0, v)}px`;
    });

    const hoverFactor = useRef(1);
    const targetHoverFactor = useRef(1);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        // Smoothly interpolate hover factor
        const diff = targetHoverFactor.current - hoverFactor.current;
        if (Math.abs(diff) > 0.001) {
            hoverFactor.current += diff * 0.1;
        } else {
            hoverFactor.current = targetHoverFactor.current;
        }

        let moveBy = directionFactor.current * baseVelocity * hoverFactor.current * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    const copies = [];
    for (let i = 0; i < numCopies; i++) {
        copies.push(
            <div className={styles.copy} key={i} ref={i === 0 ? copyRef : null}>
                {children}
            </div>
        );
    }

    return (
        <div
            className={clsx(styles.marquee, className)}
            onMouseEnter={() => targetHoverFactor.current = 2.5}
            onMouseLeave={() => targetHoverFactor.current = 1}
        >
            <motion.div className={styles.scroller} style={{ x }}>
                {copies}
            </motion.div>
        </div>
    );
}
