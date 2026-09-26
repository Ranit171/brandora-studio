import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Process from './components/Process';
import Capabilities from './components/Capabilities';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import InquiryModal from './components/InquiryModal';
import CaseStudyModal from './components/CaseStudyModal';
import { PROJECTS } from './data/projects';
import { Project } from './types';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenInquiry = () => {
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  const handleNextProject = (nextProject: Project) => {
    setSelectedProject(nextProject);
  };

  const handleViewWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5]">
        {/* Interactive Custom Cursor for Desktop */}
        <CustomCursor />

        {/* Sticky Minimal Navigation */}
        <Navbar onOpenInquiry={handleOpenInquiry} />

        <main>
          {/* Hero Section */}
          <Hero onOpenInquiry={handleOpenInquiry} onViewWork={handleViewWork} />

          {/* Services / What We Do Section */}
          <Services onOpenInquiry={handleOpenInquiry} />

          {/* About The Two-Person Studio */}
          <About onOpenInquiry={handleOpenInquiry} />

          {/* Selected Work Portfolio Archive */}
          <Work
            projects={PROJECTS}
            onSelectProject={handleSelectProject}
            onOpenInquiry={handleOpenInquiry}
          />

          {/* 5-Step Process Pipeline */}
          <Process onOpenInquiry={handleOpenInquiry} />

          {/* Results & Capability Statements */}
          <Capabilities onOpenInquiry={handleOpenInquiry} />

          {/* Client Testimonials */}
          <Testimonials />

          {/* Final Dramatic CTA */}
          <CTA onOpenInquiry={handleOpenInquiry} />
        </main>

        {/* Minimal Studio Footer */}
        <Footer onOpenInquiry={handleOpenInquiry} />

        {/* Interactive Project Inquiry Modal */}
        <InquiryModal isOpen={isInquiryOpen} onClose={handleCloseInquiry} />

        {/* Immersive Full-Screen Case Study View */}
        <CaseStudyModal
          project={selectedProject}
          onClose={handleCloseCaseStudy}
          onNextProject={handleNextProject}
          allProjects={PROJECTS}
        />
      </div>
    </SmoothScroll>
  );
}

