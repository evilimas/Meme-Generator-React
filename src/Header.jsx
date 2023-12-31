import React from 'react';
import logo from './images/troll-face.png';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header--image" alt="troll face logo img" />
      <h2 className="header--title">Your Meme Generator</h2>
      <h4 className="header--project">Make your favorite meme</h4>
    </header>
  );
}
