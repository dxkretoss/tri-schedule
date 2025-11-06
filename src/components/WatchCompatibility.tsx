import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WatchCompatibility = () => {
  return (
    <section className=" bg-[#F7F9FC]">
      <div className="container px-6 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            Compatible Devices
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Works With Your <span className="text-[#3440B5]">Watch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly sync with both Garmin and Apple Watch for comprehensive
            tracking
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Garmin Card */}
          <Card className="p-8 bg-gradient-card shadow-card hover:shadow-elegant transition-smooth group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Garmin Connect</h3>
                <Badge className="bg-[#2449FF1A] text-[#3440B5] border-[#2462FF33]">
                  Full Integration
                </Badge>
              </div>

              <div className="relative h-64 flex items-center justify-center">
                <img
                  src={"/Garmin Watch.svg"}
                  alt="Garmin Watch"
                  className="w-full h-full object-contain group-hover:scale-105 transition-smooth"
                />
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>All sports and activities tracked</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Advanced running and cycling metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Heart rate zones and recovery analysis</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Apple Watch Card */}
          <Card className="p-8 bg-gradient-card shadow-card hover:shadow-elegant transition-smooth group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Apple Watch</h3>
                <Badge className="bg-[#2449FF1A] text-[#3440B5] border-[#2462FF33]">
                  Full Integration
                </Badge>
              </div>

              <div className="relative h-64 flex items-center justify-center">
                <img
                  src={"/Apple Watch.svg"}
                  alt="Apple Watch"
                  className="w-full h-full object-contain group-hover:scale-105 transition-smooth"
                />
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>HealthKit integration for complete data sync</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Workout tracking with Apple Fitness+</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Real-time notifications and insights</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WatchCompatibility;
