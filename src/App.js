import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import IsTriangle from './components/IsTriangle';

function App() {
  const [page, setPage] = useState('isTriangle');

  return (
    <>
      <header>
        <Navbar setPage={setPage} />
      </header>
      <main>
        <IsTriangle />
      </main>
    </>
  );
}

export default App;
