import type { Route } from "./+types/roadmap";
import { Link } from "react-router";
import {
  Layers,
  Zap,
  Heart,
  Globe,
  Shield,
  Sparkles,
  Target,
  RefreshCw,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./roadmap.module.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Roadmap - EvenEi" },
    {
      name: "description",
      content: "EvenEi follows a system-first roadmap rather than a feature checklist.",
    },
  ];
}

const priorities = [
  {
    icon: <Layers />,
    title: "Strengthening Architecture",
    text: "Building robust foundations that support long-term growth and reliability at scale.",
  },
  {
    icon: <Zap />,
    title: "Intelligence Efficiency",
    text: "Optimizing how our systems process and deliver intelligent assistance.",
  },
  {
    icon: <Heart />,
    title: "User Experience",
    text: "Continuously refining how users interact with and benefit from our systems.",
  },
  {
    icon: <Globe />,
    title: "Real-World Deployments",
    text: "Expanding practical applications across diverse environments and use cases.",
  },
  {
    icon: <Shield />,
    title: "Privacy & Security",
    text: "Deepening our commitment to protecting user data and system integrity.",
  },
];

const philosophy = [
  {
    icon: <Target />,
    title: "Stability",
    text: "Building robust foundations that support long-term growth and reliability.",
  },
  {
    icon: <Sparkles />,
    title: "Clarity",
    text: "Maintaining clear direction and purpose in every development decision.",
  },
  {
    icon: <RefreshCw />,
    title: "Scalability",
    text: "Designing systems that grow efficiently without compromising quality.",
  },
];

export default function Roadmap() {
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
              <span className={styles.breadcrumbCurrent}>Roadmap</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="elastic" delay={100}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleAccent}>Roadmap</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <p className={styles.heroDescription}>
              EvenEi follows a system-first roadmap rather than a feature checklist. We prioritize stability,
              clarity, and scalability over rapid but fragile growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineContent}>
          <div className={styles.timelineLine} />

          <div className={styles.timelineHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                Current Priorities
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitle}>
                What We&apos;re <span className={styles.titleAccent}>Building</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className={styles.timelineItems}>
            <AnimatedGroup
              animation="glide"
              baseDelay={200}
              staggerDelay={150}
              className={styles.timelineItems}
            >
              {priorities.map((priority) => (
                <div key={priority.title} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineIcon}>{priority.icon}</div>
                    <h3 className={styles.timelineTitle}>{priority.title}</h3>
                    <p className={styles.timelineText}>{priority.text}</p>
                  </div>
                </div>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContent}>
          <div className={styles.philosophyHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabelDark}>
                <span className={styles.labelDotDark} />
                Development Philosophy
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                How We <span className={styles.titleAccent}>Evolve</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="flip" baseDelay={200} staggerDelay={150} className={styles.philosophyGrid}>
            {philosophy.map((item) => (
              <div key={item.title} className={styles.philosophyCard}>
                <div className={styles.philosophyIcon}>{item.icon}</div>
                <h3 className={styles.philosophyTitle}>{item.title}</h3>
                <p className={styles.philosophyText}>{item.text}</p>
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
              Our roadmap evolves with <span className={styles.statementAccent}>learning, feedback, and responsible</span> iteration.
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="slide-up" delay={0}>
            <h2 className={styles.ctaTitle}>Interested in our pricing model?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100}>
            <p className={styles.ctaText}>Learn about how we price our systems and services.</p>
          </AnimatedSection>
          <AnimatedSection animation="wave" delay={200}>
            <Link to="/pricing" className={styles.ctaButton}>
              <span>View Pricing</span>
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
