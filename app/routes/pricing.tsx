import type { Route } from "./+types/pricing";
import { Link } from "react-router";
import {
  DollarSign,
  Minimize2,
  TrendingUp,
  Users,
  Leaf,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./pricing.module.css";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Pricing - EvenEi" },
    {
      name: "description",
      content: "EvenEi believes pricing should reflect value, not complexity.",
    },
  ];
}

const systemDesigns = [
  { icon: <Minimize2 />, text: "Reduce unnecessary hardware and software cost" },
  { icon: <TrendingUp />, text: "Scale efficiently with your needs" },
  { icon: <Users />, text: "Remain accessible to all organizations" },
  { icon: <Leaf />, text: "Provide long-term sustainable value" },
];

const principles = [
  {
    icon: <DollarSign />,
    title: "Value-Based",
    text: "Our pricing reflects the actual value delivered, not arbitrary complexity or feature counts. You pay for outcomes, not overhead.",
  },
  {
    icon: <TrendingUp />,
    title: "Scalable",
    text: "Costs grow proportionally with your needs, ensuring fairness at every stage of growth. No surprise jumps or hidden tiers.",
  },
  {
    icon: <Leaf />,
    title: "Sustainable",
    text: "Long-term partnerships over short-term transactions. We're invested in your success because it means our success too.",
  },
];

export default function Pricing() {
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
              <span className={styles.breadcrumbCurrent}>Pricing</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="elastic" delay={100}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleAccent}>Pricing</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <p className={styles.heroDescription}>
              EvenEi believes pricing should reflect value, not complexity. Our philosophy ensures
              intelligence is affordable, practical, and sustainable.
            </p>
          </AnimatedSection>
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
                Systems <span className={styles.titleAccent}>Designed To</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={200}>
              <p className={styles.sectionDescription}>
                We design our systems with cost-efficiency in mind, ensuring that intelligence remains
                accessible to those who need it.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedGroup
            animation="float"
            baseDelay={300}
            staggerDelay={100}
            className={styles.philosophyRight}
          >
            {systemDesigns.map((design) => (
              <div key={design.text} className={styles.designCard}>
                <div className={styles.designIcon}>{design.icon}</div>
                <span className={styles.designText}>{design.text}</span>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Principles Section */}
      <section className={styles.principlesSection}>
        <div className={styles.principlesContent}>
          <div className={styles.principlesHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabelDark}>
                <span className={styles.labelDotDark} />
                Pricing Principles
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                How We <span className={styles.titleAccent}>Price</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="flip" baseDelay={200} staggerDelay={150} className={styles.principlesGrid}>
            {principles.map((principle) => (
              <div key={principle.title} className={styles.principleCard}>
                <div className={styles.principleIcon}>{principle.icon}</div>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleText}>{principle.text}</p>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Statement Section */}
      <section className={styles.statementSection}>
        <div className={styles.statementContent}>
          <AnimatedSection animation="zoom" delay={0}>
            <div className={styles.statementBox}>
              <h2 className={styles.statementQuote}>
                Intelligence should be <span className={styles.statementAccent}>affordable, practical, and sustainable</span>.
              </h2>
              <p className={styles.statementSubtext}>
                Pricing varies by product and deployment, but our philosophy remains consistent.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="slide-up" delay={0}>
            <h2 className={styles.ctaTitle}>Ready to get started?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100}>
            <p className={styles.ctaText}>Contact us to discuss your specific needs and requirements.</p>
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
