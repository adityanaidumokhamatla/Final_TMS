import React from 'react';
import './Journey.css';

const courses = [
  {
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build your first website.',
    link: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n', 
  },
  {
    title: 'Java Programming',
    description: 'Master the fundamentals of Java and start creating your own applications.',
    link: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q',
  },
  {
    title: 'Python for Data Science',
    description: 'Get started with Python and learn how to analyze data using libraries like pandas and NumPy.',
    link: 'https://www.youtube.com/playlist?list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV', 
  },
  {
    title: 'React - Frontend Framework',
    description: 'Learn how to build interactive and responsive web applications using React.',
    link: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt', 
  },
  {
    title: 'Cybersecurity Basics',
    description: 'Understand the core principles of cybersecurity and how to secure systems and networks.',
    link: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGnXrHnMcFFPM4lUwQlR7ZT',
  },
  {
    title: 'Blockchain Essentials',
    description: 'Explore the basics of blockchain technology and its applications.',
    link: 'https://www.youtube.com/playlist?list=PLYwpaL_SFmcDFRupamGc-9zc-vQqvkQnn', 
  },
  {
    title: 'Machine Learning with Python',
    description: 'Dive into machine learning algorithms and techniques using Python.',
    link: 'https://www.youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw', 
  },
];

const Journey = () => {
  return (
    <div className="journey">
      <h1>Your Learning Journey Starts Here!</h1>
      <p>Explore our free courses and start learning today:</p>
      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <a href={course.link} className="course-link" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
