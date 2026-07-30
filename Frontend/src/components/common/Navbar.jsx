import { Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 shadow-lg shadow-emerald-500/20">
          <Activity className="h-6 w-6 text-white" />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            NeuroPulse
          </h1>
          <p className="text-xs text-slate-400">
            Digital Wellness Predictor
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8 text-slate-300">
        <Link to="/" className="hover:text-emerald-400 transition">
          Home
        </Link>

        <Link to="/prediction" className="hover:text-emerald-400 transition">
          Prediction
        </Link>

        <a href="#" className="hover:text-emerald-400 transition">
          About
        </a>

        <button className="rounded-xl border border-emerald-500 px-5 py-2 text-emerald-400 transition hover:bg-emerald-500 hover:text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;