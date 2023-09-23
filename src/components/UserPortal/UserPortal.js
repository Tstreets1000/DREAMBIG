import styles from './UserPortal.module.scss';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { logOut } from '../../utilities/students-services';

// Portal Container should only allow access for students.

export default function UserPortal({
    student, 
    setStudent
}) {
    const navigate = useNavigate()
    function handleLogOut() {
        logOut();
        navigate('/dreamBig')
    }
    return (
        <div className={styles.PortalContainer}> 
            
        </div>
    )
}   
