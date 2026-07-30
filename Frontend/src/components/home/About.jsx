import { ShieldCheck, BrainCircuit, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
            About NeuroPulse
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            AI that helps you understand your lifestyle.
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            NeuroPulse predicts your mental wellness score using
            machine learning by analyzing factors like study time,
            sleep duration, work pressure, stress level, and
            social media usage.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex gap-4">
              <ShieldCheck className="text-emerald-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">
                  Secure
                </h3>
                <p className="text-slate-400">
                  No personal data is stored.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <BrainCircuit className="text-blue-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">
                  Machine Learning
                </h3>
                <p className="text-slate-400">
                  Prediction powered by a trained ML model.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Sparkles className="text-yellow-400" size={28} />
              <div>
                <h3 className="font-semibold text-white">
                  Instant Results
                </h3>
                <p className="text-slate-400">
                  Receive your wellness score in seconds.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="space-y-6">

            <div>
              <p className="text-slate-400">Prediction Accuracy</p>
              <div className="mt-2 h-3 rounded-full bg-slate-800">
                <div className="h-3 w-[92%] rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"></div>
              </div>
            </div>

            <div>
              <p className="text-slate-400">Model Confidence</p>
              <div className="mt-2 h-3 rounded-full bg-slate-800">
                <div className="h-3 w-[88%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              </div>
            </div>

            <div>
              <p className="text-slate-400">Lifestyle Analysis</p>
              <div className="mt-2 h-3 rounded-full bg-slate-800">
                <div className="h-3 w-[95%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"></div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;