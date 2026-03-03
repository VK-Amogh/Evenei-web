import type { Route } from "./+types/home";
import { Link } from "react-router";
import styles from "./home.module.css";
import classNames from "classnames";
import {
  ArrowRight,
  Brain,
  Cpu,
  Eye,
  Layers,
  Lightbulb,
  Lock,
  Sparkles,
  Target,
  User,
  Zap,
  BookOpen,
  Heart,
  Building2,
  Wrench,
  FlaskConical,
  Accessibility,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import {
  AnimatedSection,
  AnimatedGroup,
} from "~/components/animated-section/animated-section";
import { Footer } from "~/components/footer/footer";

// --- Sections ---

function HeroSection() {
  return (
    <section className={classNames(styles.section, styles.heroSection)}>
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
          <div className={styles.heroTagline}>
            <Sparkles className={styles.taglineIcon} />
            <span>Redefining Intelligence</span>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="elastic" delay={100}>
          <h1 className={styles.heroTitle}>
            Even<span className={styles.highlightEi}>Ei</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="motion-blur-up" delay={200}>
          <h2 className={styles.heroSubtitle}>
            Building <span className={styles.highlightText}>Everyday Intelligence</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={350}>
          <p className={styles.heroDescription}>
            Designing intelligent systems that integrate naturally into everyday life — not just AI models, but
            intelligence that works quietly, responsibly, and at scale.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="wave" delay={500}>
          <div className={styles.heroButtons}>
            <Link to="/vision" className={styles.primaryButton}>
              <span>Explore Our Vision</span>
              <ArrowRight className={styles.buttonIcon} />
            </Link>
            <Link to="/about" className={styles.secondaryButton}>
              <span>Learn More</span>
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="morph" delay={700}>
          <div className={styles.heroStats}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatValue}>AI-First</span>
              <span className={styles.heroStatLabel}>Architecture</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatValue}>Privacy</span>
              <span className={styles.heroStatLabel}>By Design</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatValue}>Human</span>
              <span className={styles.heroStatLabel}>Centered</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function WhatIsSection() {
  const features = [
    {
      icon: <Brain />,
      title: "Context-Aware",
      text: "Understands your environment and adapts intelligently to your needs",
    },
    {
      icon: <Layers />,
      title: "System-Integrated",
      text: "Seamlessly embedded into workflows and processes you already use",
    },
    {
      icon: <User />,
      title: "Human-Centered",
      text: "Designed around people, not technology constraints or limitations",
    },
  ];

  return (
    <section className={classNames(styles.section, styles.bgGray)}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <AnimatedSection animation="motion-blur-left" delay={0}>
            <span className={styles.sectionLabel}>
              <span className={styles.labelDot} />
              The Concept
            </span>
          </AnimatedSection>
          <AnimatedSection animation="slide-right" delay={100}>
            <h2 className={styles.sectionTitle}>
              What is <span className={styles.titleAccent}>Everyday Intelligence</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200}>
            <p className={styles.sectionText}>
              Everyday Intelligence (EI) is intelligence designed to work in daily life — embedded into systems,
              workflows, and experiences rather than existing as isolated tools or chat interfaces.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedGroup
          animation="flip"
          baseDelay={300}
          staggerDelay={150}
          className={styles.featureGrid}
        >
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.text}</p>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

