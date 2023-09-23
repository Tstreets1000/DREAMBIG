import { useState, useEffect, useRef } from 'react';
import * as usersAPI from '../../utilities/users-api'
import styles from './Profile.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer'
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import NavBar from '../../components/NavBar/NavBar';


export default function Profile({ user, setUser }) {
    const navigate = useNavigate()

    return (
        <main>
            <Logo />
            <UserLogOut user={user} setUser={setUser} />
            <Footer />
        </main>
    )
}