import { useNavigate } from 'react-router';
import { motion, type Variants } from 'motion/react';
import {
    Brain,
    Zap,
    Shield,
    Target,
    Layers,
    CheckCircle2,
    Cpu,
    Smartphone,
    Server,
    TrendingDown,
    RefreshCw,
    Lock,
    Eye,
    Activity,
    Briefcase,
    Search,
    Wrench,
    BookOpen,
    ArrowLeft,
    AlertOctagon,
    Lightbulb
} from 'lucide-react';
import ShinyText from '~/components/specular/shiny-text/ShinyText';
import styles from './specular.funding.module.css';

export function meta() {
    return [
        { title: "Why SpecEI Deserves Funding - System Architecture & Vision" },
        { name: "description", content: "Detailed breakdown of why SpecEI's software-first architecture, realistic use cases, and ethical design make it a fundable and scalable intelligent wearable platform." },
    ];
}

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const pulseAnimation: Variants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, filter: "drop-shadow(0 0 8px rgba(19, 126, 62, 0.6))", transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" } }
};

const rotateAnimation: Variants = {
    initial: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 1, ease: "easeInOut" } }
};

const scanAnimation: Variants = {
    initial: { clipPath: "inset(0 0 100% 0)" },
    hover: { clipPath: "inset(0 0 0 0)", transition: { duration: 0.8, ease: "linear", repeat: Infinity, repeatType: "loop" } }
};

// Custom animated components
const AnimatedShield = () => (
    <motion.div variants={pulseAnimation} initial="initial" whileHover="hover" style={{ display: 'inline-block' }}>
        <Shield size={24} className={styles.privacyIcon} />
    </motion.div>
);

const AnimatedLock = () => (
    <motion.div whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }} style={{ display: 'inline-block' }}>
        <Lock size={24} className={styles.privacyIcon} />
    </motion.div>
);

const AnimatedServer = () => (
    <motion.div whileHover={{ scale: 1.1 }} style={{ display: 'inline-block', position: 'relative' }}>
        <Server size={24} className={styles.privacyIcon} />
        <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: [0, 1, 0], transition: { duration: 1, repeat: Infinity } }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, border: '2px solid #137e3e', borderRadius: '4px' }}
        />
    </motion.div>
);

const AnimatedEye = () => (
    <motion.div style={{ display: 'inline-block' }}>
        <motion.div animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <Eye size={24} className={styles.privacyIcon} />
        </motion.div>
    </motion.div>
);

