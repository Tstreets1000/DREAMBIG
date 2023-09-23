import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getStudent } from '../../utilities/students-services'

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
	const [student, setStudent] = useState(getStudent());

	return (
		<main className={styles.App}>
			<NavBar />
			<UserPortal student={student} setStudent={setStudent} />
			{student ? (
				<>
			<Routes>
				<Route
					path="/dreamBig"
					element={
						<HomeScreen student={student} setStudent={setStudent} />}
				/>
				<Route
					path="/signUp"
					element={<AuthPage student={student} setStudent={setStudent} />}
				/>
				<Route 
					path="/colleges" 
					element={<Colleges student={student} setStudent={setStudent} />} 
				/>
				<Route 
					path="/extraCurr" 
					element={<ExtraCurr student={student} setStudent={setStudent} />} 
				/>
				<Route 
					path="/grades" 
					element={<Grades student={student} setStudent={setStudent} />} 
				/>
				<Route
					path="/profile"
					element={<Profile student={student} setStudent={setStudent} />}
				/>
				<Route 
					path="/recommend" 
					element={<Recommend student={student} setStudent={setStudent} />} 
				/>
				<Route
					path="/sports"
					element={<Sports student={student} setStudent={setStudent} />}
				/>
				{/* redirect to /dreamBig if path in address bar hasn't matched a <Route> above */}
				<Route path="/*" element={<Navigate to="/dreamBig" />} />
			</Routes>
			<Footer />
			</>
			) : (
				<AuthPage setStudent={setStudent} />
			)}
		</main>
	);
}
