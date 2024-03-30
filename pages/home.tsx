// pages/home.tsx

import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

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
        <h1>Welcome to the Personal Finance Manager</h1>
     
        <button 
          onClick={navigateToTracker} 
          className="start-button"
        >
          Go to Finance Tracker
        </button>
      </main>
      <style jsx>{`
  .home-content {
    padding: 20px;
    text-align: center;
    font-weight: bold; // Make the text bold
    border-radius: 15px; // Rounded corners
    margin: auto; // Center the content
    max-width: 800px; // Maximum width of the content
  }

  .home-content h1 {
    color: #f5f5f7; // Dark text color for the heading
    font-size: 3.5em; // Larger font size for the heading
    margin-bottom: 20px; // Space below the heading
  }

  .home-content p {
    color: #424bed;
    font-size: 1.3em; // Slightly increased font size
    line-height: 1.5;
    font-weight: bold; // Make the text bold
    
  }

  .start-button {
    // Your existing styles for the start button
  }
`}</style>

      <style jsx>{`
  .home-content {
    padding: 20px;
    text-align: center;
  }
  .start-button {
    background-color: #635ae6;
    color: white;
    border: 1px solid white; // Added white border
    border-radius: 50%;
    width: 50vw; // 50% of the viewport width
    height: 50vw; // Also 50% of the viewport width for a circular shape
    max-width: 350px; // Maximum size limitation
    max-height: 350px; // Maximum size limitation
    font-size: 46px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10vh auto;
    position: relative;
    z-index: 2;
  }
`}</style>


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
