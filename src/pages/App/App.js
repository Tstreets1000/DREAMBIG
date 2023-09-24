import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';

import Footer from '../../components/Footer/Footer';
import UserPortal from '../../components/UserPortal/UserPortal';
import NavBar from '../../components/NavBar/NavBar';
import HomeScreen from '../HomeScreen/HomeScreen';
import AuthPage from '../../pages/AuthPage/AuthPage';
import Profile from '../../pages/Profile/Profile';
import Colleges from '../../pages/Colleges/Colleges';
import ExtraCurr from '../../pages/ExtraCurr/ExtraCurr';
import Grades from '../../pages/Grades/Grades';
import Recommend from '../../pages/Recommend/Recommend';
import Sports from '../../pages/Sports/Sports';

export default function App() {
	const [user, setUser] = useState(getUser());

	return (
		<main className={styles.App}>
			<NavBar />
			<UserPortal user={user} setUser={setUser} />
			{user ? (
				<>
			<Routes>
				<Route
					path="/dreambig"
					element={
						<HomeScreen 
							user={user} 
							setUser={setUser} 
						/>
					}
				/>
				<Route
					path="/signUp"
					element={
						<AuthPage 
							user={user} 
							setUser={setUser} 
						/>
					}
				/>
				<Route 
					path="/colleges" 
					element={
						<Colleges 
							user={user} 
							setUser={setUser} 
						/>
					} 
				/>
				<Route 
					path="/extraCurr" 
					element={
						<ExtraCurr 
							user={user} 
							setUser={setUser} 
						/>
					} 
				/>
				<Route 
					path="/grades" 
					element={
						<Grades 
							user={user} 
							setUser={setUser} 
						/>
					} 
				/>
				<Route
					path="/profile"
					element={
						<Profile 
							user={user} 
							setUser={setUser}
						/>
					}
				/>
				<Route 
					path="/recommendations" 
					element={	
						<Recommend 
							user={user} 
							setUser={setUser} 
						/>
					} 
				/>
				<Route
					path="/sports"
					element={
						<Sports 
							user={user} 
							setUser={setUser} 
						/>
					}
				/>
				{/* redirect to /dreamBig if path in address bar hasn't matched a <Route> above */}
				<Route path="/*" element={<Navigate to="/dreambig" />} />
			</Routes>
			<Footer />
			</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}
