import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    image: "/Sarah Mitchell.svg",
    rating: 4,
    text: "TriSchedule transformed my training. The recovery insights helped me avoid injuries and the smart scheduling kept me consistent. I shaved 15 minutes off my marathon time!",
  },
  {
    name: "James Rodriguez",
    role: "Triathlete",
    image: "/James Rodriguez.svg",
    rating: 4,
    text: "Managing swim, bike, and run workouts used to be chaotic. TriSchedule's multi-sport tracking and analytics gave me the structure I needed. Best training investment I've made.",
  },
  {
    name: "Emma Chen",
    role: "Fitness Enthusiast",
    image: "/Emma Chen.svg",
    rating: 4,
    text: "I love how easy it is to track my progress across different activities. The app's interface is beautiful and the sync with my Apple Watch is flawless. Highly recommend!",
  },
  {
    name: "Michael Thompson",
    role: "Cycling Coach",
    image: "/Michael Thompson.svg",
    rating: 4,
    text: "As a coach, TriSchedule's team features are invaluable. I can monitor all my athletes' training, provide feedback, and adjust plans on the fly. It's a game-changer.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F7F9FC]">
      <div className="container px-6 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#3440B5]">Loved by </span>Athletes Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of athletes who trust TriSchedule to reach their
            goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "fill-[#F75D45] text-[#F75D45]"
                          : "fill-[#FF572480] text-[#FF572480]"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground h-[150px]">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    <img src={testimonial.image} />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
