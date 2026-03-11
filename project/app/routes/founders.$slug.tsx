
import type { Route } from "./+types/founders.$slug";
import { generatePageMeta, generateBreadcrumbSchema, generatePersonSchema, JsonLd, SEO } from "~/lib/seo";
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
import { AnimatedSection } from "~/components/animated-section/animated-section";
import styles from "./founders-details.module.css";

const foundersData: Record<string, {
    name: string;
    role: string;
    bio: string;
    longBio: string[];
    image: string;
    social: { linkedin: string; github: string };
    vision: string;
}> = {
    "amogh-v-k": {
        name: "Amogh V K",
        role: "Founder | Systems Engineer | AI–Hardware Architect",
        bio: "Engineer and system thinker focused on building intelligent systems that combine hardware, software, and AI with real-world usability and ethical design.",
        longBio: [
            "I am an Electronics and Communication Engineering student at Manipal Institute of Technology, Bengaluru, and the founder of EvenEi — an AI-first engineering company focused on improving existing systems and creating intelligent systems that do not yet exist.",
            "My work sits at the intersection of hardware, software, and machine intelligence. I design systems where AI is not treated as an add-on feature, but as a foundational architectural layer. From embedded hardware optimization to full-stack application development, I focus on building scalable, practical intelligence for real-world public and consumer use.",
            "I have built and led projects across multiple domains — including AI-powered smart systems, inventory and sales intelligence platforms for small businesses, private social discovery architectures, crowdsourced testing platforms, and aerospace-grade control systems as part of the ADCS team in the KiboCUBE satellite challenge. My experience spans Flutter, Dart, Firebase, React, Node.js, embedded systems, ML integration, control algorithms, and system-level design.",
            "What drives me is not just product development, but system creation — designing cohesive architectures where hardware and software operate as a unified intelligent organism."
        ],
        image: "/founders/amogh.jpeg",
        social: { linkedin: "https://www.linkedin.com/in/vk-amogh/", github: "https://github.com/VK-Amogh" },
        vision: "Engineering the Future of Intelligent Systems."
    }
};

export function meta({ params }: Route.MetaArgs) {
    const founder = foundersData[params.slug as string];
    return generatePageMeta({
        title: founder ? `${founder.name} — Founder of EvenEi Private Limited` : "Founder Not Found — EvenEi",
        description: founder
            ? `${founder.name} is the ${founder.role} of EvenEi Private Limited. ${founder.bio}`
            : "Founder profile page.",
        path: `/founders/${params.slug}`,
        ogType: "profile",
    });
}

export async function loader({ params }: Route.LoaderArgs) {
    const founder = foundersData[params.slug];
    if (!founder) {
        throw new Response("Not Found", { status: 404 });
    }
    return { founder };
}

export default function FounderDetails({ loaderData }: Route.ComponentProps) {
    const { founder } = loaderData;

    return (
        <main className={styles.container}>
            <JsonLd
                data={generateBreadcrumbSchema([
                    { name: "Home", url: SEO.siteUrl },
                    { name: "Founders", url: `${SEO.siteUrl}/founders` },
                    { name: founder.name, url: `${SEO.siteUrl}/founders/amogh-v-k` },
                ])}
            />
            <JsonLd
                data={generatePersonSchema({
                    name: founder.name,
                    jobTitle: founder.role,
                    bio: founder.bio,
                    image: `${SEO.siteUrl}${founder.image}`,
                    url: `${SEO.siteUrl}/founders/amogh-v-k`,
                    linkedin: founder.social.linkedin,
                    github: founder.social.github,
                })}
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
                            <Link to="/founders" className={styles.breadcrumbHome}>Founders</Link>
                            <ChevronRight className={styles.breadcrumbSeparator} size={14} />
                            <span className={styles.breadcrumbCurrent}>{founder.name}</span>
                        </div>
                    </AnimatedSection>

                    <div className={styles.profileHeader}>
                        <AnimatedSection animation="slide-right" delay={100} className={styles.imageSection}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className={classNames(
                                        styles.profileImage,
                                        founder.name === "Amogh V K" && styles.profileImageAmogh,
                                        founder.name === "Lassya M Kotian" && styles.profileImageLassya
                                    )}
                                />
                            </div>
                        </AnimatedSection>

                        <div className={styles.profileInfo}>
                            <AnimatedSection animation="slide-left" delay={200}>
                                <h1 className={styles.profileName}>{founder.name}</h1>
                                <p className={styles.profileRole}>{founder.role}</p>
                            </AnimatedSection>

                            <AnimatedSection animation="slide-up" delay={300}>
                                <div className={styles.socialLinks}>
                                    <a href={founder.social.linkedin} className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <Linkedin />
                                    </a>
                                    <a href={founder.social.github} className={styles.socialLink} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                        <Github />
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section className={styles.bioSection}>
                <div className={styles.bioContent}>
                    <div className={styles.bioText}>
                        <AnimatedSection animation="slide-up" delay={400}>
                            <h2 className={styles.sectionTitle}>Biography</h2>
                        </AnimatedSection>
                        {founder.longBio.map((paragraph, index) => (
                            <AnimatedSection key={index} animation="slide-up" delay={500 + (index * 100)}>
                                <p className={styles.bioParagraph}>{paragraph}</p>
                            </AnimatedSection>
                        ))}
                    </div>

                    <div className={styles.visionBox}>
                        <AnimatedSection animation="zoom" delay={600}>
                            <h3 className={styles.visionTitle}>Personal Vision</h3>
                            <p className={styles.visionQuote}>"{founder.vision}"</p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
