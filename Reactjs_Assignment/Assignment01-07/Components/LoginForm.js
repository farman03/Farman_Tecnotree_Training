// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [passwordError, setPasswordError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Perform validation on the email and password fields
//     if (email.trim() === '') {
//       alert('Please enter an email address.');
//       return;
//     }

//     if (password.trim() === '') {
//       alert('Please enter a password.');
//       return;
//     }

//     // If the password doesn't meet certain requirements, show an error message
//     if (!isValidPassword(password)) {
//       setPasswordError('Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.');
//       return;
//     }

//     // Log the user in
//     console.log('Logged in with email:', email);
//   };

//   const isValidPassword = (password) => {
//     const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
//     return regex.test(password);
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>

//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <input type="checkbox" id="showPassword" checked={showPassword} onChange={toggleShowPassword} />
//         <label htmlFor="showPassword">Show password</label>
//         {passwordError && <p>{passwordError}</p>}
//       </div>

//       <button type="submit">Log in</button>
//     </form>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // TODO: Add logic for handling login
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleShowPasswordChange = (event) => {
    setShowPassword(event.target.checked);
  }

  const passwordChecklist = (
    <ul>
      <li>At least 8 characters</li>
      <li>Contains at least one uppercase letter</li>
      <li>Contains at least one lowercase letter</li>
      <li>Contains at least one number</li>
      <li>Contains at least one special character</li>
    </ul>
  );

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <label>
        <input type="checkbox" checked={showPassword} onChange={handleShowPasswordChange} />
        Show password
      </label>
      {passwordChecklist}
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
