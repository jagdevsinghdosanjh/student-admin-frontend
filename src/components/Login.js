// // src/components/Login.js
// import axios from 'axios';
// import React, { useState } from 'react';

// const Login = ({ setRole }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
//       localStorage.setItem('token', response.data.token);
//       const role = parseJwt(response.data.token).role;
//       setRole(role);
//     } catch (error) {
//       setMessage(error.response.data.message);
//     }
//   };

//   const parseJwt = (token) => {
//     const base64Url = token.split('.')[1];
//     const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
//       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));
//     return JSON.parse(jsonPayload);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//       <div>{message}</div>
//     </div>
//   );
// };

// export default Login;

// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      const role = parseJwt(response.data.token).role;
      setRole(role);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <div>{message}</div>
    </div>
  );
};

export default Login;
