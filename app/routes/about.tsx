import type { Route } from "./+types/about";
import { Link } from "react-router";
import {
  Building2,
  Brain,
  Eye,
  Heart,
  Layers,
  Target,
  Cog,
  Lock,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./about.module.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About - EvenEi" },
    { name: "description", content: "EvenEi is a technology company built around one core idea: Everyday Intelligence." },
  ];
}

const heroStats = [
  { icon: <Building2 />, label: "Founded", value: "Systems-First Philosophy" },
  { icon: <Brain />, label: "Focus", value: "Everyday Intelligence" },
  { icon: <Target />, label: "Mission", value: "Human-Centered AI" },
];

const principles = [
  {
    icon: <Layers />,
    title: "Embedded into Systems",
    text: "Intelligence that lives inside your workflows, not as a separate tool requiring context switches.",
  },
  {
    icon: <Brain />,
    title: "Context-Aware",
    text: "Systems that understand your environment and adapt to provide relevant, timely assistance.",
  },
  {
    icon: <Heart />,
    title: "Human-Centered",
    text: "Technology designed around people, respecting how humans actually think and work.",
  },
  {
    icon: <Eye />,
    title: "Calm and Non-Intrusive",
    text: "Intelligence that supports without distraction, working quietly in the background.",
  },
  {
    icon: <Target />,
    title: "Designed for Real-World Use",
    text: "Practical solutions that work in actual deployment scenarios, not just demonstrations.",
  },
];

const values = [
  {
    icon: <Cog />,
    title: "Systems First",
    text: "We build architectures, not features. Our foundation is designed for long-term scalability and ethical deployment.",
    large: true,
  },
  {
    icon: <Lock />,
    title: "Privacy by Design",
    text: "Every system we build respects user data. Privacy isn't an afterthought—it's a fundamental requirement.",
    large: false,
  },
  {
    icon: <Target />,
    title: "Real-World Focus",
    text: "We prioritize usability and practical impact over theoretical benchmarks and isolated demonstrations.",
    large: false,
  },
];

export default function About() {
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
                <span className={styles.breadcrumbCurrent}>About</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="elastic" delay={100}>
              <h1 className={styles.heroTitle}>
                About
                <span className={styles.heroTitleAccent}> EvenEi</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <p className={styles.heroDescription}>
                A technology company built around one core idea: Everyday Intelligence. We focus on designing
                intelligent systems that integrate naturally into daily life.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedGroup
            animation="glide"
            baseDelay={300}
            staggerDelay={100}
            className={styles.heroRight}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className={styles.heroStatCard}>
                <div className={styles.heroStatIcon}>{stat.icon}</div>
                <div className={styles.heroStatText}>
                  <span className={styles.heroStatLabel}>{stat.label}</span>
                  <span className={styles.heroStatValue}>{stat.value}</span>
                </div>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContent}>
          <div className={styles.philosophyLeft}>
            <AnimatedSection animation="slide-right" delay={0}>
              <span className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                Our Philosophy
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitle}>
                Intelligence <span className={styles.titleAccent}>Should Be</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={200}>
              <p className={styles.sectionDescription}>
                Rather than asking users to adapt to technology, we design technology that adapts to people.
                Our work spans software systems, intelligent interfaces, and applied AI.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedGroup
            animation="float"
            baseDelay={300}
            staggerDelay={80}
            className={styles.philosophyRight}
          >
            {principles.map((principle) => (
              <div key={principle.title} className={styles.principleCard}>
                <div className={styles.principleIconWrapper}>{principle.icon}</div>
                <div className={styles.principleContent}>
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                  <p className={styles.principleText}>{principle.text}</p>
                </div>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesContent}>
          <div className={styles.valuesHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabelDark}>
                <span className={styles.labelDotDark} />
                Core Values
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                What <span className={styles.titleAccent}>Drives Us</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="flip" baseDelay={200} staggerDelay={150} className={styles.bentoGrid}>
            {values.map((value) => (
              <div key={value.title} className={`${styles.bentoCard} ${value.large ? styles.bentoCardLarge : ""}`}>
                <div className={styles.bentoIcon}>{value.icon}</div>
                <h3 className={styles.bentoTitle}>{value.title}</h3>
                <p className={styles.bentoText}>{value.text}</p>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Highlight Section */}
      <section className={styles.highlightSection}>
        <div className={styles.highlightContent}>
          <AnimatedSection animation="zoom" delay={0}>
            <h2 className={styles.highlightQuote}>
              EvenEi is a <span className={styles.highlightAccent}>systems company</span> first, not a feature-driven startup.
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200}>
            <p className={styles.highlightSubtext}>
              We focus on strong architectural foundations and ethical, privacy-first intelligence with a strong
              emphasis on usability, ethics, and long-term scalability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="slide-up" delay={0}>
            <h2 className={styles.ctaTitle}>Want to learn more about our approach?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100}>
            <p className={styles.ctaText}>Explore our vision for the future of Everyday Intelligence.</p>
          </AnimatedSection>
          <AnimatedSection animation="wave" delay={200}>
            <Link to="/vision" className={styles.ctaButton}>
              <span>Read Our Vision</span>
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
