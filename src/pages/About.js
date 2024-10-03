import React from 'react';
import './About.css';
import AdityaPhoto from '../Components/team/aditya-photo.jpg';
import SumadharPhoto from '../Components/team/sumadhar-photo.jpg';
import MadhavPhoto from '../Components/team/madhav-photo.jpeg';

function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>About UpSkill</h1>
        <p>
          UpSkill is your go-to platform for professional growth, offering top-notch courses that prepare you for a successful career. 
          With expert guidance and flexible learning options, we're committed to helping you stand out.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We aim to bridge the gap between today's professionals and the skills they need for tomorrow. Our platform is tailored to provide high-quality education accessible to all.
        </p>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Excellence:</strong> We provide top-notch instructors and an unparalleled learning experience.</li>
          <li><strong>Accessibility:</strong> Learning available to anyone, anywhere, anytime.</li>
          <li><strong>Innovation:</strong> Continuously evolving to meet the industry's needs.</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Our Team Members</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={AdityaPhoto} alt="M. Aditya Naidu" className="team-photo" />
            <h3>M. Aditya Naidu</h3>
            <p>Team Lead</p>
          </div>
          <div className="team-card">
            <img src={SumadharPhoto} alt="V. Sumadhar" className="team-photo" />
            <h3>V. Sumadhar</h3>
            <p>Developer</p>
          </div>
          <div className="team-card">
            <img src={MadhavPhoto} alt="Madhava Sai" className="team-photo" />
            <h3>S. Madhava Sai</h3>
            <p>Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
