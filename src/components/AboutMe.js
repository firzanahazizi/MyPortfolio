import './AboutMe.css';
import React from 'react';
import Photo3 from '../images/photo3.png';
import Photo5 from '../images/photo5.png';
import Photo6 from '../images/photo6.png';
import Photo7 from '../images/photo7.png';
import Photo8 from '../images/photo8.png';
import Photo9 from '../images/photo9.png';

function AboutMe() {
    return (
        <div className="about">
            <div className="left-top">
                <h1>Who Am I</h1>
                <div className="left-top">
                    <img src={Photo3} size={20} className="img" alt="myself" />
                </div>
                <p>A passionate and recent graduate with a Bachelor of Information Systems (Hons.) in Intelligent Systems Engineering. Equipped with a solid academic background in intelligent systems, data analysis, and technology, I'm eager to apply my knowledge and innovative thinking to real-world challenges. A quick learner, critical thinker, and collaborative team player, I'm dedicated to contributing to the development of intelligent systems that drive positive change across various industries.</p>
            </div>
            <div className="right-top">
                <h1>Skills</h1>
                <img src={Photo5} size={20} className="img" alt="html" />
                <img src={Photo6} size={20} className="img" alt="python" />
                <img src={Photo7} size={20} className="img" alt="c#" />
                <img src={Photo8} size={20} className="img" alt="R" />
                <img src={Photo9} size={20} className="img" alt="mysql" />
            </div>
        </div>
    );
}

export default AboutMe;