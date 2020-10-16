import React from 'react';
import profile from '../../images/profile.jpg';

const About = () => (
    <div className="container my-5 py-5 about-box">
        <div className="row">
            <div className="col-lg-4 col-sm-12">
                <img src={profile} alt="profile" className="profile-pic"></img>
            </div>
            <div className="col-lg-8 col-sm-12 about-text">
                <h2 className="section-title">About Me</h2>
                <p className="pt-3">Hey there, I'm Kennadee!</p>
                <p>I am a Full Stack Web Developer.</p>
                
                <p className="info-p">
                I have a background in Mathematics and life-long dedication to learning. Effective at combining creativity and 
                problem solving to develop user-friendly applications. Known among staff for strong wit and attention to 
                detail no matter the complexity of the project.   
                </p>
                <p>
                    My background in sales and customer service allows me to work effectively on a team and interact professionally with
                    clients.
                </p>
                <p>
                    I love the mental flow that problem solving through coding gives me. I can't wait to join your team!
                </p>
            </div>
        </div>
    </div>
);

export default About;