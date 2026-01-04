"use client";

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Heart,
  Stethoscope,
  Users,
  CheckCircle,
  Layers,
  MessageSquare,
  Brain,
  Building,
  AlertCircle,
  ArrowRight,
  Mail,
  Activity,
  Target,
  BarChart3,
  UserCheck,
  Award,
  GraduationCap,
  Video,
} from 'lucide-react';

type ActiveSection = 'hero' | 'problem' | 'solution' | 'features' | 'how-it-works' | 'contact';

export default function CareCollaborative() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<ActiveSection>('hero');
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [metrics, setMetrics] = useState({
    interactions: 0,
    avgScore: 0,
    students: 0,
    scenarios: 0
  });

  useEffect(() => {
    setIsLoaded(true);

    // Animate metrics
    const metricsInterval = setInterval(() => {
      setMetrics({
        interactions: Math.floor(Math.random() * 500) + 2500,
        avgScore: Math.random() * 10 + 75,
        students: Math.floor(Math.random() * 50) + 150,
        scenarios: Math.floor(Math.random() * 20) + 80
      });
    }, 2000);

    // Simulate training console
    const terminalLines = [
      '$ care-collab train --mode interactive --eval-framework standard',
      'Initializing Care Collaborative Training Platform v0.1.0...',
      'Loading evidence-based assessment framework...',
      '✓ AI Patient Simulation Engine: ACTIVE [Personas: 80]',
      '✓ Feedback Evaluation System: ACTIVE [Frameworks: 8]',
      '✓ Competency Assessment: ENABLED [Core competencies: 8]',
      '✓ Voice/Video Communication: READY [Codecs: WebRTC, Opus]',
      '✓ Transcript Analysis: ACTIVE [NLP Models: Loaded]',
      '',
      'Student request: start_interaction(scenario="elderly_patient_falls")',
      '→ [0.034ms] Loading patient persona: Mrs. Chen, 78, Cantonese...',
      '→ [0.052ms] Initializing behavioral profile: anxious, cultural factors...',
      '→ [0.028ms] Establishing video connection...',
      '→ [0.015ms] Starting real-time transcription...',
      '✓ Interaction STARTED - Duration: 12m 34s',
      '✓ Assessment completed: Empathy=8.2/10 | Clarity=7.8/10 | Cultural Sensitivity=9.1/10',
      '✓ Report generated: report_id="rpt_7f2a1c" | Overall Score: 82/100',
      '',
      'Ready for next interaction. Evidence-based feedback available.',
      '$ _'
    ];

    const typeNextLine = (index = 0) => {
      if (index < terminalLines.length) {
        setConsoleLines(prev => [...prev, terminalLines[index]]);
        const nextDelay = terminalLines[index].length * 3 + Math.random() * 200 + 100;
        setTimeout(() => typeNextLine(index + 1), nextDelay);
      }
    };

    setTimeout(() => typeNextLine(), 500);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    const handleScroll = () => {
      const sections: ActiveSection[] = ['hero', 'problem', 'solution', 'features', 'how-it-works', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(cursorInterval);
      clearInterval(metricsInterval);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-900/200/20 selection:text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Base gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>
      
      {/* Lattice structure overlay - hexagonal molecular grid */}
      <div className="fixed inset-0 opacity-20" style={{
        backgroundImage: `
          radial-gradient(circle at 20px 20px, rgba(251,146,60,0.15) 1px, transparent 1px),
          radial-gradient(circle at 60px 60px, rgba(251,146,60,0.15) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0, 40px 40px'
      }}></div>
      
      {/* Crystalline connection lines */}
      <svg className="fixed inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lattice-grid" x="0" y="0" width="120" height="104" patternUnits="userSpaceOnUse">
            {/* Hexagonal lattice structure */}
            <path d="M60,0 L90,15 L90,45 L60,60 L30,45 L30,15 Z" fill="none" stroke="rgba(251,146,60,0.3)" strokeWidth="0.5"/>
            <path d="M60,0 L120,30" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            <path d="M90,15 L120,30" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            <path d="M90,45 L120,60" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            <path d="M60,60 L60,104" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            <path d="M30,45 L0,30" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            <path d="M30,15 L0,30" stroke="rgba(251,146,60,0.2)" strokeWidth="0.5"/>
            {/* Nodes at connection points */}
            <circle cx="60" cy="0" r="1.5" fill="rgba(251,146,60,0.4)"/>
            <circle cx="90" cy="15" r="1.5" fill="rgba(251,146,60,0.4)"/>
            <circle cx="90" cy="45" r="1.5" fill="rgba(251,146,60,0.4)"/>
            <circle cx="60" cy="60" r="1.5" fill="rgba(251,146,60,0.4)"/>
            <circle cx="30" cy="45" r="1.5" fill="rgba(251,146,60,0.4)"/>
            <circle cx="30" cy="15" r="1.5" fill="rgba(251,146,60,0.4)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lattice-grid)"/>
      </svg>
      
      {/* Vignette */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>

      {/* Header */}
      <Header activeSection={activeSection} />

      <main className="relative z-10">
        <HeroSection consoleLines={consoleLines} showCursor={showCursor} metrics={metrics} />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

// Header Component
function Header({ activeSection }: { activeSection: ActiveSection }) {
  const navItems = [
    { id: 'hero' as ActiveSection, label: 'Home' },
    { id: 'problem' as ActiveSection, label: 'Problem' },
    { id: 'solution' as ActiveSection, label: 'Solution' },
    { id: 'features' as ActiveSection, label: 'Features' },
    { id: 'how-it-works' as ActiveSection, label: 'How It Works' },
    { id: 'contact' as ActiveSection, label: 'Contact' }
  ];

  return (
    <header className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-slate-950 border-2 border-blue-500/50 flex items-center justify-center relative overflow-hidden">
                  {/* Lattice pattern in logo */}
                  <div className="absolute inset-0 opacity-20">
                    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="0" x2="32" y2="32" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
                      <line x1="32" y1="0" x2="0" y2="32" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
                      <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
                      <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
                    </svg>
                  </div>
                  <Heart className="w-5 h-5 text-blue-400 relative z-10" fill="currentColor" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white">Care Collaborative</span>
                <span className="text-xs text-blue-400">Healthcare Communication Training</span>
              </div>
            </div>

            <nav className="hidden md:flex">
              <ul className="flex space-x-6">
                {navItems.map(item => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`text-sm hover:text-blue-400 transition-colors relative ${
                        activeSection === item.id ? 'text-blue-400 font-medium' : 'text-slate-400'
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <span className="absolute -bottom-3 left-0 w-full h-0.5 bg-blue-900/200"></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail size={14} className="mr-1.5" />
            REQUEST DEMO
          </a>
        </div>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection({ consoleLines, showCursor, metrics }: { consoleLines: string[], showCursor: boolean, metrics: any }) {
  return (
    <section id="hero" className="pt-28 pb-20 relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-medium text-blue-400 border-2 border-blue-500/30 px-5 py-2 mb-8 bg-slate-900/50 backdrop-blur-sm relative overflow-hidden">
              {/* Lattice corner decorations */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500/50"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500/50"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500/50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500/50"></div>
              
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                <circle cx="8" cy="8" r="2" fill="currentColor"/>
                <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1"/>
                <line x1="8" y1="10" x2="8" y2="14" stroke="currentColor" strokeWidth="1"/>
                <line x1="2" y1="8" x2="6" y2="8" stroke="currentColor" strokeWidth="1"/>
                <line x1="10" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span className="tracking-wide">EVIDENCE-BASED TRAINING INFRASTRUCTURE</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">AI-Powered Healthcare</span>
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400">
                Communication Training
              </span>
            </h1>

            <p className="text-slate-400 text-xl mb-12 leading-relaxed max-w-2xl">
              Care Collaborative provides <span className="text-white font-medium">AI patient simulations for unlimited practice and structured feedback evaluation tools</span> for evidence-based assessment of healthcare communication skills.
            </p>

            {/* Real-time metrics dashboard */}
            <div className="grid grid-cols-2 gap-px mb-12 bg-blue-900/200/20 border-2 border-blue-500/30">
              <div className="bg-slate-900/90 p-6 relative overflow-hidden">
                {/* Corner markers */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-blue-500/50/50"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-blue-500/50/50"></div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Interactions</div>
                  <div className="text-3xl font-bold text-white tabular-nums font-mono">
                    {metrics.interactions.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/90 p-6 relative overflow-hidden">
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-blue-500/50/50"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-blue-500/50/50"></div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Avg Score</div>
                  <div className="text-3xl font-bold text-white tabular-nums font-mono">
                    {metrics.avgScore.toFixed(1)}
                    <span className="text-sm text-slate-500 ml-2 font-normal">/100</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/90 p-6 relative overflow-hidden">
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-blue-500/50/50"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-blue-500/50/50"></div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Active Students</div>
                  <div className="text-3xl font-bold text-blue-400 tabular-nums font-mono">
                    {metrics.students.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/90 p-6 relative overflow-hidden">
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-blue-500/50/50"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-blue-500/50/50"></div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">AI Scenarios</div>
                  <div className="text-3xl font-bold text-blue-400 tabular-nums font-mono">
                    {metrics.scenarios}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#solution"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800/50 border border-slate-700 text-slate-200 text-base font-semibold rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-colors"
              >
                <Mail size={18} />
                Request Demo
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              {/* Structural corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 pointer-events-none z-10"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 pointer-events-none z-10"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 pointer-events-none z-10"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-500/30 pointer-events-none z-10"></div>
              
              <div className="relative bg-slate-900/50 border-2 border-blue-500/30 overflow-hidden backdrop-blur-sm">
                <div className="bg-slate-900/80 text-slate-400 py-3 px-4 border-b-2 border-blue-500/30 flex items-center text-sm">
                  <Terminal size={14} className="mr-2 text-blue-400" />
                  <span className="font-medium font-mono">care_collaborative_training.log</span>
                  <div className="ml-auto flex gap-2">
                    <div className="w-2 h-2 border border-slate-600"></div>
                    <div className="w-2 h-2 border border-slate-600"></div>
                    <div className="w-2 h-2 border border-blue-500"></div>
                  </div>
                </div>

                <div className="p-6 font-mono text-sm text-slate-300 h-96 overflow-auto">
                  {consoleLines.map((line, index) => (
                    <div key={index} className={line.startsWith('✓') ? 'text-blue-400' : line.startsWith('→') ? 'text-slate-500' : ''}>
                      {line}
                    </div>
                  ))}
                  {showCursor && <span className="inline-block w-2 h-4 bg-blue-400 ml-1 align-text-bottom animate-pulse"></span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem Section
function ProblemSection() {
  return (
    <section id="problem" className="py-24 border-t border-blue-500/20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-xs bg-red-900/20 border border-red-500/30 px-3 py-1.5 mb-4">
              <AlertCircle size={14} className="mr-2" />
              THE CHALLENGE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Communication Skills Impact Patient Outcomes
            </h2>
            <p className="text-slate-400 text-lg">
              Research proves physician-patient communication directly affects health outcomes, yet medical professionals receive inadequate training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 border border-red-500/20 p-6">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-red-900/20 border border-red-500/30 mr-4">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Limited Training Resources</h3>
                  <p className="text-slate-400 text-sm">
                    Standardized patients are expensive, scheduling is complex, and scenario diversity is limited.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-14">
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  $200-400 per standardized patient session
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Limited practice opportunities
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  No safe environment for difficult scenarios
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-red-500/20 p-6">
              <div className="flex items-start mb-4">
                <div className="p-2 bg-red-900/20 border border-red-500/30 mr-4">
                  <Users className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Subjective Feedback</h3>
                  <p className="text-slate-400 text-sm">
                    Instructor feedback is inconsistent, subjective, and varies widely across evaluators.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-14">
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  25% of graduates feel unprepared for cultural competency
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  No objective assessment framework
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  Faculty time scarce and expensive
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-slate-900/50 border border-blue-500/20 p-8 text-center">
            <p className="text-white text-xl font-semibold mb-2">
              The impact: $55B/year in malpractice expenses, often tied to communication failures.
            </p>
            <p className="text-slate-400">
              58% of physicians face lawsuits during their career. Better communication training is critical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  return (
    <section id="solution" className="py-24 border-t border-blue-500/20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-xs bg-blue-900/20 border border-blue-500/30 px-3 py-1.5 mb-4">
              <CheckCircle size={14} className="mr-2" />
              THE SOLUTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI-Powered Training at Scale
            </h2>
            <p className="text-slate-400 text-lg">
              Care Collaborative combines AI patient simulations with evidence-based feedback evaluation to deliver scalable, objective communication training.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-blue-500/30 p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
                <h3 className="text-white font-semibold mb-2">Unlimited Practice</h3>
                <p className="text-slate-400 text-sm">
                  Students practice with AI patients anytime, anywhere—diverse scenarios without resource constraints.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">2</div>
                <h3 className="text-white font-semibold mb-2">Evidence-Based Assessment</h3>
                <p className="text-slate-400 text-sm">
                  Same research-backed framework evaluates both AI practice and instructor-student feedback sessions.
                </p>
              </div>

              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">3</div>
                <h3 className="text-white font-semibold mb-2">Objective Feedback</h3>
                <p className="text-slate-400 text-sm">
                  Instructors receive structured, objective data supporting personalized mentorship conversations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 border border-blue-500/20 p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Building className="w-5 h-5 text-blue-400 mr-2" />
                For Healthcare Institutions
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Scalable Training Infrastructure</div>
                    <div className="text-slate-400 text-sm">Unlimited AI patient interactions without scheduling constraints</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Consistent Assessment Framework</div>
                    <div className="text-slate-400 text-sm">Same standards applied across all students and instructors</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Secure Platform</div>
                    <div className="text-slate-400 text-sm">Enterprise-grade security with cloud-hosted or self-hosted options</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-blue-500/20 p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                For Medical Learners
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Safe Practice Environment</div>
                    <div className="text-slate-400 text-sm">Learn from mistakes without patient harm or judgment</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Diverse Patient Scenarios</div>
                    <div className="text-slate-400 text-sm">Practice with varied cultures, ages, conditions, and communication styles</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium">Immediate, Detailed Feedback</div>
                    <div className="text-slate-400 text-sm">Understand strengths and improvement areas after every interaction</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 p-8 text-center">
            <p className="text-white text-2xl font-bold mb-2">
              Healthcare institutions can train communication skills that improve patient outcomes.
            </p>
            <p className="text-slate-400">
              Evidence-based training becomes accessible and scalable for every program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  return (
    <section id="features" className="py-24 border-t border-blue-500/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center text-xs bg-blue-900/20 border border-blue-500/30 px-3 py-1.5 mb-4">
            <Layers size={14} className="mr-2" />
            PLATFORM CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comprehensive Training Infrastructure
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Four core platform capabilities that deliver evidence-based healthcare communication training at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-900/50 border border-blue-500/30 p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-900/20 border border-blue-500/30 mr-4">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Patient Engine</h3>
                <p className="text-blue-400 text-sm">Realistic Patient Simulations</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Advanced AI models create authentic patient interactions across diverse scenarios, medical conditions, and cultural contexts.
            </p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Natural language conversations
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Emotional and behavioral realism
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Diverse patient demographics
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Clinical scenario library (200+ cases)
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-blue-500/30 p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-900/20 border border-blue-500/30 mr-4">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Assessment Framework</h3>
                <p className="text-blue-400 text-sm">Evidence-Based Evaluation</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Evaluates communication skills across 8 core competencies using research-backed frameworks and validated rubrics.
            </p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                8 core competency domains
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Research-validated rubrics
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Automated scoring with AI
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Human instructor review
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-blue-500/30 p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-900/20 border border-blue-500/30 mr-4">
                <Video className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Feedback Tools</h3>
                <p className="text-blue-400 text-sm">Structured Review Sessions</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Comprehensive tools for instructors to provide detailed, evidence-based feedback on student communication skills.
            </p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Video/transcript review
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Timestamped annotations
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Competency-specific rubrics
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Actionable improvement plans
              </li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-blue-500/30 p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-900/20 border border-blue-500/30 mr-4">
                <BarChart3 className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Analytics & Compliance</h3>
                <p className="text-blue-400 text-sm">Track Progress, Ensure Privacy</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Institutional dashboards track learner progress while maintaining enterprise-grade data security and privacy.
            </p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Real-time competency tracking
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Cohort performance analytics
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Enterprise security infrastructure
              </li>
              <li className="text-slate-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 font-mono">»</span>
                Accreditation reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Architecture Section
function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 border-t border-blue-500/20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center text-xs bg-blue-900/20 border border-blue-500/30 px-3 py-1.5 mb-4">
              <Video size={14} className="mr-2" />
              TWO CORE FUNCTIONALITIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How Care Collaborative Works
            </h2>
            <p className="text-slate-400 text-lg">
              Two complementary workflows using the same evidence-based assessment framework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900/50 border border-blue-500/30 p-8">
              <h3 className="text-white font-bold mb-6 flex items-center">
                <Brain className="w-5 h-5 text-blue-400 mr-2" />
                Workflow 1: AI Patient Practice
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Students practice independently with AI-powered patient personas in unlimited, safe scenarios.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-blue-400 mr-2 font-mono">→</span>
                  Select/create patient scenario
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-blue-400 mr-2 font-mono">→</span>
                  Live voice/video with AI patient
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-blue-400 mr-2 font-mono">→</span>
                  Real-time behavioral analysis
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-blue-400 mr-2 font-mono">→</span>
                  Automated performance report
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-900/10 border border-blue-500/20">
                <p className="text-xs text-blue-400">
                  <strong>Value:</strong> Unlimited practice volume in safe environment with diverse scenarios.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-amber-500/30 p-8">
              <h3 className="text-white font-bold mb-6 flex items-center">
                <UserCheck className="w-5 h-5 text-amber-400 mr-2" />
                Workflow 2: Instructor Feedback Sessions
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Student-instructor conversations conducted via platform with structured, evidence-based assessment.
              </p>
              <ul className="space-y-2">
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-amber-500 mr-2 font-mono">→</span>
                  Platform-mediated conversation
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-amber-500 mr-2 font-mono">→</span>
                  Transcript analysis applied
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-amber-500 mr-2 font-mono">→</span>
                  Objective assessment generated
                </li>
                <li className="text-slate-400 text-sm flex items-start">
                  <span className="text-amber-500 mr-2 font-mono">→</span>
                  Instructor-guided feedback discussion
                </li>
              </ul>
              <div className="mt-4 p-3 bg-amber-900/10 border border-amber-500/20">
                <p className="text-xs text-amber-400">
                  <strong>Value:</strong> Expert guidance with objective data supporting personalized mentorship.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-blue-500/20 p-8 mb-12">
            <h3 className="text-white font-bold mb-4">Evidence-Based Assessment Framework</h3>
            <p className="text-slate-400 text-sm mb-6">
              Both workflows use the same 8 core competencies evaluated against research-backed communication frameworks:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-blue-900/10 border border-blue-500/20">
                <Heart className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300">Empathy</p>
              </div>
              <div className="text-center p-3 bg-blue-900/10 border border-blue-500/20">
                <MessageSquare className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300">Clarity</p>
              </div>
              <div className="text-center p-3 bg-blue-900/10 border border-blue-500/20">
                <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300">Cultural Sensitivity</p>
              </div>
              <div className="text-center p-3 bg-blue-900/10 border border-blue-500/20">
                <Activity className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300">Active Listening</p>
              </div>
              <div className="text-center p-3 bg-blue-900/10 border border-blue-500/20">
                <Stethoscope className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300">Medical Knowledge</p>
              </div>
              <div className="text-center p-3 bg-blue-900/10 border border-blue-500/20">
                <GraduationCap className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300">Patient Education</p>
              </div>
              <div className="text-center p-3 bg-blue-900/10 border border-blue-500/20">
                <Target className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300">Rapport Building</p>
              </div>
              <div className="text-center p-3 bg-blue-900/10 border border-blue-500/20">
                <Award className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-xs text-slate-300">Professionalism</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-blue-500/20 p-8">
            <h3 className="text-white font-bold mb-4">Getting Started</h3>
            <div className="bg-slate-950 border border-blue-500/30 p-4 font-mono text-sm">
              <div className="text-blue-400 mb-2"># Request access for pilot program</div>
              <div className="text-slate-400">→ Contact: hello@carecollaborative.cloud</div>
              <div className="text-slate-400 mt-4">→ Demo available for medical schools</div>
              <div className="text-slate-400">→ Enterprise trials for hospitals</div>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Both AI patient simulations and feedback evaluation tools included in all plans. See pricing for details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-blue-500/20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center text-xs bg-blue-900/20 border border-blue-500/30 px-3 py-1.5 mb-4">
            <Mail size={14} className="mr-2" />
            REQUEST A DEMO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Training Program
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            Join leading medical institutions using Care Collaborative to train the next generation of healthcare professionals.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:demo@carecollaborative.cloud"
              className="bg-slate-900/50 border border-blue-500/30 p-6 hover:border-blue-500/50 transition group"
            >
              <Video className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="text-white font-semibold mb-2">Request Demo</h3>
              <p className="text-slate-400 text-sm">See the platform in action</p>
            </a>

            <a
              href="mailto:sales@carecollaborative.cloud"
              className="bg-slate-900/50 border border-blue-500/30 p-6 hover:border-blue-500/50 transition group"
            >
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="text-white font-semibold mb-2">Contact Sales</h3>
              <p className="text-slate-400 text-sm">sales@carecollaborative.cloud</p>
            </a>

            <a
              href="mailto:partnerships@carecollaborative.cloud"
              className="bg-slate-900/50 border border-blue-500/30 p-6 hover:border-blue-500/50 transition group"
            >
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition" />
              <h3 className="text-white font-semibold mb-2">Partnerships</h3>
              <p className="text-slate-400 text-sm">Institutional collaborations</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 p-8">
            <h3 className="text-white text-xl font-bold mb-3">Ready to Transform Your Program?</h3>
            <p className="text-slate-400 mb-6">
              Join leading medical schools and hospitals using Care Collaborative. Enterprise features include cohort management, advanced analytics, and dedicated support.
            </p>
            <a
              href="mailto:enterprise@carecollaborative.cloud"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition font-semibold"
            >
              <Mail size={18} className="mr-2" />
              CONTACT ENTERPRISE TEAM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-blue-500/20 py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-slate-950 border-2 border-blue-500/50 flex items-center justify-center">
              <Heart className="w-4 h-4 text-blue-400" fill="currentColor" />
            </div>
            <span className="text-white font-bold">Care Collaborative</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <a href="#features" className="hover:text-blue-400 transition">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-blue-400 transition">
              How It Works
            </a>
            <a href="mailto:privacy@carecollaborative.cloud" className="hover:text-blue-400 transition">
              Privacy & Security
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-500/20 text-center text-xs text-slate-500">
          <p>© 2025 Care Collaborative. AI-powered healthcare communication training platform.</p>
        </div>
      </div>
    </footer>
  );
}
