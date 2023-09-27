import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.scss';

export default function LoginForm({ setUser }) {
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
}

return (
    <main className={styles.StudentServices}>
      <h1><strong>Account Services - LOG IN</strong></h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className={styles.Label}>Email: </label>
          <input className={styles.Placeholder}
            placeholder="EMAIL HERE" 
            type="text" 
            name="email" 
            value={credentials.email} 
            onChange={handleChange} 
            required 
          />
          <label className={styles.Label}>Password: </label>
          <input className={styles.Placeholder}
            placeholder="PASSWORD HERE" 
            type="password" 
            name="password" 
            value={credentials.password} 
            onChange={handleChange} 
            required />
          <button className={styles.LogInBtn} 
          type="submit">
            LOG IN
          </button>
        </form>

      <p className="error-message">&nbsp;{error}</p>
    </main>
  );
}