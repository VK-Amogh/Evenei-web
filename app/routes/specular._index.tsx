import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import ShinyText from '~/components/specular/shiny-text/ShinyText';
import {
  Scale,
  DollarSign,
  BatteryLow,
  TrendingDown,
  Wrench,
  Brain,
  Feather,
  Zap,
  Wallet,
  RefreshCw,
  Glasses,
  Cpu,
  Radio,
  Smartphone,
  User,
  Link2,
  RotateCcw,
  Bot,
  Search,
  Lock,
  HardDrive,
  Settings,
  BarChart3,
  Camera,
  BookOpen,
  ClipboardList,
  Lightbulb,
  FlaskConical,
  CheckCircle2,
  Shield,
  Eye,
  Layers,
  Sparkles,
  CircuitBoard,
  Target,
  MousePointer,
  ChevronDown
} from 'lucide-react';
import { FaultyTerminal } from '~/components/specular/faulty-terminal/faulty-terminal';
import { BlurText } from '~/components/specular/blur-text/blur-text';
import { ScrollVelocity } from '~/components/specular/scroll-velocity/scroll-velocity';
import { ProblemMarquee } from '~/components/specular/problem-marquee/problem-marquee';
import { ProblemCard } from '~/components/specular/problem-card/problem-card';
import FlowingMenu from '~/components/specular/flowing-menu/FlowingMenu';
import { AnimatedSection } from '~/components/specular/animated-section/animated-section';
import styles from './specular.module.css';

const GRID_MUL: [number, number] = [2, 1];

