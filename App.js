import React from 'react';
import './App.css';
import profilePic from './WhatsApp Image 2023-12-22 at 20.01.33_5a9c5ded.jpg'; // Placeholder image, you can replace this

function App() {
  return (
    <div className="portfolio-container">
      <aside className="sidebar">
        <div className="profile-pic-wrapper">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <h2 className="name">BOLLA ADITHYA</h2>
        
        <div className="contact-info">
          <p>📧 adithyabolla50@gmail.com</p>
          <p>📱 +91 9392330513</p>
          <p>🐙 GitHub: <a href="https://github.com/adithya369-jpj"></a></p>
          <p>💼 LinkedIn:<a href=" https://www.linkedin.com/in/bolla-adithya-78207b349"></a></p>
        </div>
      </aside>
      <main className="main-content">
        <section className="about-section">
          <h1>About Me</h1>
          <p> I am a passionate Frontend Developer skilled in building responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks. I focus on delivering seamless experiences across all devices with clean, efficient code and attention to detail.</p>
        </section>
        <section className="skills-section">
          <h1>Skills</h1>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>python</li>
            <li>excel</li>
            <li>sql</li>
          </ul>
        </section>
        <section className="projects-section">
          <h1>Projects</h1>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image"></div>
              <h2>portfolio website</h2>
              <p>portfolio website using html,css,javascript</p>
            </div>
            <div className="project-card">
              <div className="project-image"></div>
              <h2>Student marks analysis</h2>
              <p>student marks analysis using python</p>
            </div>
            <div className="project-card">
              <div className="project-image"></div>
              <h2>weather app</h2>
              <p>weather app using react.js</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 