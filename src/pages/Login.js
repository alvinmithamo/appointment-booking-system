import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import '../styles/Login.css'; // Import CSS for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Mock API call
      console.log('User logged in:', formData);
      login(formData);
      navigate('/'); // Redirect to home page
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href='/signup'>Signup</a></p>
    </div>
  );
};

export default Login;









// import React, { useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Login.css'

//     const Login = () => {
//         const [formData, setFormData] = useState({
//           email: '',
//           password: '',
//         });
//         const [errors, setErrors] = useState({});
//         const navigate = useNavigate();
      
//         const handleChange = (e) => {
//           const { name, value } = e.target;
//           setFormData({ ...formData, [name]: value });
//         };
      
//         const validate = () => {
//           const newErrors = {};
//           if (!formData.email) newErrors.email = 'Email is required';
//           if (!formData.password) newErrors.password = 'Password is required';
//           setErrors(newErrors);
//           return Object.keys(newErrors).length === 0;
//         };
      
//         const handleSubmit = (e) => {
//           e.preventDefault();
//           if (validate()) {
//             // Mock API call
//             console.log('User logged in:', formData);
//             navigate('/'); // Redirect to home page
//           }
//         };
      
//   return (
//     <div className="login">
//     <h1>Login</h1>
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span className="error">{errors.email}</span>}
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <span className="error">{errors.password}</span>}
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   </div>
// );
  
// }

// export default Login