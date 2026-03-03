import { Link } from "react-router";
import { Twitter, Linkedin, Github } from "lucide-react";
import { AnimatedSection } from "~/components/animated-section/animated-section";
import styles from "./footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <AnimatedSection animation="slide-up" delay={0}>
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <Link to="/" className={styles.footerLogo}>
                EvenEi
              </Link>
              <span className={styles.footerTagline}>Building Everyday Intelligence</span>
            </div>

            <nav className={styles.footerNav}>
              <div className={styles.footerNavGroup}>
                <span className={styles.footerNavTitle}>Company</span>
                <Link to="/about" className={styles.footerLink}>
                  About
                </Link>
                <Link to="/founders" className={styles.footerLink}>
                  Founders
                </Link>
                <Link to="/vision" className={styles.footerLink}>
                  Vision
                </Link>
                <Link to="/careers" className={styles.footerLink}>
                  Careers
                </Link>
              </div>
              <div className={styles.footerNavGroup}>
                <span className={styles.footerNavTitle}>Product</span>
                <Link to="/products" className={styles.footerLink}>
                  Products
                </Link>
                <Link to="/features" className={styles.footerLink}>
                  Features
                </Link>
                <Link to="/roadmap" className={styles.footerLink}>
                  Roadmap
                </Link>
                <Link to="/pricing" className={styles.footerLink}>
                  Pricing
                </Link>
              </div>
              <div className={styles.footerNavGroup}>
                <span className={styles.footerNavTitle}>Resources</span>
                <Link to="/documentation" className={styles.footerLink}>
                  Documentation
                </Link>
                <Link to="/blog" className={styles.footerLink}>
                  Blog
                </Link>
                <Link to="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={200}>
          <div className={styles.footerBottom}>
            <p className={styles.footerCopyright}>© {currentYear} EvenEi. All rights reserved.</p>
            <div className={styles.footerSocials}>
              <a href="#" className={styles.footerSocial} aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className={styles.footerSocial} aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="#" className={styles.footerSocial} aria-label="GitHub">
                <Github />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
