import { ExperienceSection } from "./_components/sections/experience-section";
import { IconsSection } from "./_components/sections/icons-section";
import { ProfileSection } from "./_components/sections/about-section";
import { ProjectsSection } from "./_components/sections/projects-section";
import { ContactSection } from "./_components/sections/contact-section";

const Home = () => {
  return (
    <div className="pt-17 min-h-screen w-full inline-flex justify-center">
      <div className="[@media(min-width:400px)]:w-140 w-100 items-center p-2">
        <ProfileSection className="mb-3" />
        <IconsSection className="mb-5" />
        <ExperienceSection className="mb-5" />
        <ProjectsSection className="mb-5" />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
