import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <h2>Welcome to UpSkill!</h2>
        <p>Skill up, stand out, and unlock your potential with our tailored courses.</p>
      </div>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to UpSkill - Skill Up, Stand Out</h1>
          <p>Your platform for professional growth, empowering you to thrive in your career.</p>
          <button className="cta-button" onClick={() => navigate('/journey')}>
            Start Your Journey
          </button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>World-Class Instructors</h2>
          <p>Learn from top professionals who lead the way in their fields.</p>
        </div>
        <div className="feature-card">
          <h2>Diverse Skill Paths</h2>
          <p>Explore courses that cater to beginners and professionals alike, in a variety of industries.</p>
        </div>
        <div className="feature-card">
          <h2>Learn on Your Schedule</h2>
          <p>Flexible learning that fits into your busy life, allowing you to progress at your own pace.</p>
        </div>
      </section>

      <footer className="footer">
        <p><b>&copy; UpSkill 2024. Skill Up, Stand Out. All rights reserved. </b></p>
      </footer>
    </>
  );
}

export default Home;
