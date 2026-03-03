
import type { Route } from "./+types/products";
import { Link } from "react-router";
import {
    ChevronRight,
    Sparkles,
    ArrowRight,
    Cpu,
    Globe,
    ShieldCheck,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection } from "~/components/animated-section/animated-section";
import styles from "./products.module.css";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Products - EvenEi" },
        {
            name: "description",
            content: "Explore the proprietary technologies and systems built by EvenEi, including Project Specular.",
        },
    ];
}

export default function Products() {
    return (
        <main className={styles.container}>
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
                            <span className={styles.breadcrumbCurrent}>Products</span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="elastic" delay={100}>
                        <h1 className={styles.heroTitle}>
                            Our <span className={styles.heroTitleAccent}>Products</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up" delay={200}>
                        <p className={styles.heroDescription}>
                            Systems designed to integrate intelligence into everyday life.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Featured Product: Specular */}
            <section className={styles.productSection}>
                <div className={styles.productContent}>
                    <AnimatedSection animation="slide-up" delay={0}>
                        <div className={styles.productLabel}>Featured Project</div>
                    </AnimatedSection>

                    <div className={styles.specularCard}>
                        <div className={styles.specularContent}>
                            <AnimatedSection animation="slide-right" delay={100}>
                                <div className={styles.iconContainer}>
                                    <Sparkles className={styles.specularIcon} />
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="slide-up" delay={200}>
                                <h2 className={styles.productTitle}>Project Specular</h2>
                            </AnimatedSection>

                            <AnimatedSection animation="slide-up" delay={300}>
                                <p className={styles.productDescription}>
                                    SpecEI is the world’s first memory-based smart glasses system, built to solve a fundamental human limitation: we forget.
                                    Unlike traditional devices, SpecEI passively captures visual and audio context, automatically structures it, and allows you to search your own life.
                                    It doesn't just record; it remembers, acting as an intelligent external memory layer that supports your natural cognition.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection animation="slide-up" delay={400}>
                                <div className={styles.featureTags}>
                                    <span className={styles.tag}><Cpu size={14} /> Passive Capture</span>
                                    <span className={styles.tag}><Globe size={14} /> Automatic Understanding</span>
                                    <span className={styles.tag}><ShieldCheck size={14} /> Searchable Memory</span>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="wave" delay={500}>
                                <Link to="/specular" className={styles.exploreButton}>
                                    <span>Explore Project Specular</span>
                                    <ArrowRight className={styles.buttonIcon} />
                                </Link>
                            </AnimatedSection>
                        </div>

                        <div className={styles.specularVisual}>
                            <div className={styles.visualGrid}></div>
                            <div className={styles.glassesContainer}>
                                <div className={styles.glassFrame}>
                                    <div className={styles.lensLeft}>
                                        <div className={styles.hudOverlay}>
                                            <div className={styles.hudCrosshair} />
                                            <div className={styles.hudDataTop} />
                                            <div className={styles.hudDataBottom} />
                                        </div>
                                        <div className={styles.scanLine} />
                                    </div>
                                    <div className={styles.bridge} />
                                    <div className={styles.lensRight}>
                                        <div className={styles.hudOverlay}>
                                            <div className={styles.hudReticle} />
                                            <div className={styles.hudDataRight} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
