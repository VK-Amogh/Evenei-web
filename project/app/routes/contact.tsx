import type { Route } from "./+types/contact";
import { generatePageMeta, generateBreadcrumbSchema, JsonLd, SEO } from "~/lib/seo";
import { Link, Form, useActionData, useNavigation } from "react-router";
import {
  Mail,
  Users,
  Code2,
  Handshake,
  Building2,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Send,
  User,
  AtSign,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { supabase } from "~/lib/supabase";
import nodemailer from "nodemailer";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./contact.module.css";

// Gmail SMTP transporter (server-side only)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "amogh.vk.0248@gmail.com",
    pass: "ryzf rmzj qqll urtz",
  },
});

export function meta({ }: Route.MetaArgs) {
  return generatePageMeta({
    title: "Contact EvenEi — Get in Touch About Everyday Intelligence",
    description:
      "Contact EvenEi Private Limited for general inquiries, partnerships, press, or collaboration. We welcome conversations about Everyday Intelligence.",
    path: "/contact",
  });
}

// Server action to handle form submission
export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Server-side validation
  const errors: Record<string, string> = {};
  if (!name || name.trim().length < 2) {
    errors.name = "Please enter your full name";
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!subject || subject.trim().length < 3) {
    errors.subject = "Please enter a subject";
  }
  if (!message || message.trim().length < 10) {
    errors.message = "Please enter a message (at least 10 characters)";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    // 1. Save to Supabase
    const { error } = await supabase.from("contact_messages").insert({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return {
        success: false,
        errors: { form: "Something went wrong. Please try again later." },
      };
    }

    // 2. Send email notification
    try {
      await transporter.sendMail({
        from: `"EvenEi Contact Form" <amogh.vk.0248@gmail.com>`,
        to: "amogh.vk.0248@gmail.com",
        replyTo: email.trim(),
        subject: `[EvenEi Contact] ${subject.trim()}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0a0a0a; color: #ffffff; border-radius: 16px;">
            <div style="border-bottom: 2px solid #137e3e; padding-bottom: 20px; margin-bottom: 24px;">
              <h2 style="margin: 0; color: #137e3e; font-size: 24px;">New Contact Form Submission</h2>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 6px;">Name</p>
              <p style="margin: 0; font-size: 16px; color: #fff;">${name.trim()}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 6px;">Email</p>
              <p style="margin: 0; font-size: 16px;"><a href="mailto:${email.trim()}" style="color: #2ecc71; text-decoration: none;">${email.trim()}</a></p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 6px;">Subject</p>
              <p style="margin: 0; font-size: 16px; color: #fff;">${subject.trim()}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 6px;">Message</p>
              <div style="background: #141414; border: 1px solid #1e1e1e; border-radius: 12px; padding: 20px; margin-top: 8px;">
                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: rgba(255,255,255,0.85); white-space: pre-wrap;">${message.trim()}</p>
              </div>
            </div>
            <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #1e1e1e; text-align: center;">
              <p style="color: #555; font-size: 12px; margin: 0;">Sent via EvenEi Contact Form</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      // Email failed but Supabase succeeded — still count as success
      console.error("Email send error:", emailError);
    }

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      success: false,
      errors: { form: "Something went wrong. Please try again later." },
    };
  }
}

const audiences = [
  { icon: <GraduationCap />, text: "Researchers" },
  { icon: <Code2 />, text: "Developers" },
  { icon: <Handshake />, text: "Partners" },
  { icon: <Building2 />, text: "Investors" },
  { icon: <Users />, text: "Institutions" },
];

const contactMethods = [
  {
    icon: <Mail />,
    title: "General Inquiries",
    text: "For general questions about EvenEi, our work, or potential collaboration opportunities.",
  },
  {
    icon: <Handshake />,
    title: "Partnerships",
    text: "Interested in partnering with us? We're open to meaningful collaborations that align with our mission.",
  },
  {
    icon: <MessageSquare />,
    title: "Press & Media",
    text: "For press inquiries, interviews, or media-related questions about EvenEi and our technology.",
  },
];

export default function Contact({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <main className={styles.container}>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: SEO.siteUrl },
          { name: "Contact", url: `${SEO.siteUrl}/contact` },
        ])}
      />
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
                <span className={styles.breadcrumbCurrent}>Contact</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="elastic" delay={100}>
              <h1 className={styles.heroTitle}>
                Get In <span className={styles.heroTitleAccent}>Touch</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <p className={styles.heroDescription}>
                We welcome conversations with researchers, developers, partners, investors, and institutions
                interested in Everyday Intelligence.
              </p>
            </AnimatedSection>
          </div>

          <div className={styles.heroRight}>
            <AnimatedGroup animation="glide" baseDelay={300} staggerDelay={80}>
              {audiences.map((audience) => (
                <div key={audience.text} className={styles.audienceCard}>
                  <div className={styles.audienceIcon}>{audience.icon}</div>
                  <span className={styles.audienceText}>{audience.text}</span>
                </div>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className={styles.methodsSection}>
        <div className={styles.methodsContent}>
          <div className={styles.methodsHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabelDark}>
                <span className={styles.labelDotDark} />
                How to Reach Us
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                Contact <span className={styles.titleAccent}>Methods</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="flip" baseDelay={200} staggerDelay={150} className={styles.methodsGrid}>
            {contactMethods.map((method) => (
              <div key={method.title} className={styles.methodCard}>
                <div className={styles.methodIcon}>{method.icon}</div>
                <h3 className={styles.methodTitle}>{method.title}</h3>
                <p className={styles.methodText}>{method.text}</p>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formSectionContent}>
          <div className={styles.formHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                Send Us a Message
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitle}>
                We'd Love to <span className={styles.heroTitleAccent}>Hear From You</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={200}>
              <p className={styles.formSubtitle}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-up" delay={300}>
            <div className={styles.formContainer}>
              {actionData?.success ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIconWrapper}>
                    <CheckCircle size={48} />
                  </div>
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <Link to="/contact" className={styles.successButton}>
                    Send Another Message
                  </Link>
                </div>
              ) : (
                <Form method="post" className={styles.form}>
                  {actionData?.errors?.form && (
                    <div className={styles.formError}>
                      <AlertCircle size={18} />
                      <span>{actionData.errors.form}</span>
                    </div>
                  )}

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-name" className={styles.formLabel}>
                        <User size={16} />
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className={`${styles.formInput} ${actionData?.errors?.name ? styles.formInputError : ""}`}
                        required
                        minLength={2}
                      />
                      {actionData?.errors?.name && (
                        <span className={styles.fieldError}>{actionData.errors.name}</span>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="contact-email" className={styles.formLabel}>
                        <AtSign size={16} />
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className={`${styles.formInput} ${actionData?.errors?.email ? styles.formInputError : ""}`}
                        required
                      />
                      {actionData?.errors?.email && (
                        <span className={styles.fieldError}>{actionData.errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-subject" className={styles.formLabel}>
                      <FileText size={16} />
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="What is this regarding?"
                      className={`${styles.formInput} ${actionData?.errors?.subject ? styles.formInputError : ""}`}
                      required
                      minLength={3}
                    />
                    {actionData?.errors?.subject && (
                      <span className={styles.fieldError}>{actionData.errors.subject}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message" className={styles.formLabel}>
                      <MessageSquare size={16} />
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us more about your inquiry, review, or how you'd like to collaborate..."
                      rows={6}
                      className={`${styles.formTextarea} ${actionData?.errors?.message ? styles.formInputError : ""}`}
                      required
                      minLength={10}
                    />
                    {actionData?.errors?.message && (
                      <span className={styles.fieldError}>{actionData.errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.submitSpinner} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </Form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContent}>
          <AnimatedSection animation="zoom" delay={0}>
            <h2 className={styles.philosophyQuote}>
              EvenEi values <span className={styles.philosophyAccent}>meaningful conversations</span> over cold outreach.
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200}>
            <p className={styles.philosophySubtext}>
              If you are interested in Everyday Intelligence, intelligent systems, or collaboration, reach out to us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="slide-up" delay={0}>
            <h2 className={styles.ctaTitle}>Ready to explore Everyday Intelligence?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100}>
            <p className={styles.ctaText}>Return to our homepage to learn more about our mission and work.</p>
          </AnimatedSection>
          <AnimatedSection animation="wave" delay={200}>
            <Link to="/" className={styles.ctaButton}>
              <span>Back to Home</span>
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
