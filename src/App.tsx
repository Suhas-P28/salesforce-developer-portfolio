/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { ArchitectureLab } from './components/ArchitectureLab';
import { CodeShowcase } from './components/CodeShowcase';
import { DeclarativeVsProgrammatic } from './components/DeclarativeVsProgrammatic';
import { SdlcSection } from './components/SdlcSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { GitHubSection } from './components/GitHubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Purge light theme flags and lock dark mode permanently
    localStorage.removeItem('sf_theme');
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#070C18] text-slate-100 overflow-x-hidden w-full max-w-full">
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main className="flex-1 overflow-x-hidden w-full max-w-full">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experience />
        <SkillsMatrix />
        <Projects />
        <Certifications />
        <ArchitectureLab />
        <CodeShowcase />
        <DeclarativeVsProgrammatic />
        <SdlcSection />
        <JourneyTimeline />
        <GitHubSection />
        <ContactSection />
      </main>

      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
