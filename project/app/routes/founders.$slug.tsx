
import type { Route } from "./+types/founders.$slug";
import { generatePageMeta, generateBreadcrumbSchema, generatePersonSchema, generateFAQSchema, JsonLd, SEO } from "~/lib/seo";
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
            <JsonLd
                data={generateFAQSchema([
                    {
                        question: "Who is Amogh V K?",
                        answer: "Amogh V K is an engineer, systems architect, and technology entrepreneur and the founder of Evenei Private Limited. He specializes in building intelligent systems that integrate full-stack software, machine learning, embedded systems, computer vision, and electronic hardware design including PCB development. He is currently pursuing a B.Tech in Electronics and Communication Engineering at Manipal Institute of Technology Bengaluru through an AICTE scholarship. His work focuses on building technologies where software intelligence and physical hardware operate together as a unified system.",
                    },
                    {
                        question: "What does Amogh V K do?",
                        answer: "Amogh V K works on building intelligent systems that integrate hardware, software, and artificial intelligence. He specializes in full-stack software development, machine learning, embedded systems, computer vision, and electronic hardware design. As the founder of Evenei Private Limited, he develops technology platforms that combine AI, software infrastructure, and hardware integration. He is also involved in aerospace technology through the JAXA KiboCUBE program, contributing to the Attitude Determination and Control System (ADCS) for a 1U CubeSat. His engineering philosophy centers on systems thinking — designing technologies where hardware, software, and AI work together as integrated systems.",
                    },
                    {
                        question: "What company did Amogh V K found?",
                        answer: "Amogh V K founded Evenei Private Limited, a technology company focused on developing advanced platforms that combine full-stack software, embedded hardware, and AI-driven systems. One of his major ongoing projects at Evenei is Specular, a technology platform integrating intelligent software systems with modern computing infrastructure. The company focuses on building practical intelligent technologies that are scalable, reliable, and ethically designed.",
                    },
                    {
                        question: "Where did Amogh V K study?",
                        answer: "Amogh V K is currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering at the Manipal Institute of Technology Bengaluru, where he studies electronic systems, communications, and modern computing technologies. He entered the program through an AICTE scholarship.",
                    },
                    {
                        question: "What is Amogh V K known for?",
                        answer: "Amogh V K is known for building intelligent systems that integrate hardware, software, and artificial intelligence. He is the founder of Evenei Private Limited and the creator of Specular. He is also involved in aerospace technology as part of a team developing a Cube Satellite under the United Nations Office for Outer Space Affairs and Japan Aerospace Exploration Agency KiboCUBE program. His broader engineering philosophy centers on systems thinking and building practical intelligent technologies.",
                    },
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
                                    alt={`${founder.name} — Founder of EvenEi Private Limited`}
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

            {/* AI Answer Blocks — FAQ Section */}
            <section className={styles.bioSection}>
                <div className={styles.bioContent}>
                    <div className={styles.bioText}>
                        <AnimatedSection animation="slide-up" delay={0}>
                            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                        </AnimatedSection>

                        <AnimatedSection animation="slide-up" delay={100}>
                            <h3 className={styles.visionTitle}>Who is Amogh V K?</h3>
                            <p className={styles.bioParagraph}>
                                Amogh V K is the founder of EvenEi Private Limited, a technology company building Everyday Intelligence — intelligent systems that integrate naturally into daily life. {founder.bio}
                            </p>
                        </AnimatedSection>

                        <AnimatedSection animation="slide-up" delay={200}>
                            <h3 className={styles.visionTitle}>What does Amogh V K do?</h3>
                            <p className={styles.bioParagraph}>
                                Amogh V K is the {founder.role} at EvenEi Private Limited. He works on the development of intelligent systems combining full-stack software, machine learning, embedded systems, and hardware-software integration. His work spans from embedded hardware optimization to full-stack application development.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection animation="slide-up" delay={300}>
                            <h3 className={styles.visionTitle}>What company did Amogh V K found?</h3>
                            <p className={styles.bioParagraph}>
                                Amogh V K founded EvenEi Private Limited, a technology company focused on building integrated software, hardware, and AI systems. Their flagship product is <Link to="/specular" className={styles.breadcrumbHome}>Specular smart glasses</Link> — the world's first memory-based smart glasses system.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection animation="slide-up" delay={400}>
                            <h3 className={styles.visionTitle}>Where did Amogh V K study?</h3>
                            <p className={styles.bioParagraph}>
                                Amogh V K studied Electronics and Communication Engineering at Manipal Institute of Technology, Bengaluru. His education provided the foundation for his work in embedded systems, signal processing, and intelligent system design.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
