import { useState } from "react";

import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import RangeField from "../common/RangeField";
import toast from "react-hot-toast";
import api from "../services/api";

const PredictionForm = ({
    setPrediction,
    setLoading,
}) => {
    const [formData, setFormData] = useState({
        age: "",
        gender: "",
        country: "",
        academic_level: "",
        most_used_platform: "",
        purpose_of_use: "",
        avg_daily_usage_hours: 2,
        daily_unlocks: 50,
        study_hours: 4,
        physical_activity_hours: 1,
        sleep_hours_per_night: 7,
        stress_level: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const { data } = await api.post(
                "/predictionYourMentalScore",
                formData
            );

            setPrediction(data.predicted_mental_health_score);

            toast.success("Prediction Generated Successfully");

        } catch (error) {

            console.error(error);

            toast.error("Prediction Failed");

        } finally {

            setLoading(false);

        }

    };

    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

            <h2 className="mb-8 text-3xl font-bold text-white">
                Lifestyle Details
            </h2>

            <form
                onSubmit={handleSubmit}
                className="grid gap-8 md:grid-cols-2"
            >

                <InputField
                    label="Age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="18"
                />

                <SelectField
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    options={[
                        { label: "Male", value: "Male" },
                        { label: "Female", value: "Female" },
                    ]}
                />

                <InputField
                    label="Country"
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="India"
                />

                <SelectField
                    label="Academic Level"
                    name="academic_level"
                    value={formData.academic_level}
                    onChange={handleChange}
                    options={[
                        { label: "High School", value: "High School" },
                        { label: "Undergraduate", value: "Undergraduate" },
                        { label: "Graduate", value: "Graduate" },
                    ]}
                />

                <SelectField
                    label="Most Used Platform"
                    name="most_used_platform"
                    value={formData.most_used_platform}
                    onChange={handleChange}
                    options={[
                        { label: "Instagram", value: "Instagram" },
                        { label: "YouTube", value: "YouTube" },
                        { label: "Facebook", value: "Facebook" },
                        { label: "LinkedIn", value: "LinkedIn" },
                        { label: "Snapchat", value: "Snapchat" },
                        { label: "Twitter", value: "Twitter" },
                        { label: "TikTok", value: "TikTok" },
                        { label: "WhatsApp", value: "WhatsApp" },
                        { label: "LINE", value: "LINE" },
                        { label: "KakaoTalk", value: "KakaoTalk" },
                        { label: "VKontakte", value: "VKontakte" },
                        { label: "WeChat", value: "WeChat" },
                    ]}
                />

                <SelectField
                    label="Purpose of Use"
                    name="purpose_of_use"
                    value={formData.purpose_of_use}
                    onChange={handleChange}
                    options={[
                        { label: "Education", value: "Education" },
                        { label: "Entertainment", value: "Entertainment" },
                        { label: "Networking", value: "Networking" },
                        { label: "News", value: "News" },
                    ]}
                />

                <RangeField
                    label="Average Daily Usage (Hours)"
                    name="avg_daily_usage_hours"
                    min={0}
                    max={24}
                    step={0.5}
                    value={formData.avg_daily_usage_hours}
                    onChange={handleChange}
                />

                <RangeField
                    label="Daily Unlocks"
                    name="daily_unlocks"
                    min={0}
                    max={300}
                    value={formData.daily_unlocks}
                    onChange={handleChange}
                />

                <RangeField
                    label="Study Hours"
                    name="study_hours"
                    min={0}
                    max={16}
                    step={0.5}
                    value={formData.study_hours}
                    onChange={handleChange}
                />

                <RangeField
                    label="Physical Activity (Hours)"
                    name="physical_activity_hours"
                    min={0}
                    max={10}
                    step={0.5}
                    value={formData.physical_activity_hours}
                    onChange={handleChange}
                />

                <RangeField
                    label="Sleep Hours Per Night"
                    name="sleep_hours_per_night"
                    min={0}
                    max={12}
                    step={0.5}
                    value={formData.sleep_hours_per_night}
                    onChange={handleChange}
                />

                <SelectField
                    label="Stress Level"
                    name="stress_level"
                    value={formData.stress_level}
                    onChange={handleChange}
                    options={[
                        { label: "Low", value: "Low" },
                        { label: "Medium", value: "Medium" },
                        { label: "High", value: "High" },
                        { label: "Very High", value: "Very High" },
                    ]}
                />

                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
                    >
                        Predict Mental Health Score
                    </button>

                    <button
                        type="button"
                        onClick={() => {

                            setPrediction(null);

                            setFormData({
                                age: "",
                                gender: "",
                                country: "",
                                academic_level: "",
                                most_used_platform: "",
                                purpose_of_use: "",
                                avg_daily_usage_hours: 2,
                                daily_unlocks: 50,
                                study_hours: 4,
                                physical_activity_hours: 1,
                                sleep_hours_per_night: 7,
                                stress_level: "",
                            });

                        }}
                        className="mt-4 w-full rounded-xl border border-white/10 bg-slate-800 py-4 font-semibold text-white transition hover:bg-slate-700"
                    >
                        Reset Form
                    </button>

                </div>

            </form>

        </div>
    );
};

export default PredictionForm;