export function meta() {
  return [
    { title: "SpecEI - AI-Powered Smart Glasses Project" },
    { name: "description", content: "SpecEI is a research and engineering project exploring how intelligent software and thoughtful system design can make smart glasses lightweight, practical, and accessible." },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intro animation state
  const [showIntro, setShowIntro] = useState(true);
  const [introPhase, setIntroPhase] = useState<'text1' | 'text1-fade' | 'text2' | 'text2-fade' | 'overlay-fade' | 'done'>('text1');

  useEffect(() => {
    if (!showIntro) return;

    const timings = {
      text1Duration: 1500,      // Text 1 fade in (longer for smoothness)
      text1Hold: 800,           // Hold text 1
      text1Fade: 1000,          // Text 1 fade out (longer for smoothness)
      text2Duration: 1500,      // Text 2 fade in
      text2Hold: 800,           // Hold text 2
      text2Fade: 1000,          // Text 2 fade out
      overlayFade: 1000,        // Overlay fade out
    };

    const sequence = [
      { phase: 'text1-fade' as const, delay: timings.text1Duration + timings.text1Hold },
      { phase: 'text2' as const, delay: timings.text1Fade },
      { phase: 'text2-fade' as const, delay: timings.text2Duration + timings.text2Hold },
      { phase: 'overlay-fade' as const, delay: timings.text2Fade },
      { phase: 'done' as const, delay: timings.overlayFade },
    ];

    let totalDelay = 0;
    const timeouts: NodeJS.Timeout[] = [];

    sequence.forEach(({ phase, delay }) => {
      totalDelay += delay;
      const timeout = setTimeout(() => {
        setIntroPhase(phase);
        if (phase === 'done') {
          setShowIntro(false);
        }
      }, totalDelay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [showIntro]);

  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <Link to="/" style={{ cursor: 'pointer' }}>
          <img
            src="/logo_final_direct.png"
            alt="EvenEi"
            className={styles.logo}
          />
        </Link>
        <ul className={styles.navLinks}>
          <li><a href="#problem" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('problem'); }}>Problem</a></li>
          <li><a href="#architecture" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('architecture'); }}>Architecture</a></li>
          <li><a href="#models" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('models'); }}>Models</a></li>
          <li><a href="#technology" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('technology'); }}>Technology</a></li>
          <li><a href="#privacy" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('privacy'); }}>Privacy</a></li>
          <li><a href="#funding" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('funding'); }}>Support</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroBackgroundEffect}>
            <FaultyTerminal
              tint="#00ffb3"
              scale={1}
              gridMul={GRID_MUL}
              digitSize={1.5}
              timeScale={0.3}
              scanlineIntensity={0.3}
              glitchAmount={1}
              flickerAmount={1}
              curvature={0.15}
              mouseReact={true}
              mouseStrength={0.25}
              pageLoadAnimation={true}
              brightness={0.8}
            />
          </div>
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          {/* Intro Animation Texts */}
          {(introPhase === 'text1' || introPhase === 'text1-fade') && (
            <span className={`${styles.introText} ${styles.introText1} ${introPhase === 'text1-fade' ? styles.fadeOut : ''}`}>
              <ShinyText text="You forget more than you remember?" disabled={false} speed={3} className="" />
            </span>
          )}
          {(introPhase === 'text2' || introPhase === 'text2-fade') && (
            <span className={`${styles.introText} ${styles.introText2} ${introPhase === 'text2-fade' ? styles.fadeOut : ''}`}>
              <ShinyText text="What if you didn't have to..." disabled={false} speed={3} className="" />
            </span>
          )}

          {/* PROJECT: SPECULAR - shown after intro */}
          {(introPhase === 'overlay-fade' || introPhase === 'done') && (
            <h1 className={`${styles.heroTitle} ${styles.heroTitleFadeIn}`}>
              <div className={styles.projectLabel}>
                <ShinyText text="PROJECT:" disabled={false} speed={3} className="" />
              </div>
              <div className={styles.specularLabel}>
                <ShinyText text="SPECULAR" disabled={false} speed={3} className="" />
              </div>
            </h1>
          )}
        </div>

        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll to explore</span>
          <ChevronDown size={20} className={styles.scrollIcon} />
        </div>
      </section>

      {/* Scroll Velocity Marquee */}
      <div className={styles.marqueeSection}>
        <ScrollVelocity
          texts={['Memory First - "Built to Remember"', 'All-Day Battery', 'Software-First Architecture', 'Designed to Stay Light', '#Built Smarter']}
          velocity={80}
          className={styles.marqueeText}
        />
      </div>

      {/* Problem Section */}
      <section id="problem" className={`${styles.section} ${styles.problemSection}`}>
        <div className={styles.sectionInner}>
          <AnimatedSection animation="slide-up">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>The Problem</span>
              <h2 className={styles.sectionTitle}>
                Why Current Smart Glasses Fail
              </h2>
              <p className={styles.sectionDesc}>
                Most smart glasses today face the same fundamental issues. As a result, they remain niche, costly, and impractical for everyday use. SpecEI exists to challenge this approach.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="zoom" delay={200} className={styles.problemGrid} as="div">
            <FlowingMenu
              items={[
                { link: '#', text: 'Bulky & Uncomfortable', icon: 'scale' },
                { link: '#', text: 'Expensive Hardware', icon: 'dollar' },
                { link: '#', text: 'Poor Battery Life', icon: 'battery' },
                { link: '#', text: 'Quick Obsolescence', icon: 'trending' },
                { link: '#', text: 'Hard to Improve', icon: 'wrench' }
              ]}
              speed={10}
              textColor="#ffffff"
              bgColor="#0f0f0f"
              marqueeBgColor="#ff0000"
              marqueeTextColor="#ffffff"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Core Idea Section */}
      <section className={`${styles.section} ${styles.coreIdeaSection}`}>
        <div className={styles.sectionInner}>
          <AnimatedSection animation="slide-up">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>The Core Idea</span>
              <h2 className={styles.sectionTitle}>
                Software-First Intelligence
              </h2>
              <p className={styles.sectionDesc}>
                SpecEI is based on one core principle: Do not make hardware smarter than it needs to be. Make the system smarter instead.
              </p>
            </div>
          </AnimatedSection>
          <div className={styles.coreIdeaContent}>
            <AnimatedSection animation="rotate" delay={200} className={styles.coreIdeaVisual} as="div">
              <div className={styles.coreIdeaCircle}>
                <Brain size={72} className={styles.coreIdeaIcon} />
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection animation="slide-left" delay={300} className={styles.coreIdeaPrinciples} as="div">
                <div className={styles.corePrinciple}>
                  <p className={styles.corePrincipleText}>
                    SpecEI distributes intelligence across lightweight glasses hardware, efficient embedded firmware, a powerful companion mobile application, and AI-driven software intelligence.
                  </p>
                </div>
              </AnimatedSection>
              <div className={styles.coreFeatures}>
                <AnimatedSection animation="slide-up" delay={400} staggerChildren staggerDelay={100}>
                  <div className={styles.coreFeature}>
                    <Feather size={18} className={styles.coreFeatureIcon} />
                    <span className={styles.coreFeatureText}>Lightweight Design</span>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slide-up" delay={500}>
                  <div className={styles.coreFeature}>
                    <Zap size={18} className={styles.coreFeatureIcon} />
                    <span className={styles.coreFeatureText}>Energy Efficient</span>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slide-up" delay={600}>
                  <div className={styles.coreFeature}>
                    <Wallet size={18} className={styles.coreFeatureIcon} />
                    <span className={styles.coreFeatureText}>Affordable</span>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slide-up" delay={700}>
                  <div className={styles.coreFeature}>
                    <RefreshCw size={18} className={styles.coreFeatureIcon} />
                    <span className={styles.coreFeatureText}>Upgradeable</span>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className={`${styles.section} ${styles.architectureSection}`}>
        <div className={styles.sectionInner}>
          <AnimatedSection animation="slide-up">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>System Architecture</span>
              <h2 className={styles.sectionTitle}>
                Intelligence Flow
              </h2>
              <p className={styles.sectionDesc}>
                This architecture keeps the glasses simple while enabling advanced intelligence. Each component serves a specific purpose in the system.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="cascade" delay={200} className={styles.flowchartContainer} as="div">
            <div className={styles.flowchartGrid}>
              <div className={styles.flowNode}>
                <Glasses size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>Glasses Hardware</span>
                <span className={styles.flowNodeDesc}>Captures visual and audio data</span>
              </div>
              <div className={styles.flowArrow}><ChevronDown size={22} style={{ transform: 'rotate(-90deg)' }} /></div>
              <div className={styles.flowNode}>
                <Cpu size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>Embedded Firmware</span>
                <span className={styles.flowNodeDesc}>Buffering, power management</span>
              </div>
              <div className={styles.flowArrow}><ChevronDown size={22} style={{ transform: 'rotate(-90deg)' }} /></div>
              <div className={styles.flowNode}>
                <Radio size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>Wireless Comm</span>
                <span className={styles.flowNodeDesc}>Securely transmits data</span>
              </div>
              <div className={styles.flowArrow}><ChevronDown size={22} style={{ transform: 'rotate(-90deg)' }} /></div>
              <div className={styles.flowNode}>
                <Smartphone size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>Companion App</span>
                <span className={styles.flowNodeDesc}>AI processing, storage</span>
              </div>
              <div className={styles.flowArrow}><ChevronDown size={22} style={{ transform: 'rotate(-90deg)' }} /></div>
              <div className={styles.flowNode}>
                <Brain size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>AI Intelligence</span>
                <span className={styles.flowNodeDesc}>Insights, memory recall</span>
              </div>
              <div className={styles.flowArrow}><ChevronDown size={22} style={{ transform: 'rotate(-90deg)' }} /></div>
              <div className={styles.flowNode}>
                <User size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>User Interaction</span>
                <span className={styles.flowNodeDesc}>Audio or app response</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className={`${styles.section} ${styles.modelsSection}`}>
        <div className={styles.sectionInner}>
          <AnimatedSection animation="slide-up">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Products</span>
              <h2 className={styles.sectionTitle}>
                SpecEI Models
              </h2>
              <p className={styles.sectionDesc}>
                SpecEI is designed as a modular project with three configurations, each optimized for different use cases and experimentation levels.
              </p>
            </div>
          </AnimatedSection>
          <div className={styles.modelsGrid}>
            <AnimatedSection animation="slide-up" delay={200} className={styles.modelCard} as="div">
              <span className={styles.modelBadge}>Essential</span>
              <h3 className={styles.modelName}>SpecEI (Gen-1)</h3>
              <p className={styles.modelTagline}>A minimal and lightweight configuration focused on core experimentation.</p>
              <span className={styles.modelPrice}>Est. USD $120</span>
              <ul className={styles.modelFeatures}>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Camera and microphone</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>No integrated speakers</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>External audio support</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Lowest power consumption</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Maximum comfort</span>
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={400} className={styles.modelCard} as="div">
              <span className={styles.modelBadge}>Balanced</span>
              <h3 className={styles.modelName}>SpecEI Pro (Gen-1)</h3>
              <p className={styles.modelTagline}>A balanced configuration designed for everyday usability.</p>
              <span className={styles.modelPrice}>Est. USD $180</span>
              <ul className={styles.modelFeatures}>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Improved camera</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Integrated directional speakers</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Dual microphones</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Better interaction and feedback</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Still lightweight and wearable</span>
                </li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={600} className={styles.modelCard} as="div">
              <span className={styles.modelBadge}>Advanced</span>
              <h3 className={styles.modelName}>SpecEI Max (Gen-1)</h3>
              <p className={styles.modelTagline}>An advanced configuration designed for deeper experimentation.</p>
              <span className={styles.modelPrice}>Est. USD $240</span>
              <ul className={styles.modelFeatures}>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>High quality camera</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Advanced sensor suite</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Integrated spatial audio</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>More onboard storage</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Enhanced interaction</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className={`${styles.section} ${styles.techSection}`}>
        <div className={styles.sectionInner}>
          <AnimatedSection animation="slide-up">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Technology</span>
              <h2 className={styles.sectionTitle}>
                Software and AI Intelligence
              </h2>
              <p className={styles.sectionDesc}>
                The intelligence of SpecEI lives primarily in software. Processing is split intelligently: on-device logic for efficiency, mobile-based AI for depth.
              </p>
            </div>
          </AnimatedSection>
          <div className={styles.techContent}>
            <AnimatedSection animation="zoom" delay={200} className={styles.techVisual} as="div">
              <div className={styles.techDiagram}>
                <div className={styles.techOrbitPath}></div>
                <div className={styles.techOrbit}>
                  <div className={`${styles.techNode} ${styles.techNode1}`}><span className={styles.techNodeText}>Visual<br />Understanding</span></div>
                  <div className={`${styles.techNode} ${styles.techNode2}`}><span className={styles.techNodeText}>Context<br />Recognition</span></div>
                  <div className={`${styles.techNode} ${styles.techNode3}`}><span className={styles.techNodeText}>Memory<br />Indexing</span></div>
                  <div className={`${styles.techNode} ${styles.techNode4}`}><span className={styles.techNodeText}>Intelligent<br />Filtering</span></div>
                  <div className={`${styles.techNode} ${styles.techNode5}`}><span className={styles.techNodeText}>LLM<br />Transcription</span></div>
                  <div className={`${styles.techNode} ${styles.techNode6}`}><span className={styles.techNodeText}>On-Device<br />Logic</span></div>
                  <div className={`${styles.techNode} ${styles.techNode7}`}><span className={styles.techNodeText}>Mobile<br />AI</span></div>
                </div>
                <div className={`${styles.techNode} ${styles.techNodeCenter}`}>SpecEI<br />Core</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={300} staggerChildren staggerDelay={100} className={styles.techFeatures} as="div">
              <div className={styles.techFeature}>
                <h4 className={styles.techFeatureTitle}>Visual Understanding</h4>
                <p className={styles.techFeatureDesc}>
                  AI-powered image processing for real-time scene understanding, object recognition, and contextual awareness.
                </p>
              </div>
              <div className={styles.techFeature}>
                <h4 className={styles.techFeatureTitle}>Context Recognition</h4>
                <p className={styles.techFeatureDesc}>
                  Intelligent context awareness that adapts to your environment, activities, and preferences automatically.
                </p>
              </div>
              <div className={styles.techFeature}>
                <h4 className={styles.techFeatureTitle}>Memory Indexing</h4>
                <p className={styles.techFeatureDesc}>
                  Searchable visual memory that organizes and retrieves moments intelligently when you need them.
                </p>
              </div>
              <div className={styles.techFeature}>
                <h4 className={styles.techFeatureTitle}>Continuous Improvement</h4>
                <p className={styles.techFeatureDesc}>
                  Software-driven architecture allows continuous improvement without changing hardware.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Companion App Section */}
      <section className={`${styles.section} ${styles.appSection}`}>
        <div className={styles.sectionInner}>
          <AnimatedSection animation="slide-up">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Mobile App</span>
              <h2 className={styles.sectionTitle}>
                Companion Mobile Application
              </h2>
              <p className={styles.sectionDesc}>
                The mobile app is the control and intelligence hub of SpecEI. The glasses sense. The app understands. The system responds.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="zoom" delay={100} staggerChildren staggerDelay={50} className={styles.appGrid} as="div">
            <div className={styles.appFeatureCard}>
              <Link2 size={32} className={styles.appFeatureIcon} />
              <h3 className={styles.appFeatureTitle}>Pairing</h3>
              <p className={styles.appFeatureDesc}>Device pairing and management</p>
            </div>
            <div className={styles.appFeatureCard}>
              <RotateCcw size={32} className={styles.appFeatureIcon} />
              <h3 className={styles.appFeatureTitle}>Sync</h3>
              <p className={styles.appFeatureDesc}>Voice and video synchronization</p>
            </div>
            <div className={styles.appFeatureCard}>
              <Bot size={32} className={styles.appFeatureIcon} />
              <h3 className={styles.appFeatureTitle}>AI Assistant</h3>
              <p className={styles.appFeatureDesc}>Natural language interaction</p>
            </div>
            <div className={styles.appFeatureCard}>
              <Search size={32} className={styles.appFeatureIcon} />
              <h3 className={styles.appFeatureTitle}>Search</h3>
              <p className={styles.appFeatureDesc}>Searchable memory and context recall</p>
            </div>
            <div className={styles.appFeatureCard}>
              <Shield size={32} className={styles.appFeatureIcon} />
              <h3 className={styles.appFeatureTitle}>Privacy</h3>
              <p className={styles.appFeatureDesc}>Privacy and data controls</p>
            </div>
            <div className={styles.appFeatureCard}>
              <HardDrive size={32} className={styles.appFeatureIcon} />
              <h3 className={styles.appFeatureTitle}>Storage</h3>
              <p className={styles.appFeatureDesc}>Secure data management</p>
            </div>
            <div className={styles.appFeatureCard}>
              <Settings size={32} className={styles.appFeatureIcon} />
              <h3 className={styles.appFeatureTitle}>Settings</h3>
              <p className={styles.appFeatureDesc}>Unified control center</p>
            </div>
            <div className={styles.appFeatureCard}>
              <BarChart3 size={32} className={styles.appFeatureIcon} />
              <h3 className={styles.appFeatureTitle}>Analytics</h3>
              <p className={styles.appFeatureDesc}>Usage insights and stats</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={`${styles.section} ${styles.useCasesSection}`}>
        <div className={styles.sectionInner}>
          <AnimatedSection animation="slide-up">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Applications</span>
              <h2 className={styles.sectionTitle}>
                Realistic Use Cases
              </h2>
              <p className={styles.sectionDesc}>
                SpecEI is designed for realistic scenarios. It avoids exaggerated claims and focuses on achievable intelligence.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200} staggerChildren staggerDelay={100} className={styles.useCasesGrid} as="div">
            <div className={styles.useCase}>
              <Camera size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Hands-Free Capture</h4>
              <p className={styles.useCaseDesc}>
                Capture information without interrupting your activities. Perfect for documentation and memory.
              </p>
            </div>
            <div className={styles.useCase}>
              <Brain size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Contextual Recall</h4>
              <p className={styles.useCaseDesc}>
                Intelligent memory retrieval based on context, time, and relevance.
              </p>
            </div>
            <div className={styles.useCase}>
              <BookOpen size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Learning</h4>
              <p className={styles.useCaseDesc}>
                Interactive learning experiences with real-time explanations and visual recognition.
              </p>
            </div>
            <div className={styles.useCase}>
              <ClipboardList size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Documentation</h4>
              <p className={styles.useCaseDesc}>
                Professional-grade capture for field work, inspections, and technical documentation.
              </p>
            </div>
            <div className={styles.useCase}>
              <Lightbulb size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Daily Assistance</h4>
              <p className={styles.useCaseDesc}>
                Everyday help with reminders, information, and contextual awareness.
              </p>
            </div>
            <div className={styles.useCase}>
              <FlaskConical size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Experimentation</h4>
              <p className={styles.useCaseDesc}>
                AI and system experimentation for developers and researchers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section >

      {/* Privacy Section */}
      < section id="privacy" className={`${styles.section} ${styles.privacySection}`}>
        <div className={styles.sectionInner}>
          <AnimatedSection animation="slide-up">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Trust</span>
              <h2 className={styles.sectionTitle}>
                Privacy and Ethics
              </h2>
              <p className={styles.sectionDesc}>
                Privacy is treated as an engineering requirement. SpecEI is designed to respect user trust by default.
              </p>
            </div>
          </AnimatedSection>
          <div className={styles.privacyContent}>
            <AnimatedSection animation="slide-right" delay={200} className={styles.privacyPoints} as="div">
              <div className={styles.privacyPoint}>
                <Lock size={28} className={styles.privacyIcon} />
                <div className={styles.privacyText}>
                  <h4 className={styles.privacyTitle}>User-Controlled Data Flow</h4>
                  <p className={styles.privacyDesc}>Complete control over what data is collected, stored, and shared.</p>
                </div>
              </div>
              <div className={styles.privacyPoint}>
                <CheckCircle2 size={28} className={styles.privacyIcon} />
                <div className={styles.privacyText}>
                  <h4 className={styles.privacyTitle}>Explicit Permissions</h4>
                  <p className={styles.privacyDesc}>Every action requires clear user consent. No hidden data collection.</p>
                </div>
              </div>
              <div className={styles.privacyPoint}>
                <Smartphone size={28} className={styles.privacyIcon} />
                <div className={styles.privacyText}>
                  <h4 className={styles.privacyTitle}>Local Processing</h4>
                  <p className={styles.privacyDesc}>Sensitive data processed on-device whenever possible.</p>
                </div>
              </div>
              <div className={styles.privacyPoint}>
                <Eye size={28} className={styles.privacyIcon} />
                <div className={styles.privacyText}>
                  <h4 className={styles.privacyTitle}>Transparent Behavior</h4>
                  <p className={styles.privacyDesc}>Clear indicators of what the system is doing at all times.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="rotate" delay={400} className={styles.privacyVisual} as="div">
              <div className={styles.shieldContainer}>
                <div className={styles.shield}>
                  <Shield size={72} className={styles.shieldIcon} />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section >

      {/* Comparison Section */}
      < section className={`${styles.section} ${styles.comparisonSection}`}>
        <div className={styles.sectionInner}>
          <AnimatedSection animation="slide-up">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>Advantage</span>
              <h2 className={styles.sectionTitle}>
                Why SpecEI Is Different
              </h2>
              <p className={styles.sectionDesc}>
                Most existing smart glasses use a hardware-heavy intelligence model. SpecEI takes a fundamentally different approach.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200} staggerChildren staggerDelay={100} className={styles.comparisonGrid} as="div">
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>Architecture Difference</h4>
              <div className={styles.comparisonPoints}>
                <div className={styles.comparisonPoint}>
                  <Layers size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Software-first intelligence model</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Wallet size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Lower hardware cost</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Feather size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Lighter frames</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Zap size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Better energy efficiency</span>
                </div>
              </div>
            </div>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>Intelligence and Upgradability</h4>
              <div className={styles.comparisonPoints}>
                <div className={styles.comparisonPoint}>
                  <Sparkles size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Improves over time through AI updates</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <CircuitBoard size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Software optimization</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <RefreshCw size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>System refinement</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Target size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Hardware remains stable while intelligence evolves</span>
                </div>
              </div>
            </div>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>Cost and Accessibility</h4>
              <div className={styles.comparisonPoints}>
                <div className={styles.comparisonPoint}>
                  <DollarSign size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Reduce hardware cost</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Brain size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Shift value to software</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <FlaskConical size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Enable affordable experimentation</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <MousePointer size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Lower entry barriers</span>
                </div>
              </div>
            </div>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>Hardware Philosophy</h4>
              <div className={styles.comparisonPoints}>
                <div className={styles.comparisonPoint}>
                  <Feather size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Lightweight frame design</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Zap size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Low heat generation</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <BatteryLow size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Battery efficiency priority</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Glasses size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Long-term wearability</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section >

      {/* Funding Section */}
      < section id="funding" className={`${styles.section} ${styles.fundingSection}`}>
        <div className={styles.fundingContent}>
          <AnimatedSection animation="zoom">
            <span className={styles.sectionTag}>Support</span>
            <h2 className={styles.fundingTitle}>
              Why SpecEI
              <span className={styles.fundingTitleAccent}>Deserves Funding</span>
            </h2>
            <p className={styles.fundingDesc}>
              SpecEI is currently a research and development project. What makes it valuable is not polish - it is architecture, direction, and system thinking. SpecEI represents a scalable and ethical direction for intelligent wearables.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200} staggerChildren staggerDelay={50} className={styles.fundingPoints} as="div">
            <div className={styles.fundingPoint}>
              <CircuitBoard size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Refine hardware prototypes</span>
            </div>
            <div className={styles.fundingPoint}>
              <Zap size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Optimize power and thermals</span>
            </div>
            <div className={styles.fundingPoint}>
              <Brain size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Advance AI efficiency</span>
            </div>
            <div className={styles.fundingPoint}>
              <Smartphone size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Improve mobile intelligence platform</span>
            </div>
            <div className={styles.fundingPoint}>
              <Target size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Conduct real-world testing</span>
            </div>
            <div className={styles.fundingPoint}>
              <Layers size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Scale production capabilities</span>
            </div>
          </AnimatedSection>
          <div>
            <AnimatedSection animation="elastic" delay={500} className={styles.fundingButtons}>
              <button className={styles.btnPrimary}>Support the Project</button>
              <button className={styles.btnSecondary} onClick={() => navigate('/funding')}>Learn More</button>
            </AnimatedSection>
          </div>
        </div>
      </section >

      {/* Closing Section */}
      < section className={`${styles.section} ${styles.closingSection}`}>
        <div className={styles.closingContent}>
          <span className={styles.sectionTag}>Vision</span>
          <h2 className={styles.sectionTitle}>
            A Step Toward Wearables That Actually Work
          </h2>
          <p className={styles.sectionDesc} style={{ margin: '0 auto' }}>
            SpecEI is not just about smart glasses. It is about better system design, smarter intelligence distribution, practical AI deployment, and responsible engineering.
          </p>
          <div className={styles.closingPrinciples}>
            <span className={styles.closingPrinciple}>Better System Design</span>
            <span className={styles.closingPrinciple}>Smarter Intelligence Distribution</span>
            <span className={styles.closingPrinciple}>Practical AI Deployment</span>
            <span className={styles.closingPrinciple}>Responsible Engineering</span>
          </div>
          <div className={styles.closingButtons}>
            <button className={styles.btnPrimary}>Explore the Architecture</button>
            <button className={styles.btnSecondary}>Understand the System</button>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className={styles.footer} >
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <img src="/logo_final_direct.png" alt="SpecEI" className={styles.footerLogoImage} />
            <span className={styles.footerTagline}>Intelligent Vision, Made Accessible</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="#problem" className={styles.footerLink}>Problem</a>
            <a href="#architecture" className={styles.footerLink}>Architecture</a>
            <a href="#models" className={styles.footerLink}>Models</a>
            <a href="#technology" className={styles.footerLink}>Technology</a>
            <a href="#privacy" className={styles.footerLink}>Privacy</a>
          </div>
          <span className={styles.footerCopyright}>2025 SpecEI Project. All rights reserved.</span>
        </div>
      </footer >
    </div >
  );
}
