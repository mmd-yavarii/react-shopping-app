import { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

function LoginInfo({ children }) {
    const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem("loginData")) || []);
    const token = loginData.token;
    const role = loginData.role;

    useEffect(() => {
        localStorage.setItem("loginData", JSON.stringify(loginData));
    }, [loginData]);

    return <LoginContext.Provider value={{ token, role, setLoginData }}>{children}</LoginContext.Provider>;
}

export { LoginContext, LoginInfo as default };
