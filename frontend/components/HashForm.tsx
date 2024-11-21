// components/HashForm.tsx

'use client';
import { useState, FormEvent } from 'react';

export default function HashForm(): JSX.Element {
  
  const [password, setPassword] = useState<string>('');
  const [hashedPassword, setHashedPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/hash_password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();
    setHashedPassword(data.hashed_password);
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="images/frontImg.jpg" alt="" />
            <div className="text">
              <span className="text-1">
                Become a coder and
                <br /> make your dreams alive
              </span>
              <span className="text-2">Code for innovation</span>
            </div>
          </div>
          <div className="back">
            <img className="backImg" src="images/backImg.jpg" alt="" />
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={handleSubmit}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <button type="submit" className="bg-purple-600 text-white p-3 rounded">
                      Hash Password & Submit
                    </button>
                  </div>
                  {hashedPassword && (
                    <div className="text sign-up-text mt-4 bg-gray-100 p-3 rounded shadow">
                      Hashed Password: <span className="font-mono">{hashedPassword}</span>
                    </div>
                  )}
                  <div className="text sign-up-text">
                    Don't have an account? <label htmlFor="flip">Signup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <div className="button input-box">
                    <input type="submit" defaultValue="Submit" />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account? <label htmlFor="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

;
