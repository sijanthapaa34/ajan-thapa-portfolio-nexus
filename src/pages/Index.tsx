
import React, { useEffect } from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

const Index = () => {
  // Preload images for better UX
  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = [
        "/lovable-uploads/494a3c31-2ea5-4b86-85cc-feaefdfe2ad0.png", // Updated profile image
        "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500",
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500",
        "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500",
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500",
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500",
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500"
      ];
      
      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };
    
    preloadImages();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <CustomCursor />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
