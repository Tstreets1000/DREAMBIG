import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ student, setStudent }) {
    const [showLogin, setShowLogin] = useState(true);
	const [studentLoggedIn, setStudentLoggedIn] = useState(false);

    return (
        <div className={styles.AuthPage}>
           
        </div>
    )
}