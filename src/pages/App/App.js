import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import {
	getStudent,
	signUp as studentSignUp 
} from '../../utilities/students-services';
import {
	getTeacher,
	signUp as teacherSignUp 
} from '../../utilities/teachers-services';
import {
	getCoach,
	signUp as coachSignUp 
} from '../../utilities/coaches-services';

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
	const [teacher, setTeacher] = useState(getTeacher());
	const [coach, setCoach] = useState(getCoach());
	return (
		<main>
			<NavBar />
			<UserPortal student={student} teacher={teacher} coach={coach} />
			<Routes>
				<Route
					path="/dreamBig"
					element={
						<HomeScreen
							student={student}
							setStudent={setStudent}
							teacher={teacher}
							setTeacher={setTeacher}
							coach={coach}
							setCoach={setCoach}
							pexelsData={pexelsData}
							setPexelsData={setPexelsData}
						/>
					}
				/>
				<Route
					path="/signUp"
					element={
						<AuthPage
							student={student}
							setStudent={setStudent}
							teacher={teacher}
							setTeacher={setTeacher}
							coach={coach}
							setCoach={setCoach}
						/>
					}
				/>
				<Route path="/colleges" element={<Colleges />} />
				<Route path="/extraCurr" element={<ExtraCurr student={student} />} />
				<Route
					path="/grades"
					element={<Grades teacher={teacher} setTeacher={setTeacher} />}
				/>
				<Route
					path="/profile"
					element={<Profile student={student} setStudent={setStudent} />}
				/>
				<Route
					path="/recommend"
					element={
						<Recommend
							teacher={teacher}
							setTeacher={setTeacher}
							coach={coach}
							setCoach={setCoach}
						/>
					}
				/>
				<Route
					path="/sports"
					element={<Sports student={student} setStudent={setStudent} />}
				/>
				<Route path="/*" element={<Navigate to="/dreamBig" />} />
			</Routes>
			<Footer />
		</main>
	);
}
