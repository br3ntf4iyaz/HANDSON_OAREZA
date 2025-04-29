import React from 'react';

function Hero() {
  return (
    <section id="hero" style={styles.heroSection}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroHeading}>Welcome to My Portfolio</h1>
        <p style={styles.heroDescription}>
          I'm a passionate IT student at Dalubhasaan ng Lungsod ng Lucena. I enjoy developing creative solutions
          and building web applications using modern technologies. Feel free to explore my work below.
        </p>
        <a href="#projects" style={styles.ctaButton}>
          View My Projects
        </a>
      </div>
      <div style={styles.heroImageContainer}>

      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    padding: '0 2rem',
    background: 'linear-gradient(135deg, #3498db, #8e44ad)', // Gradient background
    color: '#fff',
  },
  heroContent: {
    flex: 1,
    maxWidth: '600px',
    padding: '2rem',
    textAlign: 'left',
  },
  heroHeading: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroDescription: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    lineHeight: '1.6',
  },
  ctaButton: {
    display: 'inline-block',
    padding: '1rem 2rem',
    backgroundColor: '#ff6347',
    color: '#fff',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s ease',
  },
  ctaButtonHover: {
    backgroundColor: '#e53e3e', // Darker shade for hover effect
  },
  heroImageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  },
};

export default Hero;
