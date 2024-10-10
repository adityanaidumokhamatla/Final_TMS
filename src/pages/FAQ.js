import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: "You can enroll by clicking the 'Enroll' button on the course page."
  },
  {
    question: "Is the platform free to use?",
    answer: "Yes, all the courses are available for free."
  },
  {
    question: "How do I receive a certificate?",
    answer: "Complete all the modules and quizzes of a course to receive a certificate."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach out to us through the chat support option on the bottom right of your screen or drop a message to us by navigating to the Contact page"
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
