// Quiz.js
import  { useState } from 'react';
import { Button, Container } from '@mui/material';
import QuestionCard from './QuestionCard';

const questions = [
    {
        id: 1,
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4',
    },
    {
        id: 3,
        question: 'Which company developed JavaScript?',
        options: ['Google', 'Apple', 'Microsoft', 'Netscape'],
        answer: 'Netscape',
    },
    {
        id: 4,
        question: 'Which of the following is a JavaScript framework?',
        options: ['Laravel', 'Django', 'React', 'Rails'],
        answer: 'React',
    },
    {
        id: 5,
        question: 'What is the output of "typeof null"?',
        options: ['null', 'undefined', 'object', 'number'],
        answer: 'object',
    },
    {
        id: 6,
        question: 'Which symbol is used for comments in JavaScript?',
        options: ['//', '/*', '#', '<!--'],
        answer: '//',
    },
    {
        id: 7,
        question: 'How do you create a function in JavaScript?',
        options: ['function myFunction()', 'def myFunction()', 'create myFunction()', 'lambda myFunction()'],
        answer: 'function myFunction()',
    },
    {
        id: 8,
        question: 'Which method is used to parse a JSON string into a JavaScript object?',
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.toObject()'],
        answer: 'JSON.parse()',
    },
    {
        id: 9,
        question: 'What is the correct way to declare a variable in JavaScript?',
        options: ['variable myVar', 'let myVar', 'var: myVar', 'myVar = var'],
        answer: 'let myVar',
    },
    {
        id: 10,
        question: 'Which of the following is NOT a reserved word in JavaScript?',
        options: ['interface', 'throws', 'program', 'short'],
        answer: 'program',
    },
];


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answer) => {
        setUserAnswers([...userAnswers, { questionId: questions[currentQuestion].id, answer }]);
    };

    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleSubmit = () => {
        // Implement your logic for handling submission, e.g., calculating score
        console.log('User answers:', userAnswers);
        setShowResult(true);
    };

    const calculateScore = () => {
        let score = 0;
        userAnswers.forEach((userAnswer) => {
            const question = questions.find((q) => q.id === userAnswer.questionId);
            if (question.answer === userAnswer.answer) {
                score++;
            }
        });
        return score;
    };

    return (
        <Container>
            {!showResult && currentQuestion < questions.length ? (
                <QuestionCard
                    question={questions[currentQuestion]}
                    onNext={handleNext}
                    onAnswer={handleAnswer}
                />
            ) : (
                <div>
                    <p>Quiz completed!</p>
                    {!showResult && <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>}
                    {showResult && (
                        <div>
                            <p>Your score: {calculateScore()} / {questions.length}</p>
                            {/* You can display more details about the user's performance here */}
                        </div>
                    )}
                </div>
            )}
        </Container>
    );
};

export default Quiz;
