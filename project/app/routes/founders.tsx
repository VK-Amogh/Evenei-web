
import type { Route } from "./+types/founders";
import { generatePageMeta, generateBreadcrumbSchema, JsonLd, SEO } from "~/lib/seo";
import { Link } from "react-router";
import classNames from "classnames";
import {
    Github,
    Linkedin,
    ChevronRight,
    ArrowRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./founders.module.css";

export function meta({ }: Route.MetaArgs) {
    return generatePageMeta({
        title: "EvenEi Founders — Meet the Team Behind Everyday Intelligence",
        description:
            "Meet the founders of EvenEi Private Limited. Learn about the visionaries building intelligent systems that combine hardware, software, and AI for everyday life.",
        path: "/founders",
    });
}

const founders = [
    {
        name: "Amogh V K",
        role: "Founder",
        bio: "Engineer and system thinker focused on building intelligent systems that combine hardware, software, and AI with real-world usability and ethical design.",
        image: "/founders/amogh.jpeg",
        slug: "amogh-v-k",
        social: { linkedin: "https://www.linkedin.com/in/vk-amogh/", github: "https://github.com/VK-Amogh" },
    },
];

export default function Founders() {
    return (
        <main className={styles.container}>
            <JsonLd
                data={generateBreadcrumbSchema([
                    { name: "Home", url: SEO.siteUrl },
                    { name: "Founders", url: `${SEO.siteUrl}/founders` },
                ])}
            />
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <PixelBlast
                        color="#4a4a4a"
                        pixelSize={3}
                        patternScale={2}
                        patternDensity={1}
                        enableRipples={true}
                        rippleSpeed={0.3}
                        rippleThickness={0.1}
                        rippleIntensityScale={1}
                        edgeFade={0.5}
                        speed={0.5}
                    />
                </div>
                <div className={styles.heroContent}>
                    <AnimatedSection animation="slide-down" delay={0}>
                        <div className={styles.breadcrumb}>
                            <Link to="/" className={styles.breadcrumbHome}>Home</Link>
                            <ChevronRight className={styles.breadcrumbSeparator} size={14} />
                            <span className={styles.breadcrumbCurrent}>Founders</span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="elastic" delay={100}>
                        <h1 className={styles.heroTitle}>
                            The <span className={styles.heroTitleAccent}>Founders</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" delay={200}>
                        <p className={styles.heroDescription}>
                            Building the future quietly and correctly.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Founders List */}
            <section className={styles.foundersSection}>
                <div className={styles.foundersContent}>
                    <AnimatedGroup
                        animation="glide"
                        baseDelay={200}
                        staggerDelay={200}
                        className={styles.founderGrid}
                    >
                        {founders.map((founder) => (
                            <div key={founder.name} className={styles.founderCard}>
                                <div className={styles.founderImageWrapper}>
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className={classNames(
                                            styles.founderAvatar,
                                            founder.name === "Amogh V K" && styles.founderAvatarAmogh,
                                            founder.name === "Lassya M Kotian" && styles.founderAvatarLassya
                                        )}
                                    />
                                </div>
                                <div className={styles.founderDetails}>
                                    <div className={styles.founderInfo}>
                                        <h3 className={styles.founderName}>{founder.name}</h3>
                                        <span className={styles.founderRole}>{founder.role}</span>
                                    </div>
                                    <p className={styles.founderBio}>{founder.bio}</p>
                                    <div className={styles.founderActions}>
                                        <Link to={`/founders/${founder.slug}`} className={styles.viewProfileButton}>
                                            <span>View Profile</span>
                                            <ArrowRight className={styles.buttonIcon} />
                                        </Link>
                                    </div>
                                    <div className={styles.founderSocials}>
                                        <a href={founder.social.linkedin} className={styles.founderSocialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                            <Linkedin />
                                        </a>
                                        <a href={founder.social.github} className={styles.founderSocialLink} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                            <Github />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            <Footer />
        </main>
    );
}
