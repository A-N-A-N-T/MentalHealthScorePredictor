import Navbar from "../common/Navbar";
import { motion } from "framer-motion";
import Feature from "../home/Feature.jsx";
import About from "../home/About.jsx";
import Footer from "../common/Footer.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_45%)]"></div>

      <Navbar />

      <section className="relative z-10 flex min-h-[88vh] items-center justify-center px-6">

        <div className="mx-auto max-w-5xl text-center">

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-medium text-emerald-300">
              AI Powered Wellness Analysis
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl"
          >
            Understand Your
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Digital Well-Being
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl"
          >
            Analyze how your screen time, social media habits,
            sleep, study routine, and lifestyle influence your
            overall wellness using Machine Learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
          >
            <button className="rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105">
              Analyze My Wellness
            </button>

            <button className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-white/10">
              Learn More
            </button>
          </motion.div>

        </div>

      </section>

      <Feature/>
      
      <About/>

      <Footer/>

    </div>
  );
};

export default Home;