import type { Route } from "./+types/blog";
import { Link } from "react-router";
import {
  PenTool,
  Layers,
  Brain,
  Shield,
  Globe,
  ArrowRight,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./blog.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - EvenEi" },
    {
      name: "description",
      content: "The EvenEi blog explores ideas behind Everyday Intelligence.",
    },
  ];
}

const topics = [
  { icon: <Layers />, text: "System design" },
  { icon: <Brain />, text: "Applied AI" },
  { icon: <Lightbulb />, text: "Human-centered technology" },
  { icon: <Shield />, text: "Ethics and privacy" },
  { icon: <Globe />, text: "Real-world intelligence" },
];

const recentPosts = [
  {
    icon: <Brain />,
    title: "The Case for Everyday Intelligence",
    text: "Why we believe intelligence should be embedded, contextual, and human-centered rather than isolated.",
  },
  {
    icon: <Layers />,
    title: "Building Systems, Not Features",
    text: "Our approach to creating sustainable, scalable intelligent systems that stand the test of time.",
  },
  {
    icon: <Shield />,
    title: "Privacy in the Age of AI",
    text: "How we design for privacy from the ground up, not as an afterthought or compliance checkbox.",
  },
];

export default function Blog() {
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
              <span className={styles.breadcrumbCurrent}>Blog</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="elastic" delay={100}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleAccent}>Blog</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <p className={styles.heroDescription}>
              The EvenEi blog explores ideas behind Everyday Intelligence. Our writing reflects how we think:
              clear, grounded, and focused on practical impact.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={300}>
            <div className={styles.heroWritingStyle}>
              <PenTool className={styles.heroWritingStyleIcon} />
              <span>Clear, Grounded, Practical</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Topics Section */}
      <section className={styles.topicsSection}>
        <div className={styles.topicsContent}>
          <div className={styles.topicsHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                What We Write About
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitle}>
                Topics We <span className={styles.titleAccent}>Cover</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="swing" baseDelay={200} staggerDelay={80} className={styles.topicsGrid}>
            {topics.map((topic) => (
              <div key={topic.text} className={styles.topicTag}>
                <span className={styles.topicIcon}>{topic.icon}</span>
                <span className={styles.topicText}>{topic.text}</span>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Posts Section */}
      <section className={styles.postsSection}>
        <div className={styles.postsContent}>
          <div className={styles.postsHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabelDark}>
                <span className={styles.labelDotDark} />
                Featured Posts
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                Recent <span className={styles.titleAccent}>Writing</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="flip" baseDelay={200} staggerDelay={150} className={styles.postsGrid}>
            {recentPosts.map((post) => (
              <div key={post.title} className={styles.postCard}>
                <div className={styles.postIcon}>{post.icon}</div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postText}>{post.text}</p>
                <div className={styles.postMeta}>
                  <span className={styles.postReadMore}>
                    Read More
                    <ArrowRight className={styles.postReadMoreIcon} />
                  </span>
                </div>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Style Section */}
      <section className={styles.styleSection}>
        <div className={styles.styleContent}>
          <AnimatedSection animation="zoom" delay={0}>
            <h2 className={styles.styleQuote}>
              Our writing reflects how we think: <span className={styles.styleAccent}>clear, grounded, and focused on practical impact</span>.
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="slide-up" delay={0}>
            <h2 className={styles.ctaTitle}>Have questions or want to connect?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100}>
            <p className={styles.ctaText}>We welcome meaningful conversations about Everyday Intelligence.</p>
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
