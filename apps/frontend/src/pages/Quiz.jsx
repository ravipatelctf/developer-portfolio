import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { toast } from "react-toastify";

export default function Quiz() {
    const [quizData, setQuizData] = useState(null);
    const [messageShown, setMessageShown] = useState(false);

    useEffect(() => {
        setMessageShown(false);
    }, [quizData]);

    async function handleGenerateQuizProblem() {
        toast.info("Generating...");
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_SERVER_BASE_URL}/generate-gk-question`
            );
            setQuizData(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to generate question");
        }
    }

    function handleAnswerCheck(option) {
        if (!quizData) return;

        if (option !== quizData.correctAnswer) {
            toast.error("Wrong answer");
            setMessageShown(true);
            return;
        }

        toast.success("Correct answer");
        setMessageShown(true);
    }

    return (
        <>
            <Header />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">

                {/* Generate Button */}
                <section className="flex justify-center mb-8">
                    <button
                        onClick={handleGenerateQuizProblem}
                        className="px-5 py-2.5 bg-neutral-800 border border-gray-700 
                                  rounded-lg text-white font-semibold 
                                  hover:bg-neutral-700 transition"
                    >
                        New Question
                    </button>
                </section>

                {/* Question Section */}
                <section className="space-y-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-200">
                        {quizData?.question || "Click “New Question” to generate one"}
                    </h3>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {quizData?.options?.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleAnswerCheck(option)}
                                className="
                                    text-left w-full px-4 py-3 
                                    rounded-lg border border-gray-700 
                                    bg-neutral-900 text-gray-300 
                                    hover:bg-neutral-800 hover:border-gray-500 transition
                                "
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Feedback Box */}
                {messageShown && quizData && (
                    <div className="
                        mt-8 p-5 
                        bg-neutral-900 border border-gray-800 
                        rounded-xl shadow-lg
                    ">
                        <p className="text-gray-300 text-base flex flex-wrap gap-2">
                            <span className="text-white font-bold">Correct Answer:</span>
                            <span className="text-green-400">{quizData.correctAnswer}</span>
                        </p>
                    </div>
                )}

            </main>

            <Footer />
        </>
    );
}
