import React from 'react';
import antiguaImage from '../assets/Antigua.png'; // ✅ proper image import

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.projectsContainer}>
        
        <div style={styles.projectCard}>
          <img 
            src={antiguaImage} 
            alt="Project Screenshot" 
            style={styles.image}
          />
          <h3 style={styles.projectTitle}>Antigua Website</h3>
          <p style={styles.projectDescription}>
            This is a sample project where we built a responsive and dynamic web page for a restaurant. It showcases modern UI design and interactive features.
          </p>
          <a 
            href="https://cjnica.github.io/Antigua-Website/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.button}
          >
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: { padding: '4rem 2rem', backgroundColor: '#fff', textAlign: 'center' },
  heading: { fontSize: '2.5rem', marginBottom: '2rem', color: '#333' },
  projectsContainer: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' },
  projectCard: { 
    backgroundColor: '#f9f9f9', 
    padding: '1.5rem', 
    borderRadius: '10px', 
    maxWidth: '400px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  },
  image: { width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' },
  projectTitle: { fontSize: '1.5rem', color: '#222', marginBottom: '0.5rem' },
  projectDescription: { fontSize: '1rem', color: '#666', marginBottom: '1.5rem' },
  button: { 
    display: 'inline-block', 
    padding: '0.7rem 1.5rem', 
    backgroundColor: '#007bff', 
    color: '#fff', 
    borderRadius: '5px', 
    textDecoration: 'none',
  },
};

export default Projects;
