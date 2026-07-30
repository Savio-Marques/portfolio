import { Hero } from "./_components/hero";
import { ProjectsSection } from "./_components/projects-section";
import { AboutSection } from "./_components/about-section";
import { TechStackSection } from "./_components/tech-stack-section";
import { ExperienceSection } from "./_components/experience-section";
import { EducationSection } from "./_components/education-section";
import { ContactSection } from "./_components/contact-section";

export default function Home() {
  return (
    <>
      {/* Unified Global Ambient Lights (Fixed across the entire single-page layout) */}
      <div className="global-bg-lights">
        <div className="glow-emerald-top" />
        <div className="glow-violet-top" />
        <div className="glow-emerald-mid" />
        <div className="glow-violet-bottom" />
      </div>

      <Hero />
      <ProjectsSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}