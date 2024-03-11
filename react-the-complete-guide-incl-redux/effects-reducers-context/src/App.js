import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        //Check current login status
        const userLoginStatus = localStorage.getItem('isLoggedIn');

        //if local storage has status of login setIsLoggedIn true
        //This will create an infinite loop because setIsLoggedIn will cause the component to regenerate again
        if (userLoginStatus === '1') setIsLoggedIn(true);

    },
        //no dependencies mean the effect will only run once when the page loads
        []

    );


    const loginHandler = (email, password) => {
        //Store login status when user logs in
        //This is ok because it is only called when user clicks button
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </React.Fragment>
    );
}

export default App;
