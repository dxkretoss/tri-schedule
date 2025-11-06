import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Track up to 3 sports",
      "Basic analytics",
      "7-day activity history",
      "Manual sync",
      "Community support",
    ],
    cta: "Get Started",
    variant: "secondary" as const,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "For serious athletes",
    features: [
      "Unlimited sports tracking",
      "Advanced analytics & insights",
      "Unlimited activity history",
      "Auto-sync with watches",
      "Priority support",
      "Training plans & coaching",
      "Heart rate zones analysis",
    ],
    cta: "Start Free Trial",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Team",
    price: "$24.99",
    period: "per month",
    description: "For coaches and teams",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team performance dashboard",
      "Shared training plans",
      "Custom analytics reports",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    variant: "secondary" as const,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 my-gradient-bg">
      <div className="container px-6 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, Transparent <span className="text-[#3440B5]">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your training goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "shadow-elegant border-2 border-[#3440B5] scale-105"
                  : "shadow-card"
              } hover:shadow-elegant transition-smooth`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <Button
                  variant={plan.variant}
                  className="w-full h-12 text-base"
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3 pt-6 border-t">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#3440B5] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
