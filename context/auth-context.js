import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie'

const AuthContext = React.createContext();

const AuthProvider = (props) => {

	const [token, setToken] = useState(undefined)
	const [user, setUser] = useState(null)
	const [loggedIn, setLoggedIn] = useState(false)

	useEffect(() => {
		const tokenData = Cookies.get('user_token')
		const MvUser = Cookies.get('QuizOnUser')
		if (MvUser) {
			setUser(MvUser)
		}
		if (tokenData) {
			setToken(tokenData)
			setLoggedIn(true)
		} else {
			setToken(undefined)
		}
	}, [])

	const handleToken = (data) => {
		setToken(data)
		setLoggedIn(true)
	}

	return (
		<AuthContext.Provider
			value={{
				token,
				user,
				loggedIn,
				handleToken
			}}
			{...props}
		/>
	);
};

const useAuth = () => {
	const context = React.useContext(AuthContext);
	if (context === undefined) {
		throw new Error(`useAuth must be used within a AuthProvider`);
	}
	return context;
};

export { AuthProvider, useAuth };
