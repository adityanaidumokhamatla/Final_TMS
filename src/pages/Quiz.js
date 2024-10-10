import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2'; // Import Pie and Bar from react-chartjs-2
import 'chart.js/auto'; // Required for charts
import './Quiz.css';

const quizQuestions = [
  {
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
      'Hyper Tool Making Language',
    ],
    answer: 'Hyper Text Markup Language',
  },
  {
    question: 'Which language is used for styling web pages?',
    options: ['HTML', 'JQuery', 'CSS', 'XML'],
    answer: 'CSS',
  },
  {
    question: 'Which is not a JavaScript framework?',
    options: ['Python Script', 'JQuery', 'Django', 'NodeJS'],
    answer: 'Django',
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeTaken, setTimeTaken] = useState([]); // Array to store time taken per question
  const [startTime, setStartTime] = useState(null); // Start time for each question

  useEffect(() => {
    setStartTime(Date.now()); // Record start time when question loads
  }, [currentQuestion]);

  const handleAnswerOptionClick = (selectedOption) => {
    const endTime = Date.now();
    const timeForThisQuestion = (endTime - startTime) / 1000; // Time in seconds
    setTimeTaken([...timeTaken, timeForThisQuestion]); // Add the time to the array

    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // Data for the pie chart (score visualization)
  const pieData = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Quiz Results',
        data: [score, quizQuestions.length - score],
        backgroundColor: ['#4caf50', '#f44336'], // Green for correct, red for incorrect
        hoverOffset: 4,
      },
    ],
  };

  // Data for the bar chart (time taken for each question)
  const barData = {
    labels: quizQuestions.map((_, index) => `Question ${index + 1}`),
    datasets: [
      {
        label: 'Time Taken (seconds)',
        data: timeTaken,
        backgroundColor: '#42a5f5', // Blue color for the bars
      },
    ],
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {quizQuestions.length}</h2>
          <div className="chart-section">
            <Pie data={pieData}
             width={200} // Reduce the width
             height={200} // Reduce the height
             options={{ maintainAspectRatio: false }} // This ensures the size remains fixed
             /> {/* Pie chart showing score */}
            <Bar
             data={barData}
            width={300} // Reduce the width
            height={200} // Reduce the height
            options={{ maintainAspectRatio: false }} // Ensures the chart scales correctly
            />
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">{quizQuestions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
