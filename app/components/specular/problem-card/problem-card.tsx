import { useState } from 'react';
import styles from '~/routes/specular.module.css';

interface ProblemCardProps {
    icon: React.ReactNode;
    text: string;
}

export function ProblemCard({ icon, text }: ProblemCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${styles.problemCard} ${isHovered ? styles.problemCardHovered : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {icon}
            <p className={styles.problemText}>{text}</p>
        </div>
    );
}
