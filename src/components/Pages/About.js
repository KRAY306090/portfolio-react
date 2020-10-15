import React from 'react';
import profile from '../../images/profile.jpg';

const About = () => (
    <div className="container my-5 py-5 about-box">
        <div className="row">
            <div className="col-4">
                <img src={profile} alt="profile" className="profile-pic"></img>
            </div>
            <div className="col-8 about-text">
                <h2 className="section-title">About Me</h2>
                <p className="info-p">
                    Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
                    ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
                    quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                    imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
                    diam, sit amet facilisis lectus blandit at.

                </p>
            </div>
        </div>
    </div>
);

export default About;