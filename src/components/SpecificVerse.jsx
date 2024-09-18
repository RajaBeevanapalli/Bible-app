import React, { useState } from 'react';

const SpecificVerse = () => {
  const [verse, setVerse] = useState('');
  const [book, setBook] = useState('');
  const [chapter, setChapter] = useState('');
  const [verseNumber, setVerseNumber] = useState('');

  const fetchSpecificVerse = async () => {
    try {
      const response = await fetch(`https://labs.bible.org/api/?passage=${book}+${chapter}:${verseNumber}&type=json`);
      const data = await response.json();
      setVerse(`${data[0].bookname} ${data[0].chapter}:${data[0].verse} - "${data[0].text}"`);
    } catch (error) {
      console.error("Error fetching specific verse:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Get Specific Verse</h2>
      <input
        type="text"
        placeholder="Book (e.g., John)"
        value={book}
        onChange={(e) => setBook(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Chapter"
        value={chapter}
        onChange={(e) => setChapter(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Verse"
        value={verseNumber}
        onChange={(e) => setVerseNumber(e.target.value)}
        style={styles.input}
      />
      <button onClick={fetchSpecificVerse} style={styles.button}>Get Verse</button>
      {verse && <p style={styles.verse}>{verse}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  input: {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#2196F3',
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

export default SpecificVerse;
