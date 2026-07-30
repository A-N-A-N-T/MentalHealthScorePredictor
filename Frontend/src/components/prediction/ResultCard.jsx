import { Brain, Sparkles } from "lucide-react";
import Loader from "./Loader";

const ResultCard = ({ prediction, loading }) => {
    return (
        <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            {/* Header */}
            <div className="flex items-center gap-3">
                <Brain className="text-emerald-400" size={28} />

                <h2 className="text-2xl font-bold text-white">
                    Prediction Result
                </h2>
            </div>

            {/* Score Circle */}
            <div className="mt-10 flex justify-center">

                <div className="flex h-48 w-48 items-center justify-center rounded-full border-8 border-emerald-500 bg-slate-900/40 shadow-lg shadow-emerald-500/10">

                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="text-center">

                            <h1
                                className={`text-6xl font-bold ${
                                    prediction === null
                                        ? "text-white"
                                        : prediction >= 80
                                        ? "text-green-400"
                                        : prediction >= 60
                                        ? "text-yellow-400"
                                        : "text-red-400"
                                }`}
                            >
                                {prediction !== null ? prediction : "--"}
                            </h1>

                            <p className="mt-2 text-sm font-medium text-slate-400">
                                Wellness Score
                            </p>

                        </div>
                    )}

                </div>

            </div>

            {/* AI Insight */}
            <div className="mt-10 rounded-2xl bg-slate-900/50 p-5">

                <div className="flex items-center gap-2">

                    <Sparkles
                        className="text-yellow-400"
                        size={20}
                    />

                    <h3 className="font-semibold text-white">
                        AI Insight
                    </h3>

                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">

                    {prediction === null
                        ? "Fill in all the required details and click Predict to generate your Mental Wellness Score."

                        : prediction >= 80
                        ? "Excellent! Your digital lifestyle appears well balanced. Keep maintaining healthy habits."

                        : prediction >= 60
                        ? "Your wellness score is good. Small improvements in sleep, physical activity, and screen time can further improve your mental well-being."

                        : prediction >= 40
                        ? "Your wellness score is moderate. Consider reducing excessive social media usage, improving your sleep schedule, and maintaining regular physical activity."

                        : "Your wellness score is low. Focus on improving your daily routine, reducing stress, getting enough sleep, and limiting unnecessary screen time for better mental wellness."}

                </p>

            </div>

        </div>
    );
};

export default ResultCard;