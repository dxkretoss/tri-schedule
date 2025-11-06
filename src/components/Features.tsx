import { Card } from "@/components/ui/card";
import {
  Activity,
  BarChart3,
  Calendar,
  Heart,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Multi-Sport Tracking",
    description:
      "Track running, cycling, swimming, and 50+ other activities with precision",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description:
      "Get detailed insights into your performance with advanced metrics and charts",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "AI-powered training plans that adapt to your progress and recovery",
  },
  {
    icon: Heart,
    title: "Recovery Insights",
    description:
      "Monitor your body's recovery with HRV, sleep, and stress tracking",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Visualize your improvements over time with comprehensive reports",
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    description:
      "Instant synchronization across all your devices and platforms",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-[#FAF0EB4D]">
      <div className="container px-6 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#3440B5]">Everything</span> You Need to Excel
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive features designed for serious athletes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card shadow-card hover:shadow-elegant transition-smooth group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#3440B51A] flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="w-6 h-6 text-[#3440B5]" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