const AnimatedAlert = () => (
    <motion.div
        animate={{ rotate: [0, -5, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        style={{ marginBottom: '15px', color: '#ef4444' }}
    >
        <AlertOctagon size={40} />
    </motion.div>
);

const AnimatedIdea = () => (
    <motion.div
        animate={{ filter: ["drop-shadow(0 0 0px rgba(19, 126, 62, 0))", "drop-shadow(0 0 10px rgba(19, 126, 62, 0.6))", "drop-shadow(0 0 0px rgba(19, 126, 62, 0))"] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ marginBottom: '15px', color: '#137e3e' }}
    >
        <Lightbulb size={40} />
    </motion.div>
);

export default function Funding() {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <nav className={styles.nav}>
                <button onClick={() => navigate(-1)} className={styles.backButton}>
                    <ArrowLeft size={20} className={styles.backIcon} />
                    <span>Back to Home</span>
                </button>
            </nav>

            <div className={styles.container}>
                <header className={styles.header}>
                    <motion.span variants={fadeInUp} initial="hidden" animate="visible" className={styles.sectionTag}>Project Specular</motion.span>
                    <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                        <h1 className={styles.title}>
                            <ShinyText text="Why SpecEI Deserves Funding" disabled={false} speed={3} className="" />
                        </h1>
                    </motion.div>
                    <motion.p variants={fadeInUp} initial="hidden" animate="visible" className={styles.subtitle}>
                        SpecEI is not just a smart glasses project. It is a system-level exploration of how intelligent wearables should be built in a practical, ethical, and scalable way.
                    </motion.p>
                </header>

                <motion.section variants={fadeInUp} initial="hidden" animate="visible" className={styles.mainSection}>
                    <div className={styles.grid2}>
                        <div className={styles.card}>
                            <AnimatedAlert />
                            <h3 className={styles.cardTitle}>The Core Problem</h3>
                            <p className={styles.cardText}>
                                Most smart glasses today fail not because of lack of technology, but because of poor architectural decisions. They rely on heavy hardware, expensive processors, high power consumption, and rigid designs that are difficult to upgrade or scale.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <AnimatedIdea />
                            <h3 className={styles.cardTitle}>The SpecEI Solution</h3>
                            <p className={styles.cardText}>
                                SpecEI directly addresses these issues by adopting a software-first, hardware-minimal architecture. Intelligence is distributed across the system instead of being locked into the device itself. This allows SpecEI to remain lightweight, energy-efficient, cost-effective, and continuously improvable.
                            </p>
                        </div>
                    </div>

                    <div className={styles.featureList}>
                        <h3 className={styles.sectionTitle}>Key Differentiators</h3>
                        <div className={styles.featureGrid}>
                            <motion.div className={styles.featureItem} whileHover="hover">
                                <motion.div variants={{ hover: { y: [0, -3, 3, -3, 0], transition: { duration: 0.5 } } }}>
                                    <Layers className={styles.featureIcon} size={24} />
                                </motion.div>
                                <span>Strong system-level engineering</span>
                            </motion.div>
                            <motion.div className={styles.featureItem} whileHover="hover">
                                <motion.div variants={{ hover: { scale: [1, 1.2, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"], transition: { duration: 0.6, repeat: Infinity } } }}>
                                    <Cpu className={styles.featureIcon} size={24} />
                                </motion.div>
                                <span>Clear architectural differentiation</span>
                            </motion.div>
                            <motion.div className={styles.featureItem} whileHover="hover">
                                <motion.div variants={{ hover: { scale: [1, 0.8, 1.1, 1], transition: { duration: 0.4 } } }}>
                                    <Target className={styles.featureIcon} size={24} />
                                </motion.div>
                                <span>Practical implementation</span>
                            </motion.div>
                            <motion.div className={styles.featureItem} whileHover="hover">
                                <motion.div variants={{ hover: { rotate: [0, 10, -10, 0], scale: 1.1, transition: { duration: 0.5 } } }}>
                                    <Activity className={styles.featureIcon} size={24} />
                                </motion.div>
                                <span>Scalability beyond a single product</span>
                            </motion.div>
                            <motion.div className={styles.featureItem} whileHover="hover">
                                <motion.div variants={{ hover: { opacity: [1, 0.5, 1], scale: [1, 1.1, 1], transition: { duration: 0.3, repeat: Infinity } } }}>
                                    <Zap className={styles.featureIcon} size={24} />
                                </motion.div>
                                <span>Alignment with future AI trends</span>
                            </motion.div>
                            <motion.div className={styles.featureItem} whileHover="hover">
                                <motion.div variants={{ hover: { scale: 1.1, filter: "drop-shadow(0 0 5px #137e3e)", transition: { duration: 0.3 } } }}>
                                    <Shield className={styles.featureIcon} size={24} />
                                </motion.div>
                                <span>Ethical and privacy-first design</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <motion.section variants={fadeInUp} className={styles.section}>
                    <h2 className={styles.sectionHeader}>
                        <ShinyText text="How SpecEI is Different" disabled={false} speed={3} className="" />
                    </h2>
                    <p className={styles.sectionDesc}>SpecEI fundamentally differs from current smart glasses by changing the architecture, not by adding more hardware.</p>

                    <div className={styles.comparisonContainer}>
                        <div className={`${styles.comparisonColumn} ${styles.currentTech}`}>
                            <h3 className={styles.columnTitle}>Current Smart Glasses</h3>
                            <p className={styles.columnDesc}>Hardware-First Model</p>
                            <ul>
                                <li><span className={styles.bulletRed}>•</span> Powerful onboard processors</li>
                                <li><span className={styles.bulletRed}>•</span> Heavy batteries & bulk</li>
                                <li><span className={styles.bulletRed}>•</span> Expensive (High entry barrier)</li>
                                <li><span className={styles.bulletRed}>•</span> Obsolete quickly</li>
                                <li><span className={styles.bulletRed}>•</span> Fixed capabilities</li>
                            </ul>
                        </div>
                        <div className={`${styles.comparisonColumn} ${styles.specTech}`}>
                            <h3 className={styles.columnTitle}>SpecEI Architecture</h3>
                            <p className={styles.columnDesc}>Software-First Model</p>
                            <ul>
                                <li><span className={styles.bulletGreen}>•</span> Distributed intelligence</li>
                                <li><span className={styles.bulletGreen}>•</span> Lightweight & efficient</li>
                                <li><span className={styles.bulletGreen}>•</span> 3-5x Cheaper</li>
                                <li><span className={styles.bulletGreen}>•</span> Improves via software updates</li>
                                <li><span className={styles.bulletGreen}>•</span> Long-term system lifespan</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.infoBlock}>
                        <TrendingDown size={32} className={styles.infoIcon} />
                        <div>
                            <h4 className={styles.infoTitle}>Cost Advantage</h4>
                            <p className={styles.infoText}>
                                Because of this architectural shift, SpecEI can be significantly cheaper. <br />
                                <span className={styles.highlight}>Entry-level: &lt; 8000 INR</span> | <span className={styles.highlight}>Advanced: &lt; 20000 INR</span>
                            </p>
                        </div>
                    </div>
                </motion.section>

                <motion.section variants={fadeInUp} className={styles.section}>
                    <h2 className={styles.sectionHeader}>
                        <ShinyText text="Real World Use Cases" disabled={false} speed={3} className="" />
                    </h2>

                    <div className={styles.useCaseGrid}>
                        <motion.div className={styles.useCaseCard} whileHover="hover">
                            <motion.div variants={{ hover: { scale: [1, 1.1, 1], filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"], transition: { duration: 2, repeat: Infinity } } }}>
                                <Brain size={32} className={styles.useCaseIcon} />
                            </motion.div>
                            <h4>Everyday & Personal</h4>
                            <p>Daily memory recall, hands-free assistance, study aid, and managing information overload.</p>
                        </motion.div>

                        <motion.div className={styles.useCaseCard} whileHover="hover">
                            <motion.div variants={{ hover: { y: [0, -5, 0], scale: [1, 1.1, 1], transition: { duration: 1, repeat: Infinity } } }}>
                                <Activity size={32} className={styles.useCaseIcon} />
                            </motion.div>
                            <h4>Healthcare</h4>
                            <p>Hands-free clinical documentation, procedure reference, and medical education in sterile environments.</p>
                        </motion.div>

                        <motion.div className={styles.useCaseCard} whileHover="hover">
                            <motion.div variants={pulseAnimation}>
                                <Shield size={32} className={styles.useCaseIcon} />
                            </motion.div>
                            <h4>Defence & Security</h4>
                            <p>Situational awareness, field documentation, and secure post-operation analysis.</p>
                        </motion.div>

                        <motion.div className={styles.useCaseCard} whileHover="hover">
                            <motion.div variants={{ hover: { rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } } }}>
                                <Briefcase size={32} className={styles.useCaseIcon} />
                            </motion.div>
                            <h4>Enterprises & MNCs</h4>
                            <p>Field inspections, knowledge retention, training auditing, and operational transparency.</p>
                        </motion.div>

                        <motion.div className={styles.useCaseCard} whileHover="hover">
                            <motion.div variants={{ hover: { scale: 1.2, x: [0, 5, -5, 0], transition: { duration: 0.8 } } }}>
                                <Search size={32} className={styles.useCaseIcon} />
                            </motion.div>
                            <h4>Investigation</h4>
                            <p>Time-stamped evidence capture, contextual tagging, and structured media for faster review.</p>
                        </motion.div>

                        <motion.div className={styles.useCaseCard} whileHover="hover">
                            <motion.div variants={{ hover: { rotate: 360, transition: { duration: 1, ease: "easeInOut" } } }}>
                                <Wrench size={32} className={styles.useCaseIcon} />
                            </motion.div>
                            <h4>Industrial</h4>
                            <p>Process monitoring, quality control, safety training, and assembly documentation.</p>
                        </motion.div>

                        <motion.div className={styles.useCaseCard} whileHover="hover">
                            <motion.div variants={{ hover: { scaleX: [1, 0.1, 1], transition: { duration: 0.6 } } }}>
                                <BookOpen size={32} className={styles.useCaseIcon} />
                            </motion.div>
                            <h4>R&D</h4>
                            <p>Platform for AI research, context-aware systems, and human-AI interaction studies.</p>
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section variants={fadeInUp} className={styles.section}>
                    <h2 className={styles.sectionHeader}>
                        <ShinyText text="Privacy & Ethics" disabled={false} speed={3} className="" />
                    </h2>
                    <div className={styles.privacyBox}>
                        <motion.div whileHover={{ y: -5 }} className={styles.privacyItem}>
                            <AnimatedLock />
                            <span>User-owned data</span>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className={styles.privacyItem}>
                            <AnimatedShield />
                            <span>Explicit permissions</span>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className={styles.privacyItem}>
                            <AnimatedServer />
                            <span>Local processing</span>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className={styles.privacyItem}>
                            <AnimatedEye />
                            <span>Transparent behavior</span>
                        </motion.div>
                    </div>
                </motion.section>

                <section className={styles.finalSection}>
                    <h2 className={styles.finalTitle}>Why Funding Matters Now</h2>
                    <div className={styles.fundingList}>
                        <p>The architecture is defined. The system is feasible. The vision is clear.</p>
                        <p>Funding enables: Hardware refinement, AI optimization, Pilot deployments, Security hardening, and Scaling.</p>
                    </div>

                    <div className={styles.finalStatement}>
                        <p>SpecEI represents a shift from gadget-focused design to system-focused intelligence.</p>
                        <p>It is not about adding more hardware. It is about building smarter, more responsible systems.</p>
                        <p className={styles.finalHighlight}>Funding SpecEI means supporting better engineering decisions and a long-term vision for intelligent wearables.</p>
                    </div>
                </section>

                <footer className={styles.footer}>
                    <span>© 2025 SpecEI Project</span>
                </footer>
            </div>
        </div>
    );
}
