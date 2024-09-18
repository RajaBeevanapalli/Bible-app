import React, { useState } from 'react';

const RandomVerse = () => {
  const [verse, setVerse] = useState('');

  const fetchRandomVerse = async () => {
    try {
      const response = await fetch('https://labs.bible.org/api/?passage=random&type=json');
      const data = await response.json();
      setVerse(`${data[0].bookname} ${data[0].chapter}:${data[0].verse} - "${data[0].text}"`);
    } catch (error) {
      console.error("Error fetching random verse:", error);
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={fetchRandomVerse} style={styles.button}>Get Random Verse</button>
      {verse && <p style={styles.verse}>{verse}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  verse: {
    marginTop: '20px',
    fontSize: '18px',
    fontStyle: 'italic',
  },
};

export default RandomVerse;
