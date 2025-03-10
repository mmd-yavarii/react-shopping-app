import React, { useEffect, useState, useContext } from 'react';

import { LoginContext } from '../../contexts/LoginInfoProvider';

import { logIn } from '../../services/API';
import { useNavigate } from 'react-router-dom';

import styles from './LoginPage.module.css';

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    const { setLoginData } = useContext(LoginContext);

    // submit form
    async function submitHandler(event) {
        event.preventDefault();

        try {
            const request = await fetch(logIn, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-type': 'application/json' },
            });
            let json = await request.json();
            if (password === 'admin') {
                json = { ...json, role: 'admin' };
            } else {
                json = { ...json, role: 'user' };
            }
            setLoginData(json);
            navigate('/', { replace: true });
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <h4>Login</h4>
            <p>Set "admin" as the password to be an admin.</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginPage;
