import React from 'react';
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import resumeVector from './resumeVector.png';
// import Logo from './logo.png';

import './Home.css';
import Navbar from './MicroComponents/Navbar';

const Home = () => {
    return (
        <div className="home">
            {/* <header>
                <div className="container d-flex flex-colums">
                    <img className='logo' src={Logo} alt="" />
                    <ul className='justify-self-end'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/dashboard-resume'>Dashboard</Link></li>
                    </ul>
                </div>
            </header> */}
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='hero-title'>
                            Make a Resume as Easy as You Click Submit Button!
                        </h1>
                        <p className='hero-subtitle'>
                            You can create and edit your resumes in real time, without long loading time and instant results.
                        </p>
                        <Link to='/dashboard-resume'>
                            <button className="btn btn-primary btn-get-started">Get Quickly Resume <BsArrowRight /></button>
                        </Link>
                    </div>
                    <div className="col">
                        <img className='img-resume' src={resumeVector} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;