import type { Route } from "./+types/documentation";
import { Link } from "react-router";
import {
  BookOpen,
  Layers,
  Brain,
  Code2,
  Users,
  ArrowRight,
  FileText,
  Cog,
  ChevronRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./documentation.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Documentation - EvenEi" },
    {
      name: "description",
      content: "EvenEi documentation focuses on clarity and usability.",
    },
  ];
}

const heroFeatures = [
  { icon: <FileText />, text: "Clear System Explanations" },
  { icon: <Code2 />, text: "Developer-Friendly APIs" },
  { icon: <Layers />, text: "Architectural Insights" },
];

const docDesigns = [
  { icon: <Layers />, text: "Explain systems, not just APIs" },
  { icon: <Brain />, text: "Provide architectural understanding" },
  { icon: <Users />, text: "Enable responsible usage" },
  { icon: <Code2 />, text: "Support developers and partners" },
];

const docTypes = [
  {
    icon: <FileText />,
    title: "System Guides",
    text: "Comprehensive guides that explain how our systems work and how to integrate them effectively into your workflows.",
  },
  {
    icon: <Cog />,
    title: "API Reference",
    text: "Detailed API documentation with examples, parameters, and best practices for seamless implementation.",
  },
  {
    icon: <Layers />,
    title: "Architecture Docs",
    text: "Deep dives into system architecture, helping you understand the foundations of our technology stack.",
  },
];

export default function Documentation() {
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
          <div className={styles.heroLeft}>
            <AnimatedSection animation="slide-down" delay={0}>
              <div className={styles.breadcrumb}>
                <Link to="/" className={styles.breadcrumbHome}>Home</Link>
                <ChevronRight className={styles.breadcrumbSeparator} size={14} />
                <span className={styles.breadcrumbCurrent}>Documentation</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="elastic" delay={100}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleAccent}>Docs</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <p className={styles.heroDescription}>
                EvenEi documentation focuses on clarity and usability. We believe good documentation
                is part of good engineering.
              </p>
            </AnimatedSection>
          </div>

          <div className={styles.heroRight}>
            <AnimatedGroup animation="glide" baseDelay={300} staggerDelay={100}>
              {heroFeatures.map((feature) => (
                <div key={feature.text} className={styles.heroFeature}>
                  <div className={styles.heroFeatureIcon}>{feature.icon}</div>
                  <span className={styles.heroFeatureText}>{feature.text}</span>
                </div>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.approachSection}>
        <div className={styles.approachContent}>
          <div className={styles.approachHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                Our Approach
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitle}>
                Documentation <span className={styles.titleAccent}>Designed To</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={200}>
              <p className={styles.sectionDescription}>
                We go beyond API references to provide a complete understanding of our systems.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="float" baseDelay={300} staggerDelay={100} className={styles.approachGrid}>
            {docDesigns.map((design) => (
              <div key={design.text} className={styles.approachCard}>
                <div className={styles.approachIcon}>{design.icon}</div>
                <span className={styles.approachText}>{design.text}</span>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Types Section */}
      <section className={styles.typesSection}>
        <div className={styles.typesContent}>
          <div className={styles.typesHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabelDark}>
                <span className={styles.labelDotDark} />
                Documentation Types
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                What We <span className={styles.titleAccent}>Provide</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="flip" baseDelay={200} staggerDelay={150} className={styles.typesGrid}>
            {docTypes.map((doc) => (
              <div key={doc.title} className={styles.typeCard}>
                <div className={styles.typeIcon}>{doc.icon}</div>
                <h3 className={styles.typeTitle}>{doc.title}</h3>
                <p className={styles.typeText}>{doc.text}</p>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContent}>
          <AnimatedSection animation="zoom" delay={0}>
            <h2 className={styles.philosophyQuote}>
              We believe <span className={styles.philosophyAccent}>good documentation</span> is part of good engineering.
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="slide-up" delay={0}>
            <h2 className={styles.ctaTitle}>Want to explore our thinking?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100}>
            <p className={styles.ctaText}>Read our blog for insights on Everyday Intelligence.</p>
          </AnimatedSection>
          <AnimatedSection animation="wave" delay={200}>
            <Link to="/blog" className={styles.ctaButton}>
              <span>Visit Blog</span>
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
