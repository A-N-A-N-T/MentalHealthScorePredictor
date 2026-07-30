import { useState } from "react";
import PredictionForm from "../prediction/PredictionForm";
import ResultCard from "../prediction/ResultCard";

const Prediction = () => {

    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-16">

            <div className="mx-auto max-w-7xl">

                <div className="mb-12 text-center">

                    <h1 className="text-5xl font-bold text-white">
                        Predict Your Wellness Score
                    </h1>

                    <p className="mt-4 text-lg text-slate-400">
                        Enter your lifestyle information to receive an AI-powered
                        mental wellness prediction.
                    </p>

                </div>

                <div className="grid gap-10 lg:grid-cols-3">

                    <div className="lg:col-span-2">

                        <PredictionForm
                            setPrediction={setPrediction}
                            setLoading={setLoading}
                        />

                    </div>

                    <ResultCard
                        prediction={prediction}
                        loading={loading}
                    />

                </div>

            </div>

        </div>
    );
};

export default Prediction;