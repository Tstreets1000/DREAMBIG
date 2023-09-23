import styles from './UserPortal.module.scss';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';

// Portal Container should only allow access for students.

export default function UserPortal({
    user, 
    setUser
}) {
    const navigate = useNavigate()
    function handleLogOut() {
        logOut();
        navigate('/dreamBig')
    }
    return (
        <div className={styles.PortalContainer}> 
            User Portal
        </div>
    )
}   
