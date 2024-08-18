import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setInterests((prevInterests) =>
      checked ? [...prevInterests, value] : prevInterests.filter((interest) => interest !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Form submitted successfully!${interests.length ? ` Interests: ${interests.join(', ')}` : ''}`);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <label>
          <input
            type="checkbox"
            value="Interest 1"
            onChange={handleCheckboxChange}
          /> Interest 1
        </label>
        <label>
          <input
            type="checkbox"
            value="Interest 2"
            onChange={handleCheckboxChange}
          /> Interest 2
        </label>
        <label>
          <input
            type="checkbox"
            value="Interest 3"
            onChange={handleCheckboxChange}
          /> Interest 3
        </label>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}

export default App;
