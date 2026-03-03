import type { Route } from "./+types/vision";
import { Link } from "react-router";
import {
  Eye,
  Brain,
  Sparkles,
  Lightbulb,
  Target,
  Cpu,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./vision.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vision - EvenEi" },
    { name: "description", content: "Our vision is to make intelligence a quiet but powerful part of everyday life." },
  ];
}

const futureVisions = [
  {
    icon: <Cpu />,
    title: "Intelligence in the Background",
    text: "AI that works silently, supporting you without demanding attention or disrupting your natural workflow.",
    number: "01",
  },
  {
    icon: <Brain />,
    title: "Reduced Cognitive Load",
    text: "Tools designed to simplify thinking, not complicate it. Less mental overhead, more meaningful work.",
    number: "02",
  },
  {
    icon: <Target />,
    title: "Contextual Understanding",
    text: "Systems that comprehend context and environment, not just isolated commands or keyword triggers.",
    number: "03",
  },
  {
    icon: <Lightbulb />,
    title: "Human Thinking Support",
    text: "Technology that amplifies human capability rather than attempting to replace human judgment.",
    number: "04",
  },
];

const pillars = [
  {
    icon: <Eye />,
    title: "Invisible Integration",
    text: "Intelligence that works seamlessly without demanding attention or disrupting natural workflows.",
  },
  {
    icon: <Brain />,
    title: "Contextual Understanding",
    text: "Systems that comprehend environments and situations, not just isolated commands or queries.",
  },
  {
    icon: <Sparkles />,
    title: "Human Enhancement",
    text: "Technology designed to amplify human capabilities, not replace or diminish them.",
  },
];

export default function Vision() {
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
              <span className={styles.breadcrumbCurrent}>Vision</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={100}>
            <div className={styles.heroTagline}>
              <Eye className={styles.taglineIcon} />
              <span>Looking Forward</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="elastic" delay={200}>
            <h1 className={styles.heroTitle}>
              Our <span className={styles.heroTitleAccent}>Vision</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={300}>
            <p className={styles.heroDescription}>
              To make intelligence a quiet but powerful part of everyday life. We imagine a future where
              technology adapts to people, not the other way around.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Future Section */}
      <section className={styles.futureSection}>
        <div className={styles.futureContent}>
          <div className={styles.futureHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                The Future We Imagine
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitle}>
                Where We&apos;re <span className={styles.titleAccent}>Heading</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={200}>
              <p className={styles.sectionDescription}>
                We aim to move beyond artificial intelligence as a novelty, and toward Everyday Intelligence as a foundation.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="glide" baseDelay={300} staggerDelay={120} className={styles.futureGrid}>
            {futureVisions.map((vision) => (
              <div key={vision.title} className={styles.futureCard}>
                <span className={styles.futureNumber}>{vision.number}</span>
                <div className={styles.futureIcon}>{vision.icon}</div>
                <h3 className={styles.futureTitle}>{vision.title}</h3>
                <p className={styles.futureText}>{vision.text}</p>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Pillars Section */}
      <section className={styles.pillarsSection}>
        <div className={styles.pillarsContent}>
          <div className={styles.pillarsHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabelDark}>
                <span className={styles.labelDotDark} />
                Strategic Pillars
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                Building <span className={styles.titleAccent}>Tomorrow</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="flip" baseDelay={200} staggerDelay={150} className={styles.pillarsGrid}>
            {pillars.map((pillar) => (
              <div key={pillar.title} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.text}</p>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Statement Section */}
      <section className={styles.statementSection}>
        <div className={styles.statementContent}>
          <AnimatedSection animation="zoom" delay={0}>
            <h2 className={styles.statementQuote}>
              EvenEi exists to ensure intelligence <span className={styles.statementAccent}>fits into life</span> — not the other way around.
            </h2>
          </AnimatedSection>
          <div className={styles.statementDivider} />
          <AnimatedSection animation="slide-up" delay={200}>
            <p className={styles.statementSubtext}>
              We are building the future quietly and correctly, with strong foundations and ethical principles at every step.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="slide-up" delay={0}>
            <h2 className={styles.ctaTitle}>Interested in building the future with us?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100}>
            <p className={styles.ctaText}>Explore career opportunities at EvenEi.</p>
          </AnimatedSection>
          <AnimatedSection animation="wave" delay={200}>
            <Link to="/careers" className={styles.ctaButton}>
              <span>View Careers</span>
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
