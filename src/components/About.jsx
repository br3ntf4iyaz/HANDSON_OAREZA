import React from 'react';
import myPhoto from '../assets/me.jpg'; // adjust path if needed

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <div style={styles.container}>
        <img src={myPhoto} alt="Me" style={styles.image} />
        <p style={styles.text}>
          Hello! I'm a second-year IT student at <strong>Dalubhasaan ng Lungsod ng Lucena</strong>.
          I'm passionate about web development, design, and solving real-world problems through code.
          I enjoy learning new technologies and working on creative projects that challenge me to grow.
        </p>
      </div>

      {/* Skills Section */}
      <h3 style={styles.skillsHeading}>My Skills</h3>
      <div style={styles.skillsContainer}>
        <div style={styles.skillCard}>
          <h4 style={styles.skillTitle}>Web Development</h4>
          <ul style={styles.skillList}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript (Basic)</li>
          </ul>
        </div>
        <div style={styles.skillCard}>
          <h4 style={styles.skillTitle}>Programming</h4>
          <ul style={styles.skillList}>
            <li>Java</li>
            <li>C</li>
            <li>Python (Basic)</li>
          </ul>
        </div>
        <div style={styles.skillCard}>
          <h4 style={styles.skillTitle}>Databases</h4>
          <ul style={styles.skillList}>
            <li>SQL</li>
            <li>MySQL</li>
            <li>Database Design (Basic)</li>
          </ul>
        </div>
        <div style={styles.skillCard}>
          <h4 style={styles.skillTitle}>Tools & Platforms</h4>
          <ul style={styles.skillList}>
            <li>Git & GitHub</li>
            <li>Visual Studio Code</li>
            <li>Basic Command Line</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    maxWidth: '900px',
    margin: '0 auto',
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  text: {
    fontSize: '1.2rem',
    color: '#444',
    maxWidth: '500px',
    textAlign: 'left',
  },
  skillsHeading: {
    fontSize: '2.2rem',
    marginTop: '3rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  skillsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  skillCard: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    textAlign: 'left',
  },
  skillTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#0a192f',
  },
  skillList: {
    fontSize: '1.1rem',
    color: '#555',
    listStyleType: 'none',
    padding: '0',
  },
};

export default About;
