import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which smartwatches are compatible with TriSchedule?",
    answer:
      "TriSchedule seamlessly integrates with both Garmin and Apple Watch devices. We support all major models including Apple Watch Series 4 and newer, as well as Garmin Forerunner, Fenix, and Venu series.",
  },
  {
    question: "How does the multi-sport tracking work?",
    answer:
      "TriSchedule automatically detects and tracks over 50 different sports and activities. Simply start your workout on your smartwatch, and our app will sync the data in real-time, providing detailed analytics and insights for each activity type.",
  },
  {
    question: "Can I use TriSchedule without a smartwatch?",
    answer:
      "While TriSchedule is optimized for smartwatch integration, you can still use many features including manual activity logging, training plan creation, and progress tracking through our mobile app.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes basic activity tracking, sync with one device, and access to our training library. You'll get essential metrics and up to 30 days of workout history.",
  },
  {
    question: "How does the AI-powered scheduling work?",
    answer:
      "Our smart scheduling algorithm analyzes your workout history, recovery metrics, and performance trends to create personalized training plans that adapt based on your progress and recovery status.",
  },
  {
    question: "Can I share my workouts with a coach?",
    answer:
      "Yes! Pro and Team plans include coach sharing features. Your coach can view your workouts, provide feedback, and adjust your training plan remotely.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-[#FAF0EB4D]">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently Asked <span className="text-[#3440B5]">Questions</span>{" "}
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about TriSchedule
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 border-none shadow-card"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
