// // src/components/AdminDashboard.js
// import React from 'react';

// const AdminDashboard = () => {
//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <button>Create Quiz</button>
//       <button>View Results</button>
//     </div>
//   );
// };

// export default AdminDashboard;

// src/components/AdminDashboard.js
import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [message, setMessage] = useState('');

  const fetchQuizzes = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:5000/api/quizzes', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setQuizzes(response.data);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={fetchQuizzes}>Fetch Quizzes</button>
      <div>{message}</div>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id}>{quiz.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
