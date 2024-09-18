import { useState } from 'react'
import RandomVerse from './components/RandomVerse';
import SpecificVerse from './components/SpecificVerse';


const App = () => {
  return (
    <div style={styles.app}>
      <h1>Bible Verse App</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
};

const styles = {
  app: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
