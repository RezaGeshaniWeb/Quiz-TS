interface Question {
    question: string;
    options: string[];
    answer: string;
}

export const questions: Question[] = [
    {
        question: "What is TypeScript?",
        options: [
            "A JavaScript framework",
            "A strongly typed superset of JavaScript",
            "A JavaScript library for React",
            "A server-side programming language"
        ],
        answer: "A strongly typed superset of JavaScript"
    },
    {
        question: "Which TypeScript feature allows a variable to have more than one type?",
        options: [
            "any",
            "unknown",
            "union types",
            "never"
        ],
        answer: "union types"
    },
    {
        question: "What does the following code mean? let x: number | string = 5;",
        options: [
            "This code causes a compile-time error",
            "x can only be a number",
            "x can be either a number or a string",
            "x is automatically converted to a string"
        ],
        answer: "x can be either a number or a string"
    },
    {
        question: "Which keyword is used to define an interface in TypeScript?",
        options: [
            "type",
            "class",
            "interface",
            "implements"
        ],
        answer: "interface"
    },
    {
        question: "What is the main difference between any and unknown in TypeScript?",
        options: [
            "any is safer than unknown",
            "unknown is safer than any",
            "They behave exactly the same",
            "any can only be used with arrays"
        ],
        answer: "unknown is safer than any"
    }
];