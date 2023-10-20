import React from 'react'
import Home from '../Pages/Home';


const Header = () => {
   
    return (
        <>
            <header>
                <nav>
                    <div className='left'>
                        Ritisree Portfolio
                    </div>
                    <div className='right'>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Services</a></li>
                            <li><a href='/'>Projects</a></li>
                            <li><a href='/'>Contact Me</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Home />
        </>
    )
}

export default Header