import React, { useState } from 'react';
import { signUp, login } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.scss'

function SignUpForm({ setUser }) {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirm: '',
	});

	const handleChange = (evt) => {
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
			error: ''
		});
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const credentials = {
				email: formData.email,
				password: formData.password
			};

			const newUser = await signUp(formData);
			setUser(newUser);

			const loggedInUser = await login(credentials);
			setUser(loggedInUser);

			navigate('/');
		} catch (error) {
			console.error('Sign Up and Login Failed:', error);
			setFormData({
				...formData,
				error: 'Sign Up and Login Failed - Please try again.'
			});
		}
	};

	const disable = formData.password !== formData.confirm;

	return (
		<main className={styles.SignUpForm}>
			<form className={styles.SForm} autoComplete="off" onSubmit={handleSubmit}>
				<label>Username: </label>
				<input className={styles.Placeholder}
					placeholder='name'
					type="text"
					name="name"
					value={formData.username}
					onChange={handleChange}
					required
				/>
				<label>Email: </label>
				<input className={styles.Placeholder}
					placeholder='Email'
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<label>Password: </label>
				<input className={styles.Placeholder}
					placeholder='Password'
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					required
				/>
				<label>Confirm Password: </label>
				<input className={styles.Placeholder}
					placeholder='Confirm Password'
					type="password"
					name="confirm"
					value={formData.confirm}
					onChange={handleChange}
					required
				/>
				<button className={styles.SignUpBtn} type="submit" disabled={disable}>
					SIGN UP
				</button>
			</form>

			<p className={styles.errorMessage}>&nbsp;{formData.error}</p>
		</main>
	);
}

export default SignUpForm;


// import { Component } from "react";
// import { signUp } from '../../utilities/users-service';
// import styles from './SignUpForm.module.scss';

// export default class SignUpForm extends Component {
// state = {
//   name: '',
//   email: '',
//   password: '',
//   confirm: '',
//   error: ''
// };

// handleChange = (evt) => {
//   this.setState({
//     [evt.target.name]: evt.target.value,
//     error: ''
//   });
// };

// handleSubmit = async (evt) => {
//   evt.preventDefault();
//   try {
//     const formData = {...this.state};
//     delete formData.confirm;
//     delete formData.error;
//     // The promise returned by the signUp service method
//     // will resolve to the user object included in the
//     // payload of the JSON Web Token (JWT)
//     const user = await signUp(formData);
//     // Baby step
//     this.props.setUser(user);
//   } catch {
//     // An error happened on the server
//     this.setState({ error: 'Sign Up Failed - Try Again' });
//   }
// };

// // We must override the render method
// // The render method is the equivalent to a function-based component
// // (its job is to return the UI)
// render() {
//   const disable = this.state.password !== this.state.confirm;
//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={this.handleSubmit}>
//           <label>Name:</label>
//           <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
//           <label>Email:</label>
//           <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//           <label>Password:</label>
//           <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//           <label>Confirm:</label>
//           <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//           <button color="red" type="submit" disabled={disable}>SIGN UP</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{this.state.error}</p>
//     </div>
//   );
// }
// }