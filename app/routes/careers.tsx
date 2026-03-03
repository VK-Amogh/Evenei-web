import type { Route } from "./+types/careers";
import { Link } from "react-router";
import {
  Users,
  Brain,
  Heart,
  Sparkles,
  Target,
  Code2,
  Palette,
  Shield,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  Rocket,
  Zap,
  Clock,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./careers.module.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Careers - EvenEi" },
    {
      name: "description",
      content: "At EvenEi, we are building thoughtful systems, not rushed products. Join us.",
    },
  ];
}

const heroBadges = [
  { icon: <Rocket />, text: "Building the Future" },
  { icon: <Target />, text: "Systems-First Approach" },
  { icon: <Heart />, text: "Human-Centered Culture" },
];

const lookingFor = [
  { icon: <Brain />, text: "Think in systems" },
  { icon: <Heart />, text: "Care about user experience" },
  { icon: <Target />, text: "Value clarity over complexity" },
  { icon: <Lightbulb />, text: "Are curious, practical, and responsible" },
];

const values = [
  { icon: <Code2 />, title: "Strong Fundamentals", text: "Deep understanding of core principles." },
  { icon: <Palette />, title: "Clean Design", text: "Appreciation for elegant solutions." },
  { icon: <Shield />, title: "Ethical Thinking", text: "Consideration for broader impact." },
  { icon: <Target />, title: "Problem Solving", text: "Focus on practical solutions." },
];

const impactStats = [
  { icon: <Zap />, value: "Long-term", label: "Impact Focus" },
  { icon: <Users />, value: "Collaborative", label: "Team Culture" },
  { icon: <Clock />, value: "Sustainable", label: "Growth Pace" },
];

export default function Careers() {
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
              <span className={styles.breadcrumbCurrent}>Careers</span>
            </div>
          </AnimatedSection>

          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <AnimatedSection animation="elastic" delay={100}>
                <h1 className={styles.heroTitle}>
                  Join <span className={styles.heroTitleAccent}>EvenEi</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <p className={styles.heroDescription}>
                  At EvenEi, we are building thoughtful systems, not rushed products. We look for people who
                  share our commitment to quality, ethics, and long-term impact.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedGroup
              animation="glide"
              baseDelay={300}
              staggerDelay={100}
              className={styles.heroRight}
            >
              {heroBadges.map((badge) => (
                <div key={badge.text} className={styles.heroBadge}>
                  <div className={styles.heroBadgeIcon}>{badge.icon}</div>
                  <span className={styles.heroBadgeText}>{badge.text}</span>
                </div>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Looking For Section */}
      <section className={styles.lookingSection}>
        <div className={styles.lookingContent}>
          <div className={styles.lookingHeader}>
            <AnimatedSection animation="slide-right" delay={0}>
              <span className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                Who We&apos;re Looking For
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitle}>
                Ideal <span className={styles.titleAccent}>Candidates</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={200}>
              <p className={styles.sectionDescription}>
                We look for people who align with our philosophy and approach to building intelligent systems.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="float" baseDelay={300} staggerDelay={100} className={styles.lookingGrid}>
            {lookingFor.map((item) => (
              <div key={item.text} className={styles.lookingCard}>
                <div className={styles.lookingIcon}>{item.icon}</div>
                <span className={styles.lookingText}>{item.text}</span>
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
                What We Value
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                Our <span className={styles.titleAccent}>Culture</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="flip" baseDelay={200} staggerDelay={100} className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueText}>{value.text}</p>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.impactSection}>
        <div className={styles.impactContent}>
          <div className={styles.impactHeader}>
            <AnimatedSection animation="slide-up" delay={0}>
              <span className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                Long-Term Impact
              </span>
            </AnimatedSection>
            <AnimatedSection animation="zoom" delay={100}>
              <h2 className={styles.impactQuote}>
                Careers at EvenEi are about <span className={styles.impactAccent}>long-term impact</span>, not short-term hype.
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-up" delay={200}>
            <div className={styles.impactBox}>
              {impactStats.map((stat) => (
                <div key={stat.label} className={styles.impactStat}>
                  <div className={styles.impactStatIcon}>{stat.icon}</div>
                  <span className={styles.impactStatValue}>{stat.value}</span>
                  <span className={styles.impactStatLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="slide-up" delay={0}>
            <h2 className={styles.ctaTitle}>Ready to build something meaningful?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100}>
            <p className={styles.ctaText}>Get in touch with us to explore opportunities.</p>
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
