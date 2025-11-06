import { Button } from "@/components/ui/button";
import { Apple, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-runner.jpg";

const Hero = () => {
  return (
    <section className="gradient-bg relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" />

      <div className="container relative z-10 px-6 py-32 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Master Every Sport.
                <br />
                <span className="text-[#3440B5]">Track Every Second.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                TriSchedule syncs seamlessly with your Garmin and Apple Watch
                for all-sport tracking, deep analytics, and smart recovery
                insights in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button
                size="lg"
                className="text-lg h-14 px-8 shadow-elegant hover:scale-105 transition-smooth"
              >
                <Apple className="mr-2 h-5 w-5" />
                Get from App Store
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg h-14 px-8 shadow-card hover:scale-105 transition-smooth"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Get from Play Store
              </Button> */}
              <button className="text-lg h-14 shadow-elegant hover:scale-105 transition-smooth ">
                <img src="/android.svg" />
              </button>
              <button className="text-lg h-14 shadow-elegant hover:scale-105 transition-smooth ">
                <img src="/apple.svg" />
              </button>
            </div>

            <button className="group flex items-center text-primary font-medium hover:gap-3 transition-all">
              <PlayCircle className="mr-2 h-5 w-5" />
              SEE HOW IT WORKS
              <span className="ml-2 group-hover:ml-4 transition-all">→</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in hidden lg:block">
            <div className="relative">
              <img
                src={"/Mask group.png"}
                alt="Athletic woman running with smartwatch during golden hour"
                className="w-full"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-3xl" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#3440B51A] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#3440B51A] rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
