// pages/home.tsx

import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import DigitalClock from '../components/DigitalClock'; // Make sure to create this component

const Home: React.FC = () => {
  const router = useRouter();

  // Function to navigate to the finance tracker page
  const navigateToTracker = () => {
    router.push('/'); // Adjust the path to where your finance tracker page is located
  };

  return (
    <div style={backgroundStyle}>
      <Navbar />
      <main className="home-content">
        <DigitalClock /> {/* Digital Clock component added */}
        <h1>Welcome to the Personal Finance Manager</h1>
        <button 
          onClick={navigateToTracker} 
          className="start-button"
        >
          Go to Finance Tracker
        </button>
      </main>
    </div>
  );
};

const backgroundStyle: React.CSSProperties = {
  backgroundImage: `url('/images/finace.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw',
};

export default Home;
