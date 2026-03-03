import type { Route } from "./+types/features";
import { Link } from "react-router";
import {
  Layers,
  Brain,
  Zap,
  Lock,
  RefreshCw,
  Eye,
  Sparkles,
  Target,
  ArrowRight,
  ChevronRight,
  Minimize2,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./features.module.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Features - EvenEi" },
    {
      name: "description",
      content: "EvenEi builds capabilities that live inside systems, not isolated features.",
    },
  ];
}

const principles = [
  { icon: <Brain />, text: "Context awareness", number: "01" },
  { icon: <Layers />, text: "Seamless integration", number: "02" },
  { icon: <Minimize2 />, text: "Minimal user effort", number: "03" },
  { icon: <Lock />, text: "Privacy-first design", number: "04" },
  { icon: <RefreshCw />, text: "Continuous improvement through software", number: "05" },
];

const systemFocus = [
  {
    icon: <Eye />,
    title: "Understanding Environments",
    text: "Our systems perceive and adapt to the contexts they operate in, providing relevant assistance without requiring explicit commands.",
  },
  {
    icon: <Zap />,
    title: "Reducing Friction",
    text: "Every feature is designed to remove obstacles and streamline workflows, not add complexity or require additional learning curves.",
  },
  {
    icon: <Target />,
    title: "Improving Productivity",
    text: "Intelligent assistance that helps you accomplish more with less cognitive overhead, letting you focus on what matters.",
  },
  {
    icon: <Sparkles />,
    title: "Enhancing Experiences",
    text: "Technology that makes everyday interactions smoother and more intuitive, working quietly in the background.",
  },
];

export default function Features() {
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
              <span className={styles.breadcrumbCurrent}>Features</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="elastic" delay={100}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleAccent}>Features</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <p className={styles.heroDescription}>
              EvenEi does not ship isolated features. We build capabilities that live inside systems,
              designed to support people without distraction.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={300}>
            <div className={styles.heroHighlight}>
              <Sparkles className={styles.heroHighlightIcon} />
              <span>Capabilities That Live Inside Systems</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Principles Section */}
      <section className={styles.principlesSection}>
        <div className={styles.principlesContent}>
          <div className={styles.principlesHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                Key Principles
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitle}>
                How We <span className={styles.titleAccent}>Build</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className={styles.principlesList}>
            <AnimatedGroup
              animation="swing"
              baseDelay={200}
              staggerDelay={80}
              className={styles.principlesList}
            >
              {principles.map((principle) => (
                <div key={principle.text} className={styles.principleRow}>
                  <span className={styles.principleNumber}>{principle.number}</span>
                  <div className={styles.principleIcon}>{principle.icon}</div>
                  <span className={styles.principleText}>{principle.text}</span>
                  <ArrowRight className={styles.principleArrow} />
                </div>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className={styles.focusSection}>
        <div className={styles.focusContent}>
          <div className={styles.focusHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabelDark}>
                <span className={styles.labelDotDark} />
                System Focus
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                What We <span className={styles.titleAccent}>Build For</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="flip" baseDelay={200} staggerDelay={120} className={styles.focusGrid}>
            {systemFocus.map((item) => (
              <div key={item.title} className={styles.focusCard}>
                <div className={styles.focusIcon}>{item.icon}</div>
                <h3 className={styles.focusTitle}>{item.title}</h3>
                <p className={styles.focusText}>{item.text}</p>
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
              Features at EvenEi exist to <span className={styles.statementAccent}>support people</span>, not distract them.
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="slide-up" delay={0}>
            <h2 className={styles.ctaTitle}>Curious about our development plans?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100}>
            <p className={styles.ctaText}>See what we&apos;re building next.</p>
          </AnimatedSection>
          <AnimatedSection animation="wave" delay={200}>
            <Link to="/roadmap" className={styles.ctaButton}>
              <span>View Roadmap</span>
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
