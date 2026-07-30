import { Activity, Moon, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Activity,
    title: "Lifestyle Analysis",
    description:
      "Analyze your daily habits including study routine, physical activity, and stress level.",
  },
  {
    icon: Moon,
    title: "Sleep Insights",
    description:
      "Understand how your sleeping patterns contribute to your overall wellness score.",
  },
  {
    icon: BarChart3,
    title: "AI Prediction",
    description:
      "Get an AI-powered wellness score using Machine Learning with personalized insights.",
  },
];

const Features = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-bold text-white">
          Why NeuroPulse?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;