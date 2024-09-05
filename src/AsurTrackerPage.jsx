import React, { useState } from 'react';
import './App.css'; 
import logo from "./assets/logo.png"
import insta from "./assets/insta.jfif"
import fb from "./assets/fb.jfif"
import twitter from "./assets/twitter.jfif"

const AsurTrackerPage = () => {
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !platform) {
      setError('Both username and platform must be selected.');
      return;
    }
    setError('');
    console.log('Username:', username);
    console.log('Selected Platform:', platform);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <a href="https://www.sih.gov.in/" className="flex-shrink-0">
          <img src="https://www.sih.gov.in/img1/SIH2024-logo.png" alt="SIH Logo" className="h-10" />
        </a>
        <h1 className="text-xl font-bold">Team Aadigya</h1>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="mb-6 text-center">
          <img src={logo} alt="Asur Tracker Logo" className="mx-auto h-20 md:h-24" />
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="platform" className="block text-gray-700 text-sm font-bold mb-2">Select Platform:</label>
            <select
              id="platform"
              name="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>Select platform</option>
              <option value="instagram" className="flex items-center">
                <img src={insta} alt="Instagram" className="w-5 h-5 mr-2" /> Instagram
              </option>
              <option value="twitter" className="flex items-center">
                <img src={twitter} alt="Twitter" className="w-5 h-5 mr-2" /> Twitter
              </option>
              <option value="facebook" className="flex items-center">
                <img src={fb} alt="Facebook" className="w-5 h-5 mr-2" /> Facebook
              </option>
            </select>
          </div>
          {error && (
            <div className="mb-4 text-red-500 text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Get Data
          </button>
        </form>
      </main>
    </div>
  );
};

export default AsurTrackerPage;
