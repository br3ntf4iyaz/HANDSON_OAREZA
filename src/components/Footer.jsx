import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Andrew Matthew Oareza. All rights reserved.</p>
      <p>
        Built with ❤️ using React.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f1f1f1',
    color: '#555',
    fontSize: '0.9rem',
    marginTop: '4rem'
  }
};

export default Footer;
