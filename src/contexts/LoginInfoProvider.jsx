import { createContext, useEffect, useState } from 'react';

const LoginContext = createContext();

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((row) => row.startsWith(`${name}=`));
    return cookie ? JSON.parse(decodeURIComponent(cookie.split('=')[1])) : {};
}

function LoginInfo({ children }) {
    const [loginData, setLoginData] = useState(getCookie);
    const token = loginData.token;
    const role = loginData.role;

    useEffect(() => {
        document.cookie = `loginData=${encodeURIComponent(
            JSON.stringify(loginData),
        )}; path=/; max-age=86400000`;
    }, [loginData]);

    return (
        <LoginContext.Provider value={{ token, role, setLoginData }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext, LoginInfo as default };
