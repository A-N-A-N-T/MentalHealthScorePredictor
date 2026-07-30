import { HeartPulse } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 p-2">
            <HeartPulse className="text-white" size={22} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              NeuroPulse
            </h3>

            <p className="text-sm text-slate-400">
              AI Powered Mental Wellness
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500">
          © 2026 NeuroPulse. Built with React, FastAPI & Machine Learning.
        </p>

      </div>
    </footer>
  );
};

export default Footer;