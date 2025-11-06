import { Button } from "@/components/ui/button";
import { Apple, PlayCircle } from "lucide-react";

const AppDownload = () => {
  return (
    <section
      className="py-24  text-primary-foreground relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3440B5 0%, #212DA2 100%)",
      }}
    >
      <div className="absolute inset-0  opacity-90" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your Training?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Download TriSchedule today and start your journey to peak
            performance
          </p>

          <div className="flex sm:flex-row gap-4 justify-center items-center">
            <button className="text-lg h-14   hover:scale-105 transition-smooth ">
              <img src="/apple.svg" />
            </button>
            <button className="text-lg h-14  hover:scale-105 transition-smooth ">
              <img src="/android.svg" />
            </button>
          </div>

          <p className="text-sm text-primary-foreground/70 pt-4">
            Available on iOS 14+ and Android 8.0+
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
};

export default AppDownload;
