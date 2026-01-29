import { useState } from "react";
import { questions } from "../questions";

export default function Quiz() {
    const [score, setScore] = useState<number>(0)
    const [selectedOption, setSelectedOption] = useState<string>('')
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [isFinal, setIsFinal] = useState<boolean>(false)

    const answerHandler = (option: string) => {
        setSelectedOption(option)

        if (option == questions[currentQuestion].answer) {
            setScore(score + 1)
        }

        setTimeout(() => {
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1)
            } else {
                setIsFinal(true)
            }
        }, 1000);
    }

    const resetHandler = () => {
        setScore(0)
        setSelectedOption('')
        setCurrentQuestion(0)
        setIsFinal(false)
    }

    return (
        <section>
            {
                isFinal ? <div>
                    <h2>Quiz Completed</h2>
                    <h4>Your Score is : {score} from {questions.length} question.</h4>
                    <button onClick={resetHandler}>Restart</button>
                </div> : <div>
                    <h3>{questions[currentQuestion].question}</h3>
                    <ul>
                        {
                            questions[currentQuestion].options.map((option: string, index: number) => <li key={index} onClick={() => answerHandler(option)} style={{ backgroundColor: selectedOption == option ? (option == questions[currentQuestion].answer ? 'green' : 'red') : '' }}>{option}</li>)
                        }
                    </ul>
                </div>
            }
        </section>
    )
}