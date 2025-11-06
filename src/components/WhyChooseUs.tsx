import { AlertCircle, CheckCircle } from "lucide-react";
import dataDashboard from "@/assets/data-dashboard.png";
import sleepTracking from "@/assets/sleep-tracking.png";

const problems = [
  {
    problem: {
      title: "Fragmented Data Chaos",
      description:
        "Your fitness data is scattered across multiple apps, making it impossible to see the complete picture.",
      icon: AlertCircle,
    },
    solution: {
      title: "TriSchedule solves this",
      description:
        "One unified dashboard brings all your Garmin data together with intelligent insights.",
      icon: CheckCircle,
    },
    image: "./TriSchedule-1.png",
    imageAlt: "Unified fitness data dashboard illustration",
    imagePosition: "right",
  },
  {
    problem: {
      title: "Inaccurate Sleep Tracking",
      description:
        "Generic sleep apps miss crucial recovery metrics that serious athletes need for optimal performance.",
      icon: AlertCircle,
    },
    solution: {
      title: "TriSchedule solves this",
      description:
        "Advanced sleep analytics correlate with your training load for personalized recovery recommendations.",
      icon: CheckCircle,
    },
    image: "./TriSchedule-2.png",
    imageAlt: "Advanced sleep tracking analytics illustration",
    imagePosition: "left",
  },
  {
    problem: {
      title: "No Long-term Insights",
      description:
        "Most apps show daily stats but fail to reveal meaningful trends and patterns over time.",
      icon: AlertCircle,
    },
    solution: {
      title: "TriSchedule solves this",
      description:
        "Comprehensive progress tracking reveals trends across weeks, months, and years of training.",
      icon: CheckCircle,
    },
    image: "./TriSchedule-3.png",
    imageAlt: "Unified fitness data dashboard illustration",
    imagePosition: "right",
  },
  {
    problem: {
      title: "Complex Setup Process",
      description:
        "Setting up multiple fitness apps and connecting devices is time-consuming and frustrating.",
      icon: AlertCircle,
    },
    solution: {
      title: "TriSchedule solves this",
      description:
        "One-tap Garmin sync gets you started instantly with zero configuration required.",
      icon: CheckCircle,
    },
    image: "./TriSchedule-4.png",
    imageAlt: "Advanced sleep tracking analytics illustration",
    imagePosition: "left",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="container px-6 mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Athletes Choose{" "}
            <span className="text-[#3440B5]">TriSchedule</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We solve the real problems that hold back your training progress
          </p>
        </div>

        <div className="space-y-32">
          {problems.map((item, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                item.imagePosition === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div
                className={`space-y-8 ${
                  item.imagePosition === "left" ? "lg:order-2" : ""
                }`}
              >
                {/* Problem */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.problem.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {item.problem.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.problem.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="space-y-4 pl-4 border-l-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.solution.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {item.solution.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.solution.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-[#484848] text-[16px]">
                    Download TriSchedule and boost your performance.
                  </span>
                  <div className="flex gap-2 mt-5">
                    <img src="/android.svg" className="w-[130px]" />
                    <img src="/apple.svg" className="w-[130px]" />
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div
                className={`relative ${
                  item.imagePosition === "left" ? "lg:order-1" : ""
                }`}
              >
                <div className="flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-[512px] object-cover rounded-md mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
