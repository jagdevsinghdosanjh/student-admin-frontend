// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// // src/App.js
// import React, { useState } from 'react';
// import AdminDashboard from './components/AdminDashboard';
// import Login from './components/Login';
// import StudentDashboard from './components/StudentDashboard';

// const App = () => {
//   const [role, setRole] = useState('');

//   return (
//     <div className="App">
//       <h1>Admin and Student System</h1>
//       {role === '' && <Login setRole={setRole} />}
//       {role === 'admin' && <AdminDashboard />}
//       {role === 'student' && <StudentDashboard />}
//     </div>
//   );
// };

// export default App;

// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  const [role, setRole] = useState('');

  return (
    <div className="App">
      <h1>Admin and Student System</h1>
      {role === '' && <Login setRole={setRole} />}
      {role === 'admin' && <AdminDashboard />}
      {role === 'student' && <StudentDashboard />}
    </div>
  );
};

export default App;
