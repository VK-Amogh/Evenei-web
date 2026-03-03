import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Scale, DollarSign, BatteryLow, TrendingDown, Wrench } from 'lucide-react';

import './FlowingMenu.css';

interface MenuItem {
    link: string;
    text: string;
    icon?: string;
    image?: string;
}

interface FlowingMenuProps {
    items?: MenuItem[];
    speed?: number;
    textColor?: string;
    bgColor?: string;
    marqueeBgColor?: string;
    marqueeTextColor?: string;
    borderColor?: string;
}

interface MenuItemProps extends MenuItem {
    rowIndex: number;
    speed: number;
    textColor: string;
    marqueeBgColor: string;
    marqueeTextColor: string;
    borderColor: string;
}

const iconMap: { [key: string]: React.ReactNode } = {
    scale: <Scale size={20} />,
    dollar: <DollarSign size={20} />,
    battery: <BatteryLow size={20} />,
    trending: <TrendingDown size={20} />,
    wrench: <Wrench size={20} />
};

function FlowingMenu({
    items = [],
    speed = 15,
    textColor = '#fff',
    bgColor = '#0f0f0f',
    marqueeBgColor = '#22c55e',
    marqueeTextColor = '#000',
    borderColor = 'transparent'
}: FlowingMenuProps) {
    return (
        <div className="menu-wrap" style={{ backgroundColor: bgColor }}>
            <nav className="menu">
                {items.map((item, idx) => (
                    <MenuItemComponent
                        key={idx}
                        rowIndex={idx}
                        {...item}
                        speed={speed}
                        textColor={textColor}
                        marqueeBgColor={marqueeBgColor}
                        marqueeTextColor={marqueeTextColor}
                        borderColor={borderColor}
                    />
                ))}
            </nav>
        </div>
    );
}

function MenuItemComponent({ link, text, icon, image, rowIndex, speed, textColor, marqueeBgColor, marqueeTextColor, borderColor }: MenuItemProps) {
    const itemRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const marqueeInnerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);
    const [repetitions, setRepetitions] = useState(4);

    const animationDefaults = { duration: 0.6, ease: 'expo' };

    const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
        const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
        const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
        return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    const distMetric = (x: number, y: number, x2: number, y2: number): number => {
        const xDiff = x - x2;
        const yDiff = y - y2;
        return xDiff * xDiff + yDiff * yDiff;
    };

    useEffect(() => {
        const calculateRepetitions = () => {
            if (!marqueeInnerRef.current) return;

            const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part') as HTMLElement | null;
            if (!marqueeContent) return;

            const contentWidth = marqueeContent.offsetWidth;
            const viewportWidth = window.innerWidth;

            const needed = Math.ceil(viewportWidth / contentWidth) + 4;
            setRepetitions(Math.max(10, needed));
        };

        calculateRepetitions();

        // Recalculate on resize and font load
        window.addEventListener('resize', calculateRepetitions);
        document.fonts.ready.then(calculateRepetitions);

        return () => window.removeEventListener('resize', calculateRepetitions);
    }, [text, image]);

    useEffect(() => {
        const setupMarquee = () => {
            if (!marqueeInnerRef.current) return;



            const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part') as HTMLElement | null;
            if (!marqueeContent) return;

            const contentWidth = marqueeContent.getBoundingClientRect().width;
            if (contentWidth === 0) return;

            if (animationRef.current) {
                animationRef.current.kill();
            }

            const isLTR = rowIndex % 2 === 0;

            animationRef.current = gsap.fromTo(marqueeInnerRef.current,
                { x: isLTR ? -contentWidth : 0 },
                {
                    x: isLTR ? 0 : -contentWidth,
                    duration: speed,
                    ease: 'none',
                    repeat: -1
                }
            );
        };

        // Initial setup
        const timer = setTimeout(setupMarquee, 100);

        // Re-setup on resize/font load ensures width is correct
        const resizeObserver = new ResizeObserver(() => {
            setupMarquee();
        });

        if (marqueeInnerRef.current) {
            const part = marqueeInnerRef.current.querySelector('.marquee__part');
            if (part) resizeObserver.observe(part);
        }

        return () => {
            clearTimeout(timer);
            resizeObserver.disconnect();
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [text, image, repetitions, speed, rowIndex]);

    const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        const edge = findClosestEdge(x, y, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
    };

    const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
        if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        const edge = findClosestEdge(x, y, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
            .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
    };

    const IconComponent = icon ? iconMap[icon] : null;

    return (
        <div className="menu__item" ref={itemRef}>
            <a
                className="menu__item-link"
                href={link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ color: textColor }}
            >
                {IconComponent && <span className="menu__icon">{IconComponent}</span>}
                {text}
            </a>
            <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor }}>
                <div className="marquee__inner-wrap">
                    <div className="marquee__inner" ref={marqueeInnerRef} aria-hidden="true">
                        {[...Array(repetitions)].map((_, idx) => (
                            <div className="marquee__part" key={idx} style={{ color: marqueeTextColor }}>
                                {IconComponent && <span className="menu__icon">{IconComponent}</span>}
                                <span>{text}</span>
                                {image && <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlowingMenu;
