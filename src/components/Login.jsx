// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Importing CSS module

// export const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Example credentials for demo purposes
//     const validEmail = 'pk@gmail.com';
//     const validPassword = 'pavan123';

//     if (email === validEmail && password === validPassword) {
//       navigate('/nav');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="loginContainer">
//       <form className="loginForm" onSubmit={handleLogin}>
//         <h2 className="loginTitle">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="inputField"
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="inputField"
//           required
//         />
//         {error && <p className="errorMessage">{error}</p>}
//         <button type="submit" className="submitButton">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;