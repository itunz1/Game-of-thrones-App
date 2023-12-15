import React from 'react';
import NavBar from '../NavBar/NavBar';




function Layout({ children, location }) {


    return (
        <>
            <NavBar />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout