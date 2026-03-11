import type { Route } from "./+types/faq";
import { Link } from "react-router";
import {
    HelpCircle,
    ChevronRight,
    ChevronDown,
    ArrowRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import {
    generatePageMeta,
    generateBreadcrumbSchema,
    generateFAQSchema,
    JsonLd,
    SEO,
    MASTER_FAQS,
} from "~/lib/seo";
import styles from "./faq.module.css";

export function meta({ }: Route.MetaArgs) {
    return generatePageMeta({
        title:
            "EvenEi FAQ — Frequently Asked Questions About EvenEi & Specular",
        description:
            "Find answers to frequently asked questions about EvenEi Private Limited, founder Amogh V K, Specular smart glasses, Everyday Intelligence, and more.",
        path: "/faq",
        dateModified: "2026-03-11",
    });
}

export default function FAQ() {
    return (
        <main className={styles.container}>
            <JsonLd
                data={generateBreadcrumbSchema([
                    { name: "Home", url: SEO.siteUrl },
                    { name: "FAQ", url: `${SEO.siteUrl}/faq` },
                ])}
            />
            <JsonLd data={generateFAQSchema([...MASTER_FAQS])} />

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
                            <Link to="/" className={styles.breadcrumbHome}>
                                Home
                            </Link>
                            <ChevronRight
                                className={styles.breadcrumbSeparator}
                                size={14}
                            />
                            <span className={styles.breadcrumbCurrent}>FAQ</span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="elastic" delay={100}>
                        <h1 className={styles.heroTitle}>
                            Frequently Asked{" "}
                            <span className={styles.heroTitleAccent}>Questions</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" delay={200}>
                        <p className={styles.heroDescription}>
                            Everything you need to know about EvenEi, our founder Amogh V K,
                            Specular smart glasses, and our approach to Everyday Intelligence.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ Section — AI Answer Blocks */}
            <section className={styles.faqSection}>
                <div className={styles.faqContent}>
                    <div className={styles.faqHeader}>
                        <AnimatedSection animation="slide-down" delay={0}>
                            <span className={styles.sectionLabel}>
                                <span className={styles.labelDot} />
                                About EvenEi
                            </span>
                        </AnimatedSection>
                        <AnimatedSection animation="slide-up" delay={100}>
                            <h2 className={styles.sectionTitle}>
                                Common <span className={styles.titleAccent}>Questions</span>
                            </h2>
                        </AnimatedSection>
                    </div>

                    <AnimatedGroup
                        animation="glide"
                        baseDelay={200}
                        staggerDelay={100}
                        className={styles.faqList}
                    >
                        {MASTER_FAQS.map((faq) => (
                            <details key={faq.question} className={styles.faqItem}>
                                <summary className={styles.faqQuestion}>
                                    <HelpCircle className={styles.faqIcon} size={20} />
                                    <span>{faq.question}</span>
                                    <ChevronDown className={styles.faqChevron} size={20} />
                                </summary>
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </AnimatedGroup>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <AnimatedSection animation="slide-up" delay={0}>
                        <h2 className={styles.ctaTitle}>Still have questions?</h2>
                    </AnimatedSection>
                    <AnimatedSection animation="slide-up" delay={100}>
                        <p className={styles.ctaText}>
                            We'd love to hear from you. Reach out to our team.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection animation="wave" delay={200}>
                        <Link to="/contact" className={styles.ctaButton}>
                            <span>Contact Us</span>
                            <ArrowRight className={styles.ctaIcon} />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            <Footer />
        </main>
    );
}
