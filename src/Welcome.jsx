// src/Welcome.jsx
import { useState } from 'react';

const Welcome = ({ name = 'Guest' }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={handleClick} data-testid="welcome-button">
        Click Me
      </button>
      {clicked && <p data-testid="welcome-message">Thank you for clicking!</p>}
    </div>
  );
};

export default Welcome;