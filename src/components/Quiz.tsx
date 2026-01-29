import { useState } from "react";
import { questions } from "../questions";

export default function Quiz() {
    const [score, setScore] = useState<number>(0)
    const [selectedOption, setSelectedOption] = useState<string>('')
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [isFinal, setIsFinal] = useState<boolean>(false)

    const answerHandler = (option: string) => {
        setSelectedOption(option)

        if (option === questions[currentQuestion].answer) {
            setScore(score + 1)
        }

        setTimeout(() => {
            setSelectedOption('')
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1)
            } else {
                setIsFinal(true)
            }
        }, 800);
    }

    const resetHandler = () => {
        setScore(0)
        setSelectedOption('')
        setCurrentQuestion(0)
        setIsFinal(false)
    }

    return (
        <section className="bg-slate-700/40 backdrop-blur rounded-2xl p-6 shadow-xl">
            {isFinal ? (
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-semibold text-green-400">
                        Quiz Completed 🎉
                    </h2>

                    <h4 className="text-lg">
                        Your Score:{" "}
                        <span className="font-bold text-yellow-400">
                            {score}
                        </span>{" "}
                        / {questions.length}
                    </h4>

                    <button
                        onClick={resetHandler}
                        className="mt-4 px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
                    >
                        Restart
                    </button>
                </div>
            ) : (
                <div className="space-y-6">
                    <h3 className="text-xl font-medium">
                        {questions[currentQuestion].question}
                    </h3>

                    <ul className="grid grid-cols-1 gap-3">
                        {questions[currentQuestion].options.map((option: string, index: number) => {
                            const isSelected = selectedOption === option
                            const isCorrect = option === questions[currentQuestion].answer

                            return (
                                <li
                                    key={index}
                                    onClick={() => answerHandler(option)}
                                    className={`
                    cursor-pointer px-4 py-3 rounded-lg border transition
                    ${isSelected
                                            ? isCorrect
                                                ? "bg-green-600 border-green-400"
                                                : "bg-red-600 border-red-400"
                                            : "bg-slate-800 border-slate-600 hover:bg-slate-600"
                                        }
                  `}
                                >
                                    {option}
                                </li>
                            )
                        })}
                    </ul>

                    <p className="text-sm text-slate-300 text-right">
                        Question {currentQuestion + 1} / {questions.length}
                    </p>
                </div>
            )}
        </section>
    )
}
