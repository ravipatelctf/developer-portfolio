import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { toast } from "react-toastify";

export default function Quiz() {
    const [quizData, setQuizData] = useState(null);
    const [message, setMessage] = useState(null);
    
    useEffect(() => {
        setMessage(null)
        console.log(quizData)
    }, [quizData]);

    async function handleGenerateQuizProblem() {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/generate-gk-question`);
            setQuizData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    function handleAnswerCheck(option) {
        if (option !== quizData.correctAnswer) {
            toast.warn("wrong answer");
            setMessage(true)
            return;
        }
        toast.success("Correct answer")
        setMessage(true);
    }

    return (
        <>
        <Header />
        <hr />
        <main className="container">
            <section className="d-flex justify-content-center gap-3 pb-2">
                <button onClick={handleGenerateQuizProblem} className="btn btn-outline-dark text-white">New Question</button>
            </section>
            <section>
                <h6 className="text-white py-2">{quizData?.question}</h6>
                <div className="text-white list-group">
                {
                    quizData?.options?.map((option, index) => (
                        <div key={index} onClick={() => handleAnswerCheck(option)} className="text-white btn btn-outline-dark">{option || ""}</div>
                    ))
                }
                </div>
            </section>
            <div className="py-5">
                {message && (
                    <>
                    <p className="d-flex gap-2">
                        <span className="text-white fw-bold">Correct Answer:</span>
                        <span className={`text-white`}>{quizData?.correctAnswer}</span>
                    </p>
                    </>
                )}
            </div>
        </main>
        <hr />
        <Footer />
        </>
    );
}