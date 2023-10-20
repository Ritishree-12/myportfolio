import React, { useEffect, useRef }  from 'react';
import Typed from 'typed.js';
import Experience from './Experience';

const Home = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer','Web Developer','Software Developer'],
            typeSpeed: 50,
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (
        <>
            <section className='firstSection'>
                <div className='leftSection'>
                   <div> Hii, My Name Is <span className='purple'>Ritishree!</span></div>
                    <div>and I am a Passonate</div>
                   <div> <span ref={el} style={{color:"rgb(153, 69, 231)"}}/></div>
                   <div className='buttons'>
                    <button className='btn'>Download Resume</button>
                    <button className='btn'>Git Hub</button>
                   </div>
                </div>
                <div className='rightSection'>
                    <img src='./assets/img1.png' alt='picture' />
                </div>
            </section>
            <hr/>
            <Experience/>
        </>
    )
}

export default Home