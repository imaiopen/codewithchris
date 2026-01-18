import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import CoursesOverview from "@/components/sections/CoursesOverview";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import ErrorBoundary from "@/components/ErrorBoundary";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProblemSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <CoursesOverview />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProcessSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <CTASection />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