function WhyDifferentSection() {
  const principles = [
    {
      icon: <Target />,
      title: "User Experience First",
      text: "We prioritize how intelligence feels to use over raw benchmarks",
      number: "01",
    },
    {
      icon: <Zap />,
      title: "Best Models, Wrapped",
      text: "Leveraging top AI models inside thoughtfully designed systems",
      number: "02",
    },
    {
      icon: <Eye />,
      title: "Invisible Impact",
      text: "Intelligence that supports without distraction or cognitive load",
      number: "03",
    },
    {
      icon: <Lock />,
      title: "Privacy by Design",
      text: "Ethical, responsible, and respectful of user data at every layer",
      number: "04",
    },
  ];

  return (
    <section className={classNames(styles.section, styles.bgWhite)}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <AnimatedSection animation="motion-blur-right" delay={0}>
            <span className={styles.sectionLabelDark}>
              <span className={styles.labelDotDark} />
              Our Approach
            </span>
          </AnimatedSection>
          <AnimatedSection animation="slide-left" delay={100}>
            <h2 className={styles.sectionTitleDark}>
              Beyond <span className={styles.titleAccentDark}>Model-Only AI</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="cascade" delay={200}>
            <p className={styles.sectionTextDark}>
              Most AI companies focus on building models that require users to adapt. EvenEi builds intelligent systems
              that adapt to users.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedGroup
          animation="swing"
          baseDelay={300}
          staggerDelay={120}
          className={styles.principleGrid}
        >
          {principles.map((principle) => (
            <div key={principle.title} className={styles.principleCard}>
              <span className={styles.principleNumber}>{principle.number}</span>
              <div className={styles.principleIcon}>{principle.icon}</div>
              <div className={styles.principleContent}>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleText}>{principle.text}</p>
              </div>
              <ArrowUpRight className={styles.principleArrow} />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

function FromAISection() {
  return (
    <section className={classNames(styles.section, styles.bgDeepBlack)}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <AnimatedSection animation="glide" delay={0}>
            <span className={styles.sectionLabel}>
              <span className={styles.labelDot} />
              The Shift
            </span>
          </AnimatedSection>
          <AnimatedSection animation="letter-spacing" delay={100}>
            <h2 className={styles.sectionTitle}>
              From AI Tools to <span className={styles.titleAccent}>Living Intelligence</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className={styles.comparisonGrid}>
          <AnimatedSection animation="motion-blur-left" delay={200}>
            <div className={styles.comparisonCard}>
              <div className={styles.comparisonHeader}>
                <div className={styles.comparisonIconOld}>
                  <Cpu />
                </div>
                <span className={styles.comparisonBadgeOld}>Traditional</span>
              </div>
              <h3 className={styles.comparisonTitle}>Traditional AI</h3>
              <ul className={styles.comparisonList}>
                <li>Tools you open manually</li>
                <li>Prompts you write repeatedly</li>
                <li>Outputs you interpret</li>
                <li>Context-switching overhead</li>
              </ul>
              <div className={styles.comparisonFooter}>
                <span className={styles.comparisonLabel}>User adapts to AI</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="pulse-grow" delay={400}>
            <div className={styles.comparisonDivider}>
              <div className={styles.comparisonArrow}>
                <ArrowRight />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="motion-blur-right" delay={300}>
            <div className={classNames(styles.comparisonCard, styles.comparisonCardHighlight)}>
              <div className={styles.comparisonHeader}>
                <div className={styles.comparisonIconNew}>
                  <Lightbulb />
                </div>
                <span className={styles.comparisonBadgeNew}>EvenEi</span>
              </div>
              <h3 className={styles.comparisonTitle}>Everyday Intelligence</h3>
              <ul className={styles.comparisonList}>
                <li>Lives inside your systems</li>
                <li>Remembers full context</li>
                <li>Understands environments</li>
                <li>Improves continuously</li>
              </ul>
              <div className={styles.comparisonFooter}>
                <span className={styles.comparisonLabelHighlight}>AI adapts to user</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ScopeSection() {
  const domains = [
    { icon: <Zap />, label: "Personal productivity" },
    { icon: <BookOpen />, label: "Education and learning" },
    { icon: <Heart />, label: "Healthcare" },
    { icon: <Building2 />, label: "Enterprise systems" },
    { icon: <Wrench />, label: "Field work and operations" },
    { icon: <FlaskConical />, label: "Research and development" },
    { icon: <Accessibility />, label: "Assistive technologies" },
  ];

  return (
    <section className={classNames(styles.section, styles.bgGray)}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <AnimatedSection animation="rotate" delay={0}>
            <span className={styles.sectionLabel}>
              <span className={styles.labelDot} />
              Application Areas
            </span>
          </AnimatedSection>
          <AnimatedSection animation="motion-blur-up" delay={100}>
            <h2 className={styles.sectionTitle}>
              Where Everyday Intelligence <span className={styles.titleAccent}>Matters</span>
            </h2>
          </AnimatedSection>
        </div>

        <AnimatedGroup
          animation="float"
          baseDelay={200}
          staggerDelay={80}
          className={styles.domainGrid}
        >
          {domains.map((domain) => (
            <div key={domain.label} className={styles.domainCard}>
              <div className={styles.domainIcon}>{domain.icon}</div>
              <span className={styles.domainLabel}>{domain.label}</span>
              <ArrowUpRight className={styles.domainArrow} />
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}

function CompanySection() {
  const stats = [
    { number: "01", label: "Vision", description: "One unified goal" },
    { number: "∞", label: "Possibilities", description: "Endless potential" },
    { number: "24/7", label: "Availability", description: "Always ready" },
    { number: "100%", label: "Privacy", description: "Fully secure" },
  ];

  return (
    <section className={classNames(styles.section, styles.bgWhite)}>
      <div className={styles.sectionContent}>
        <div className={styles.companyLayout}>
          <div className={styles.companyInfo}>
            <AnimatedSection animation="slide-left" delay={0}>
              <span className={styles.sectionLabelDark}>
                <span className={styles.labelDotDark} />
                About EvenEi
              </span>
            </AnimatedSection>
            <AnimatedSection animation="morph" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                A <span className={styles.titleAccentDark}>Systems</span> Company
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="cascade" delay={200}>
              <p className={styles.sectionTextDark}>
                EvenEi is built as a long-term systems company, not a single-product startup. We focus on strong
                architectural foundations and ethical, privacy-first intelligence.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={300}>
              <p className={styles.sectionTextDark}>
                Our approach prioritizes scalable system design and practical deployment over hype. Projects like Specular
                exist under EvenEi as manifestations of this philosophy.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedGroup
            animation="spiral"
            baseDelay={200}
            staggerDelay={100}
            className={styles.statsGridNew}
          >
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statNumberNew}>{stat.number}</span>
                <span className={styles.statLabelNew}>{stat.label}</span>
                <span className={styles.statDescription}>{stat.description}</span>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className={classNames(styles.section, styles.bgDeepBlack)}>
      <div className={styles.sectionContent}>
        <div className={styles.sectionHeader}>
          <AnimatedSection animation="shimmer" delay={0}>
            <span className={styles.sectionLabel}>
              <span className={styles.labelDot} />
              Innovation
            </span>
          </AnimatedSection>
          <AnimatedSection animation="elastic" delay={100}>
            <h2 className={styles.sectionTitle}>
              Featured <span className={styles.titleAccent}>Products</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className={styles.productsGrid}>
          <AnimatedSection animation="slide-up" delay={200}>
            <div className={styles.productCard}>
              <div className={styles.productContent}>
                <div className={styles.productIconWrapper}>
                  <Sparkles className={styles.productIcon} />
                </div>
                <h3 className={styles.productTitle}>Project Specular</h3>
                <p className={styles.productDesc}>
                  The world’s first memory-based smart glasses — designed to capture, understand, and recall real life, automatically. acts as your external memory layer, turning everyday experiences into searchable context.
                </p>
                <a href="/products" className={styles.productLink}>
                  <span>Explore Project Specular</span>
                  <ArrowRight className={styles.linkArrow} />
                </a>
              </div>
              <div className={styles.productVisual}>
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
                      <div className={styles.lensReflection} />
                    </div>
                    <div className={styles.bridge} />
                    <div className={styles.lensRight}>
                      <div className={styles.hudOverlay}>
                        <div className={styles.hudReticle} />
                        <div className={styles.hudDataRight} />
                      </div>
                      <div className={styles.lensReflection} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className={classNames(styles.section, styles.visionSection, styles.bgGray)}>
      <div className={styles.visionContent}>
        <AnimatedSection animation="zoom" delay={0}>
          <h2 className={styles.visionQuote}>
            <span className={styles.quoteOpen}>"</span>
            Intelligence should fit into life — not the other way around.
            <span className={styles.quoteClose}>"</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection animation="motion-blur-up" delay={200}>
          <p className={styles.visionText}>We are building the future quietly and correctly.</p>
        </AnimatedSection>
        <AnimatedSection animation="wave" delay={400}>
          <button className={styles.primaryButton}>
            <span>Join the Journey</span>
            <ArrowRight className={styles.buttonIcon} />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "EvenEi - Building Everyday Intelligence" },
    {
      name: "description",
      content:
        "EvenEi is a technology company focused on designing intelligent systems that integrate naturally into everyday life.",
    },
  ];
}

export default function Home() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <WhatIsSection />
      <WhyDifferentSection />
      <FromAISection />
      <ScopeSection />
      <CompanySection />
      <ProductsSection />
      <VisionSection />
      <Footer />
    </main>
  );
}
